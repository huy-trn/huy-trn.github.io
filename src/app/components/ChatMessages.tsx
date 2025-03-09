"use client"

import { useMemo } from "react";
import Message from "../actions/Message";
import DOMPurify from "dompurify";

const ChatMessages = ({ messages, loading }: { messages: Message[], loading: boolean }) => {
    const formattedMessages = useMemo(() => {
        return messages.map((msg) => {
            let safeContent = DOMPurify.sanitize(msg.content);
            safeContent = safeContent
                .replace(/\n/g, "<br/>")
                .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
                .replace(/  /g, "&nbsp;&nbsp;");
            return {
                ...msg,
                formattedContent: safeContent,
            };
        });
    }, [messages]);

    return (
        <div className="p-6 h-[75%] overflow-y-auto text-gray-200 space-y-4">
            {formattedMessages.length === 0 ? (
                <p className="text-gray-400 text-md text-center">Ask me anything!</p>
            ) : (
                formattedMessages.map((msg, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-xl max-w-[80%] break-words whitespace-pre-line ${
                            msg.role === "user"
                                ? "bg-blue-600 text-white self-end ml-auto shadow-md"
                                : "bg-gray-800 text-gray-300 shadow-sm"
                        }`}
                        dangerouslySetInnerHTML={{ __html: msg.formattedContent }}
                    />
                ))
            )}
            {loading && <p className="text-gray-400 text-md">Thinking...</p>}
        </div>
    );
};

export default ChatMessages;