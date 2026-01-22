import Button from '@/components/Button'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <motion.div initial="hidden" animate="visible" variants={variants} transition={{ duration: 0.5 }}>
        <Header />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.2, duration: 0.5 }}>
        <AboutSection />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.4, duration: 0.5 }}>
        <ProjectsSection />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.6, duration: 0.5 }}>
        <ContactSection />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.8, duration: 0.5 }}>
        <Footer />
      </motion.div>
      <Button>Scroll Down</Button>
    </main>
  )
}