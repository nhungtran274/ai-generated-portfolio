import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface AnimalCardProps {
  imageUrl: string;
  name: string;
  description: string;
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export default function AnimalCard({ imageUrl, name, description }: AnimalCardProps) {
  return (
    <motion.div
      variants={fadeInLeft}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
    >
      <Image
        src={imageUrl}
        alt={name}
        width={200}
        height={200}
        className="rounded mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}