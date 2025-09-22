import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function NurseLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0097E8] to-[#00DDD9] p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 md:p-10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Nurse Login
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Please login to access your account
          </p>
        </div>

        {/* Form */}
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FormField
            label="Email Address"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
          <FormField
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
          />

          <Button
            type="submit"
            className="w-full rounded-tl-2xl bg-gradient-to-r from-[#0097E8] to-[#00DDD9] text-white py-2 font-semibold hover:shadow-gradient"
          >
            Login
          </Button>
        </motion.form>
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
