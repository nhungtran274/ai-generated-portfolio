import Button from '@/components/Button'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <motion.main className="min-h-screen p-8" initial="hidden" animate="visible" variants={variants}>
      <motion.h1 className="text-4xl font-bold mb-8" variants={variants}>Welcome to My Animal Portfolio</motion.h1>
      <motion.a href="/about" className="text-blue-500 underline mb-4" variants={variants}>About</motion.a>
      <Button>Explore Animals</Button>
    </motion.main>
  )
}