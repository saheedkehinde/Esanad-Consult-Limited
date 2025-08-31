import React, { useState, useEffect, useCallback, memo } from 'react';

// Import images properly for better build optimization
import heroImage1 from '../assets/hero-image-1.png';
import heroImage2 from '../assets/hero-image-2.png';

const images = [
  { src: heroImage1, alt: "Esanad Consult Islamic fact-checking services" },
  { src: heroImage2, alt: "Ethical information management solutions" },
  // Add the third image here when available
];

// Optimized image component with lazy loading
const OptimizedImage = memo(({ src, alt, isActive, index }) => {
  return (
    <img
      key={index}
      src={src}
      alt={alt}
      loading={index === 0 ? "eager" : "lazy"} // Load first image eagerly, others lazily
      decoding="async"
      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000
        ${isActive ? 'opacity-100' : 'opacity-0'}`}
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoize the setIndex function to prevent unnecessary re-renders
  const setIndex = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg"
      role="region" 
      aria-label="Image slideshow"
    >
      {images.map((image, index) => (
        <OptimizedImage
          key={index}
          src={image.src}
          alt={image.alt}
          isActive={index === currentIndex}
          index={index}
        />
      ))}
      <div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
        role="tablist"
        aria-label="Slideshow navigation"
      >
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full bg-white cursor-pointer
              ${index === currentIndex ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => setIndex(index)}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to slide ${index + 1}`}
            tabIndex={index === currentIndex ? 0 : -1}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(ImageSlider);


