"use client";

import { useState, useEffect } from "react";
import { Send, MessageCircle, X } from "lucide-react";
import Message from "../utils/Message";
import { askAI } from "../utils/askAI";
import ChatMessages from "./ChatMessages";
const Chatbot = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [chatOpen, setChatOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showBubble, setShowBubble] = useState(true);

    const suggestions = [
        "Is Huy open to new job opportunities?",
        "Can I collaborate with Huy on a project?",
        "What are Huy's key skills and expertise?",
        "Can you explain how this chatbot works?",
    ];

    const sendMessage = async (msg?: string) => {
        if (!msg && !input.trim()) return;

        const userMessage: Message = { role: "user", content: msg || input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setLoading(true);
        const botReply = await askAI([...messages, userMessage]);
        setMessages(prev => [...prev, botReply]);
        setLoading(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBubble(false);
        }, 15000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {!chatOpen ? (
                <div className="z-100 fixed bottom-6 right-6 bottom-20 md:right-16 flex flex-col items-end">
                    {showBubble && (
                        <div className="relative bg-white text-black p-4 rounded-xl mb-4 max-w-sm text-sm md:text-base shadow-lg">
                            <p>
                                <span className="font-semibold">Huy</span> built an <span className="text-blue-500 font-semibold">AI assistant</span> 🤖 to answer questions for him. Try it out!
                            </p>
                            {/* Speech Bubble Tail */}
                            <div className="absolute bottom-[-8px] right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                        </div>
                    )}
                    <button
                        onClick={() => {
                            setChatOpen(true);
                            setShowBubble(false);
                        }}
                        className="bg-blue-600 text-white p-4 md:p-5 rounded-full shadow-lg hover:bg-blue-700 transition"
                    >
                        <MessageCircle size={28} />
                    </button>
                </div>
            ) : (
                <div className="z-100 fixed inset-0 flex items-center justify-center">
                    <div onClick={() => setChatOpen(false)} className="absolute inset-0 bg-gray/50 backdrop-blur-lg transition-opacity"></div>
                    <div className="flex flex-col justify-between relative z-10 w-[95vw] md:w-[70vw] lg:w-[65vw] xl:w-[60vw] h-[70vh] md:h-[75vh] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="flex items-center justify-between bg-gray-800 p-4 border-b border-gray-700">
                            <span className="text-white font-semibold text-lg">🤖 Robot is talking</span>
                            <button onClick={() => setChatOpen(false)} className="text-gray-400 hover:text-white">
                                <X size={26} />
                            </button>
                        </div>

                        <ChatMessages messages={messages} loading={loading} />

                        {/* Message Suggestions */}
                        {input.trim() === "" && (
                            <div className="px-4 py-2 bg-gray-800 border-t border-gray-700 flex flex-wrap gap-2">
                                {suggestions.map((suggestion, index) => (
                                    <button
                                        key={index}
                                        className="bg-gray-700 text-gray-300 px-3 py-2 rounded-lg text-sm hover:bg-gray-600 transition"
                                        onClick={() => sendMessage(suggestion)}
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Field */}
                        <div className="p-4 flex items-center bg-gray-800 border-t border-gray-700">
                            <input
                                type="text"
                                className="flex-1 bg-gray-700 text-white p-3 rounded-lg outline-none text-md shadow-inner"
                                placeholder="Type a message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            />
                            <button onClick={() => sendMessage()} className="ml-4 text-blue-400 hover:text-blue-500">
                                <Send size={26} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
