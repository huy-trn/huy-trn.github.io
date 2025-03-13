"use server";

import OpenAI from "openai";
import Message from "./Message";
import { initialMessages, initialTokenCount } from "./initialMessages";
import { estimateTokenCount } from "./estimateTokenCount";

const MAX_TOKENS = 8000;
const MODEL = "llama-3.3-70b-versatile";
const openai = new OpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.GROQ_API_KEY,
});

const limitMessages = (inputMessages: Message[], maxTokens: number) => {
    const reversedMessages: Message[] = [];
    let totalTokens = initialTokenCount;
    // Last user's input
    const lastMessageTokenCount = estimateTokenCount(inputMessages[inputMessages.length - 1].content);

    if (totalTokens + lastMessageTokenCount > maxTokens) {
        return reversedMessages;
    }
    totalTokens += lastMessageTokenCount;
    reversedMessages.push(inputMessages[inputMessages.length - 1])

    // From last assistant's message
    for (let i = inputMessages.length - 2; i > 0; i -= 2) {
        const pairTokenCount = estimateTokenCount(inputMessages[i].content) + estimateTokenCount(inputMessages[i - 1].content);
        if (totalTokens + pairTokenCount > maxTokens) break;
        reversedMessages.push(inputMessages[i]);
        reversedMessages.push(inputMessages[i - 1]);
        totalTokens += pairTokenCount;
    }

    return reversedMessages.reverse();
}

export async function askAI(inputMessages: Message[] = []): Promise<Message> {
    try {
        const limitedMessages = limitMessages(inputMessages, MAX_TOKENS - 500) || []; // Leave buffer for response tokens
        if (limitedMessages.length < 1) {
            return {
                role: "system",
                content: "Your input is too long. Try asking a shorter question!"
            }
        }

        let response;
        try {
            response = await openai.chat.completions.create({
                model: MODEL,
                messages: [
                    ...initialMessages,
                    ...limitedMessages,
                ],
            });
        } catch (error) {
            return {
                role: "system",
                content: "Oops! It looks like we've hit the rate limit. This may be due to excessive usage. Please try again later!"
            }
        }
        return {
            role: "assistant",
            content: response.choices[0].message.content as string

        };
    } catch (e) {
        return {
            role: "system",
            content: "Something's broken, I have no clue.\n¯\\_(ツ)_/¯"
        };
    }
}


