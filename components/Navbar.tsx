import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-black shadow-md p-4">
      <motion.div variants={variants} transition={{ duration: 0.5 }}>
        <Link href="/">
          <a className="text-2xl font-bold">My Animal Portfolio</a>
        </Link>
      </motion.div>
      <motion.ul variants={variants} transition={{ duration: 0.5, delay: 0.2 }} className="flex space-x-4 ml-auto">
        <li><Link href="/about"><a>About</a></Link></li>
        <li><Link href="/projects"><a>Projects</a></Link></li>
        <li><Link href="/contact"><a>Contact</a></Link></li>
      </motion.ul>
    </nav>
  );
}