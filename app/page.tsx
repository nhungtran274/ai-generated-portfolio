import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <motion.div initial="hidden" animate="visible" exit="hidden" className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <motion.div variants={variants} transition={{ duration: 0.5 }}>
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
        </motion.div>
        <motion.div variants={variants} transition={{ duration: 0.5, delay: 0.2 }}>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to My Animal Portfolio
          </h1>
        </motion.div>
        <motion.div variants={variants} transition={{ duration: 0.5, delay: 0.4 }}>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Explore my collection of animal-related projects and resources.
          </p>
        </motion.div>
      </main>
    </motion.div>
  );
}