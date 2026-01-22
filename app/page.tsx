import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start sm:text-left">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to My Animal Portfolio
          </h1>
          <p className="text-xl text-zinc-700 dark:text-zinc-400">
            Discover my passion for various animals through engaging content and visuals.
          </p>
        </div>
      </main>
    </motion.div>
  );
}