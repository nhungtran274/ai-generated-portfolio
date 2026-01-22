import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black shadow-md p-4 mt-auto">
      <motion.div variants={variants} transition={{ duration: 0.5 }}>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2023 My Animal Portfolio. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}