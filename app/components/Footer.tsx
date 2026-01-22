import { motion } from "framer-motion";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-zinc-800 text-white py-6 text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="container mx-auto px-4"
      >
        <p className="text-sm">
          © {new Date().getFullYear()} Animal Portfolio. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;