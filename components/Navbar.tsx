import { motion } from "framer-motion";
import Link from "next/link";

const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      className="fixed top-0 w-full bg-white dark:bg-zinc-900 shadow-md z-50"
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-black dark:text-white">
          Animal Portfolio
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="#about" className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}