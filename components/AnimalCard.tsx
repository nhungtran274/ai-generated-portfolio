import Image from 'next/image';
import { motion } from 'framer-motion';

interface AnimalCardProps {
  imageSrc: string;
  name: string;
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimalCard({ imageSrc, name, description }: AnimalCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-sm rounded overflow-hidden shadow-lg my-4"
    >
      <Image
        className="w-full"
        src={imageSrc}
        alt={name}
        width={300}
        height={200}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </motion.div>
  );
}