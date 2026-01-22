import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <motion.section initial="hidden" animate="visible" exit="hidden" className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black">
        <motion.h1 variants={variants} transition={{ duration: 0.5 }}>
          About Me
        </motion.h1>
        <motion.p variants={variants} transition={{ duration: 0.5, delay: 0.2 }}>
          I am a passionate animal enthusiast and web developer dedicated to creating engaging and informative websites.
        </motion.p>
      </motion.section>
      <Footer />
    </>
  );
}