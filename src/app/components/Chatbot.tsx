"use client";

import { useState, useEffect } from "react";
import { Send, MessageCircle, X } from "lucide-react";
import Message from "../actions/Message";
import { askAI } from "../actions/askAI";
import ChatMessages from "./ChatMessages";

const Chatbot = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [chatOpen, setChatOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showBubble, setShowBubble] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBubble(false);
        }, 15000);
        return () => clearTimeout(timer);
    }, []);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages([...messages, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const botReply = await askAI([...messages, { role: "user", content: input }]);
            setMessages([...messages, userMessage, { role: "assistant", content: botReply }]);
        } catch (error) {
            setMessages([...messages, { role: "assistant", content: "Error: Could not connect to AI." }]);
        }

        setLoading(false);
    };

    return (
        <>
            {!chatOpen ? (
                <div className="fixed bottom-6 right-6 md:bottom-18 md:right-16 flex flex-col items-end">
                    {showBubble && (
                        <div className="relative bg-white text-black p-3 rounded-lg mb-3 max-w-sm text-sm md:text-base">
                            <p>Huy built an AI assistant to answer questions for him. Try it out!</p>
                            <div className="absolute bottom-[-10px] right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
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
                <div className="fixed inset-0 flex items-center justify-center">
                    <div onClick={() => setChatOpen(false)} className="absolute inset-0 bg-gray/50 backdrop-blur-lg transition-opacity"></div>
                    <div className="flex flex-col justify-between relative z-10 w-[95vw] md:w-[70vw] lg:w-[65vw] xl:w-[60vw] h-[70vh] md:h-[75vh] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="flex items-center justify-between bg-gray-800 p-4 border-b border-gray-700">
                            <span className="text-white font-semibold text-lg">Chat with Huy's assistant</span>
                            <button onClick={() => setChatOpen(false)} className="text-gray-400 hover:text-white">
                                <X size={26} />
                            </button>
                        </div>
                        <ChatMessages messages={messages} loading={loading} />
                        <div className="p-4 flex items-center bg-gray-800 border-t border-gray-700">
                            <input
                                type="text"
                                className="flex-1 bg-gray-700 text-white p-3 rounded-lg outline-none text-md shadow-inner"
                                placeholder="Type a message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            />
                            <button onClick={sendMessage} className="ml-4 text-blue-400 hover:text-blue-500">
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
