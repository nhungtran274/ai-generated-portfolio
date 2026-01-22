import { motion } from 'framer-motion';

interface Animal {
  id: number;
  name: string;
  imageSrc: string;
}

const animals: Animal[] = [
  { id: 1, name: 'Lion', imageSrc: '/lion.png' },
  { id: 2, name: 'Tiger', imageSrc: '/tiger.png' },
  { id: 3, name: 'Elephant', imageSrc: '/elephant.png' },
  { id: 4, name: 'Giraffe', imageSrc: '/giraffe.png' },
];

const gridItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function AnimalsGrid() {
  return (
    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} initial="hidden" animate="visible" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12">
      {animals.map((animal) => (
        <motion.div key={animal.id} variants={gridItemVariants} className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src={animal.imageSrc}
            alt={animal.name}
            width={400}
            height={300}
            quality={80}
            placeholder="blur"
            blurDataURL="/placeholder.png"
          />
          <div className="p-4 bg-white dark:bg-black">
            <h2 className="text-xl font-bold">{animal.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">Learn more about {animal.name}s.</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}