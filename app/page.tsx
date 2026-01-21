import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <section className="mb-10 text-center">
          <h1 className="text-5xl font-bold mb-4">John Doe</h1>
          <p className="text-xl">Full Stack Developer</p>
        </section>
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="text-lg">I am a passionate software developer specializing in building modern web applications.</p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={variants} whileInView="visible" viewport={{ once: true }}>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-sm">Description of project 1...</p>
            </div>
          </motion.div>
          <motion.div variants={variants} whileInView="visible" viewport={{ once: true }}>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="text-sm">Description of project 2...</p>
            </div>
          </motion.div>
          <motion.div variants={variants} whileInView="visible" viewport={{ once: true }}>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Project 3</h3>
              <p className="text-sm">Description of project 3...</p>
            </div>
          </motion.div>
        </section>
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">React</span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">JavaScript</span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">TypeScript</span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">Node.js</span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">Express</span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">Tailwind CSS</span>
          </div>
        </section>
        <section className="mt-10 text-center">
          <h2 className="text-3xl font-bold">Contact</h2>
          <form action="#" method="POST">
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="px-4 py-2 border border-gray-300 rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </main>
    </motion.div>
  );
}