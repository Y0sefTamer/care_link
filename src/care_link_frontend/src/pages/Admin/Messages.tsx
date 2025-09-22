import { useState } from "react";
import { Search, Phone, Info, MessageSquare, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import nurseChat from "@/assets/nurse-chat.png";

const chats = [
    {
        id: 1,
        name: "Ahmed Magdy",
        message: "Hey, are you available tomorrow?",
        time: "12:30 PM",
        unread: 2,
        image: nurseChat,
        online: true,
    },
    {
        id: 2,
        name: "Mariam Fadel",
        message: "Thank you so much!",
        time: "11:15 AM",
        unread: 0,
        image: nurseChat,
        online: false,
    },
    {
        id: 3,
        name: "Mariam Mohamed",
        message: "Can we reschedule?",
        time: "09:45 AM",
        unread: 5,
        image: nurseChat,
        online: true,
    },
    {
        id: 4,
        name: "Yossef Tamer",
        message: "Can we reschedule?",
        time: "09:45 AM",
        unread: 5,
        image: nurseChat,
        online: true,
    },

];

export default function ChatPage() {
    const [selectedChat, setSelectedChat] = useState(chats[0]);
    const [messages, setMessages] = useState([
        { id: 1, sender: "them", text: "Hello, how are you?", time: "09:30 AM" },
        { id: 2, sender: "me", text: "I'm fine, thanks!", time: "09:32 AM" },
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        const now = new Date();
        const formattedTime = now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
        setMessages((prev) => [
            ...prev,
            { id: Date.now(), sender: "me", text: input, time: formattedTime },
        ]);
        setInput("");
    };

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            {/* Sidebar */}
            <motion.aside
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80 }}
                className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col"
            >
                {/* Header */}
                <div className="flex items-center gap-2 p-4 border-b border-gray-200 dark:border-gray-700">
                    <MessageSquare className="w-6 h-6 text-[#0097E8]" />
                    <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                        Chat
                    </h2>
                </div>

                {/* Search */}
                <div className="p-4">
                    <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2 shadow-sm"
                    >
                        <Search className="w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent flex-1 outline-none px-2 text-sm text-gray-700 dark:text-gray-200"
                        />
                    </motion.div>
                </div>

                {/* Chats List */}
                <div className="flex-1 overflow-y-auto">
                    {chats.map((chat) => (
                        <motion.div
                            key={chat.id}
                            onClick={() => setSelectedChat(chat)}
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                            className={`flex items-center justify-between p-4 cursor-pointer ${selectedChat.id === chat.id
                                ? "bg-gray-100 dark:bg-gray-700"
                                : "hover:bg-gray-50 dark:hover:bg-gray-700"
                                }`}
                        >
                            {/* Left (image + info) */}
                            <div className="flex items-center gap-3">
                                <motion.img
                                    src={chat.image}
                                    alt={chat.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                    whileHover={{ rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                />
                                <div>
                                    <h3 className="font-medium text-gray-800 dark:text-gray-100">
                                        {chat.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                                        {chat.message}
                                    </p>
                                </div>
                            </div>

                            {/* Right (time + unread) */}
                            <div className="text-right">
                                <p className="text-xs text-gray-400">{chat.time}</p>
                                {chat.unread > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="inline-block mt-1 text-xs bg-[#B95F20] text-white rounded-full px-2 py-0.5"
                                    >
                                        {chat.unread}
                                    </motion.span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.aside>

            {/* Chat Window */}
            <main className="flex-1 flex flex-col">
                {/* Chat Header */}
                <motion.div
                    key={selectedChat.id}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 80 }}
                    className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                >
                    <div className="flex items-center gap-3">
                        <img
                            src={selectedChat.image}
                            alt={selectedChat.name}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="font-medium text-gray-800 dark:text-gray-100">
                                {selectedChat.name}
                            </h3>
                            <p className="text-sm text-green-500">
                                {selectedChat.online ? "Online" : "Offline"}
                            </p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                        <Phone className="w-5 h-5 cursor-pointer hover:text-[#0097E8]" />
                        <Info className="w-5 h-5 cursor-pointer hover:text-[#0097E8]" />
                    </div>
                </motion.div>

                {/* Chat Body */}
                <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50 dark:bg-gray-900">
                    <AnimatePresence>
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3 }}
                                className={`flex flex-col max-w-xs ${msg.sender === "me" ? "ml-auto items-end" : "items-start"
                                    }`}
                            >
                                <div className="flex gap-2 items-end">
                                    {msg.sender === "them" && (
                                        <img
                                            src={selectedChat.image}
                                            alt="sender"
                                            className="w-8 h-8 rounded-full"
                                        />
                                    )}
                                    <div
                                        className={`px-4 py-2 rounded-2xl shadow text-sm ${msg.sender === "me"
                                            ? "bg-[#0097E8] text-white rounded-br-none"
                                            : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-none"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400 mt-1">{msg.time}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Chat Input */}
                <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2 outline-none text-sm text-gray-700 dark:text-gray-200"
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={handleSend}
                            className="bg-[#0097E8] text-white p-3 rounded-full hover:bg-[#007bbd] flex items-center justify-center shadow-md"
                        >
                            <Send className="w-4 h-4" />
                        </motion.button>
                    </div>
                </div>
            </main>
        </div>
    );
}
