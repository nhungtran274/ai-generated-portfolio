import Image from 'next/image';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <motion.Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
          variants={variants}
          initial="hidden"
          animate="visible"
        />
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left"
        >
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to My Animal Portfolio
          </h1>
          <p className="text-xl text-zinc-700 dark:text-zinc-400">
            Explore my collection of stunning animal images and learn more about them.
          </p>
        </motion.div>
      </main>
    </motion.div>
  );
}