// components/DownArrow.js
import { motion } from 'framer-motion';

const DownArrow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{  duration: 3, // Duration for one complete bounce
        repeat: Infinity, // Repeat indefinitely
        repeatType: 'loop', // Loop the animation
        ease: 'easeInOut' // Smooth easing function
      }}
      className="flex justify-center items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-500"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </motion.div>
  );
};

export default DownArrow;
