import Image from 'next/image';
import { motion } from 'framer-motion';

interface AnimalCardProps {
  name: string;
  imageSrc: string;
  description: string;
}

export default function AnimalCard({ name, imageSrc, description }: AnimalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 shadow-md dark:border-gray-700 dark:shadow-lg"
    >
      <a href="#" className="block h-full">
        <Image
          src={imageSrc}
          alt={name}
          className="object-cover"
          width={300}
          height={200}
        />
        <div className="p-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          <p className="text-base font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </div>
      </a>
    </motion.div>
  );
}