import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E6F7FF] to-[#F0FFFB] px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        {/* Error Number */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-8xl font-extrabold text-[#0097E8] mb-4"
        >
          404
        </motion.h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          The page you’re looking for doesn’t exist or has been moved.  
          Let’s get you back on track!
        </p>

        {/* Button Back */}
        <Link to="/">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#0097E8] to-[#00DDD9] text-white shadow-lg hover:opacity-90 transition-all"
          >
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
