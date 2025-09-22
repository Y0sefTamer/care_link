import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import loginImage from "@/assets/login-right-section.png";

export default function LoginPage() {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Login Successfully")

        navigate("/my-dashboard");
    };

    return (
        <div
            dir="rtl"
            className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gray-50 dark:bg-gray-900"
        >
            {/* Right Side Image */}
            <div className="hidden md:flex w-full h-full dark:bg-gray-900">
                <img
                    src={loginImage}
                    alt="CareLink illustration"

                />
            </div>

            {/* Left Side Form */}
            <motion.div
                dir="ltr"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex items-center justify-center w-full h-full p-8 md:p-12 bg-gray-50 dark:bg-gray-900"
            >
                <div className="w-full max-w-md dark:bg-gray-800 rounded-2xl p-8 shadow-none">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        Sign in to your CareLink account
                    </p>

                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit} // ✅ هنا
                        className="space-y-6"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.15 } },
                        }}
                    >
                        <FormField label="Full Name" id="full-name" placeholder="Enter your full name" />
                        <FormField label="Email Address" id="email" type="email" placeholder="Enter your email" />
                        <FormField label="Phone Number" id="phone" type="tel" placeholder="+20 ..." />
                        <FormField label="Address" id="address" placeholder="Enter your address" />

                        {/* Buttons */}
                        <motion.div
                            className="flex justify-between items-center pt-4"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <Link to="/">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="rounded-tl-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#0097E8] to-[#00DDD9] border border-[#0097E8] dark:border-[#00DDD9] hover:text-black dark:hover:text-white"
                                >
                                    Cancel
                                </Button>
                            </Link>
                            <Button
                                type="submit"
                                className="rounded-tl-2xl bg-gradient-to-r from-[#0097E8] to-[#00DDD9] text-white hover:shadow-gradient"
                            >
                                Sign In
                            </Button>
                        </motion.div>
                    </motion.form>
                </div>
            </motion.div>
        </div>
    );
}

function FormField({
    label,
    id,
    type = "text",
    placeholder = "",
}: {
    label: string;
    id: string;
    type?: string;
    placeholder?: string;
}) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <Label
                htmlFor={id}
                className="text-gray-700 dark:text-gray-200 font-medium"
            >
                {label}
            </Label>
            <div className="group relative">
                <Input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className="
                        bg-transparent 
                        border-0 border-b border-gray-300 dark:border-gray-700
                        rounded-none shadow-none 
                        px-0 pt-1 pb-2
                        text-gray-900 dark:text-gray-100
                        placeholder:text-gray-400 dark:placeholder:text-gray-500
                        focus:outline-none focus:ring-0 focus:border-transparent
                        focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-offset-0
                    "
                />
                {/* Gradient underline on focus */}
                <motion.span
                    layoutId={`${id}-underline`}
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gradient-to-r from-[#0097E8] to-[#00DDD9] transition-transform duration-300 origin-left group-focus-within:scale-x-100"
                />
            </div>
        </motion.div>
    );
}
