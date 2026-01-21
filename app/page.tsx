import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      style={{ scaleX: spring }}
      className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/globe.svg"
          alt="Globe logo"
          width={100}
          height={20}
          priority
        />
        <motion.h1
          variants={variants}
          className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50"
        >
          Welcome to Our Animal Portfolio
        </motion.h1>
        <motion.p
          variants={variants}
          className="text-xl text-gray-600 dark:text-zinc-400"
        >
          Discover a collection of stunning animals from around the world.
        </motion.p>
      </main>
    </motion.div>
  );
}