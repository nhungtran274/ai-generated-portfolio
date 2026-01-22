import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left"
        >
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to My Animal Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-zinc-400">
            Discover unique animals and their fascinating stories.
          </p>
        </motion.div>
      </main>
    </motion.div>
  );
}