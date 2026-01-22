import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <motion.section initial="hidden" animate="visible" exit="hidden" className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black">
        <motion.h1 variants={variants} transition={{ duration: 0.5 }}>
          My Projects
        </motion.h1>
        <motion.div variants={variants} transition={{ duration: 0.5, delay: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example Project */}
          <motion.div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Project Name</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Brief description of the project.
            </p>
          </motion.div>
          {/* More Projects */}
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
}