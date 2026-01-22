import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <motion.h1 variants={itemVariants} className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Welcome to My Animal Portfolio
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg text-center text-gray-600 dark:text-gray-400 sm:text-left">
          Discover my passion for animals through this modern and professional portfolio with smooth scroll animations.
        </motion.p>
      </main>
    </motion.div>
  );
}