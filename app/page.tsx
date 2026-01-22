import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <motion.img
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <motion.h1
            className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to My Animal Portfolio
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-400"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.4 }}
          >
            Explore my collection of animal-themed projects and resources.
          </motion.p>
        </div>
      </main>
    </motion.div>
  );
}