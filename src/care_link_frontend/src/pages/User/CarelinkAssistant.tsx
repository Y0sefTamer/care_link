import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import sendIcon from "@/assets/send.png";


function FourPointStar({ size = 24, className = "" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
        </svg>
    );
}

export default function CarelinkAssistantPage() {
    return (
        <div className="relative min-h-screen flex flex-col bg-[#FF86E11C] dark:bg-background">
            {/* Main Content */}
            <div className="flex flex-col flex-1 items-center justify-center px-6">
                {/* Stars top right */}
                <div className="flex justify-end p-6">
                    <div className="flex flex-col items-end space-y-2">
                        <div className="flex justify-end w-full pr-4">
                            <FourPointStar className="w-8 h-8 text-foreground" />
                        </div>
                        <div className="flex space-x-2">
                            <FourPointStar className="w-8 h-8 text-foreground" />
                            <FourPointStar className="w-8 h-8 text-foreground" />
                        </div>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl font-bold text-foreground mb-12 text-center">
                    Carelink Assistant
                </h1>

                {/* Suggestions */}
                <div className="w-full max-w-5xl mb-16">
                    <p className="text-muted-foreground text-center lg:text-2xl font-medium mb-4">
                        Suggestions on what to ask Our AI
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Suggestion text="What can I ask you to do?" />
                        <Suggestion text="Which one of my projects is performing the best?" />
                        <Suggestion text="What projects should I be concerned about right now?" />
                    </div>
                </div>

                {/* Search bar */}
                <div className="relative w-4/5 max-w-9xl mx-auto">
                    <Input
                        placeholder="Ask me anything about your projects"
                        className="px-4 py-8 pr-12 rounded-xl border border-gray-300 shadow focus:ring-2 focus:ring-[#FF86E1] focus:outline-none focus:border-none text-gray-700"
                    />
                    {/* Send Icon */}
                    <img
                        src={sendIcon}
                        alt="send"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}

function Suggestion({ text }: { text: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className="px-4 py-3 rounded-lg bg-white text-gray-800 shadow-sm border border-gray-200 cursor-pointer text-sm md:text-base"
        >
            {text}
        </motion.div>
    );
}
