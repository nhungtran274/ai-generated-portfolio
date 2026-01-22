import { motion } from 'framer-motion'

const buttonVariants = {
  hidden: { scale: 0.9 },
  visible: { scale: 1 },
}

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover="visible"
      whileTap="hidden"
      variants={buttonVariants}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {children}
    </motion.button>
  )
}