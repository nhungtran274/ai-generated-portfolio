import { motion } from "framer-motion";
import AnimalCard from "./AnimalCard";

const animals = [
  {
    imageSrc: "/lion.svg",
    name: "Lion",
    description: "The king of the jungle.",
  },
  {
    imageSrc: "/elephant.svg",
    name: "Elephant",
    description: "The largest land animal.",
  },
  {
    imageSrc: "/tiger.svg",
    name: "Tiger",
    description: "One of the most powerful predators.",
  },
];

export default function AnimalsList() {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      {animals.map((animal, index) => (
        <motion.li key={index}>
          <AnimalCard {...animal} />
        </motion.li>
      ))}
    </motion.ul>
  );
}