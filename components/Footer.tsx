import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      className="bg-zinc-900 text-white py-4 text-center"
    >
      <p className="text-sm">
        © 2023 Animal Portfolio. All rights reserved.
      </p>
    </motion.footer>
  );
}