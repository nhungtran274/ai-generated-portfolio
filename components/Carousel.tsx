import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <AnimatePresence>
      <motion.div
        key={images[currentImageIndex]}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        exit={{ x: 100 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-[50vh] overflow-hidden"
      >
        <button onClick={handlePrevClick} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black opacity-75 p-2 rounded-full cursor-pointer">
          &lt;
        </button>
        <Image
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          fill
          objectFit="cover"
        />
        <button onClick={handleNextClick} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black opacity-75 p-2 rounded-full cursor-pointer">
          &gt;
        </button>
      </motion.div>
    </AnimatePresence>
  );
}