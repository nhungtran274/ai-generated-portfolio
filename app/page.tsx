import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50"
        >
          Welcome to My Animal Portfolio
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl text-gray-600 dark:text-gray-400 sm:text-lg"
        >
          Discover various species and their fascinating stories.
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-12"
        >
          <Image
            className="dark:invert"
            src="/globe.svg"
            alt="Globe icon"
            width={100}
            height={20}
            priority
          />
        </motion.div>
      </main>
    </motion.div>
  );
}