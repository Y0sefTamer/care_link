import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import nurseCircle from "@/assets/nurse-circle.png"

export default function BookingNursePage() {
  const nurse = {
    name: "Mariam Fadel Al-Otaibi",
    service: "Critical Care Nursing",
    rate: 30,
    image: nurseCircle, 
  };

  const hours = 1;
  const total = nurse.rate * hours;

  return (
    <div className="max-w-4xl mx-auto my-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Booking Nurse
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Fill in the required information to book an appointment with{" "}
          <span className="font-semibold">{nurse.name}</span>.
        </p>
      </motion.div>

      {/* Nurse Info */}
      <section className="bg-[#72bde94f] rounded-2xl p-6 flex justify-center items-center gap-6 shadow-lg">
        <img
          src={nurse.image}
          alt={nurse.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
        />
        <div>
          <h2 className="text-2xl font-semibold text-black dark:text-white">{nurse.name}</h2>
          <p className="text-black/50 dark:text-gray-500">{nurse.service}</p>
          <p className="mt-2 font-medium text-black dark:text-white">{nurse.rate} Dollar / Hour</p>
        </div>
      </section>

      {/* Form */}
      <motion.form
        className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 md:p-10 my-10 space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FormField label="Full Name" id="fullName" placeholder="Enter full name" />
        <FormField label="Phone Number" id="phone" type="tel" placeholder="+20 ..." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField label="Date" id="date" type="date" />
          <FormField label="Time" id="time" type="time" />
        </div>
        <FormField label="Number of Time" id="hours" type="number" placeholder="Enter hours" />

        <div className="flex justify-end gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            className="rounded-tl-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#0097E8] to-[#00DDD9] border border-[#0097E8] dark:border-[#00DDD9] hover:text-black dark:hover:text-white"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="rounded-tl-2xl bg-gradient-to-r from-[#0097E8] to-[#00DDD9] text-white hover:shadow-gradient"
          >
            Book Now
          </Button>
        </div>
      </motion.form>

      {/* Total Cost */}
      <section className="bg-[#72BEE9] rounded-2xl p-6 flex justify-between items-center text-black font-medium shadow-lg">
        <p>
          {hours} Hour * {nurse.rate} Dollar
        </p>
        <span className="bg-white text-[#0097E8] px-4 py-1 rounded-full font-bold shadow">
          {total} $
        </span>
      </section>
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
