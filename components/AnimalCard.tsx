import Image from "next/image";
import { motion } from "framer-motion";

interface AnimalCardProps {
  imageSrc: string;
  name: string;
  description: string;
}

export default function AnimalCard({ imageSrc, name, description }: AnimalCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <Image
        src={imageSrc}
        alt={name}
        width={200}
        height={200}
        className="rounded-t-lg"
      />
      <div className="p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}