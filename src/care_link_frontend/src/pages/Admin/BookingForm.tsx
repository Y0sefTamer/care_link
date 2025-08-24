import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const nurses = ["Mariam Fadel", "Ahmed Magdy", "Mariam Mohammed", "Yossef Tamer"];

export default function BookingForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mx-auto p-6 md:p-10 bg-white dark:bg-gray-800 shadow-xl dark:shadow-cyan-900/30 rounded-2xl my-12"
    >
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
        Book a Nurse
      </h2>

      <motion.form
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Patient Name */}
        <FormField
          label="Patient Name"
          id="patient-name"
          placeholder="Enter patient name"
        />

        {/* Address */}
        <FormField label="Address" id="address" placeholder="Enter address" />

        {/* Nurse + Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <NurseField />
          <FormField label="Time" id="time" type="time" />
        </div>

        {/* Date + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField label="Date" id="date" type="date" />
          <FormField label="Phone" id="phone" type="tel" placeholder="+20 ..." />
        </div>

        {/* Email */}
        <FormField
          label="Email"
          id="email"
          type="email"
          placeholder="Enter email"
        />

        {/* Buttons */}
        <motion.div
          className="flex justify-end gap-4 pt-4"
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
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097E8] to-[#00DDD9] border border-[#0097E8] dark:border-[#00DDD9] hover:text-black dark:hover:text-white"
            >
              Cancel
            </Button>
          </Link>
          <Button
            type="submit"
            className="bg-gradient-to-r from-[#0097E8] to-[#00DDD9] text-white hover:shadow-gradient"
          >
            Book Now
          </Button>
        </motion.div>
      </motion.form>
    </motion.div>
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

function NurseField() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Label
        htmlFor="nurse"
        className="text-gray-700 dark:text-gray-200 font-medium"
      >
        Nurse
      </Label>
      <div className="group relative">
        <Select>
          <SelectTrigger
            id="nurse"
            className="
              bg-transparent 
              border-0 border-b border-gray-300 dark:border-gray-700
              rounded-none shadow-none 
              px-0 pt-1 pb-2
              text-gray-900 dark:text-gray-100
              placeholder:text-gray-400 dark:placeholder:text-gray-500
              focus:outline-none focus:ring-0 focus:border-transparent
              focus-visible:ring-offset-0 focus:ring-offset-0
            "
          >
            <SelectValue placeholder="Choose nurse" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg">
            {nurses.map((nurse) => (
              <SelectItem
                key={nurse}
                value={nurse}
                className="text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-[#0097E8] hover:to-[#00DDD9] hover:text-white"
              >
                {nurse}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {/* Gradient underline on focus */}
        <motion.span
          layoutId="nurse-underline"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gradient-to-r from-[#0097E8] to-[#00DDD9] transition-transform duration-300 origin-left group-focus-within:scale-x-100"
        />
      </div>
    </motion.div>
  );
}
