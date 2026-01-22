import Image from 'next/image';
import { motion } from 'framer-motion';

interface AnimalCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function AnimalCard({ imageSrc, title, description }: AnimalCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-zinc-700 mb-4"
    >
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={200}
        className="object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </motion.div>
  );
}