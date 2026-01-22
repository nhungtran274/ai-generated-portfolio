import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-zinc-800 shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" passHref>
          <a className="text-xl font-bold dark:text-white">
            Animal Portfolio
          </a>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="#about" passHref>
              <a className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="#projects" passHref>
              <a className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="#contact" passHref>
              <a className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;