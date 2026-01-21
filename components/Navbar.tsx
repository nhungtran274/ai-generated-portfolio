import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white z-50 shadow-md"
    >
      <div className="container mx-auto px-4 py-4">
        <ul className="flex justify-between items-center">
          <li>
            <a href="#home" className="text-xl font-bold">Home</a>
          </li>
          <li>
            <a href="#about" className="text-xl font-bold">About</a>
          </li>
          <li>
            <a href="#projects" className="text-xl font-bold">Projects</a>
          </li>
          <li>
            <a href="#skills" className="text-xl font-bold">Skills</a>
          </li>
          <li>
            <a href="#contact" className="text-xl font-bold">Contact</a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}