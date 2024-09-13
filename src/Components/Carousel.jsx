import { useState, useEffect } from "react";
import Me from "../assets/Me.jpeg"
import Pet from "../assets/pet.jpeg"
import fool from "../assets/fool.jpeg"


const images = [Pet, Me, fool];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="w-full overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="object-cover w-full h-64 transition-transform duration-300"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="top-1/2 left-4 focus:outline-none hover:bg-gray-700 absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="top-1/2 right-4 focus:outline-none hover:bg-gray-700 absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full"
      >
        &#10095;
      </button>

      {/* Indicator Dots */}
      {/* <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
