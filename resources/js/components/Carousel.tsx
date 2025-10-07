import { useState, useEffect } from 'react';

interface Card {
  id: number;
  image: string;
  alt: string;
  title: string;
  buttonText: string;
}

const cards: Card[] = [
  {
    id: 1,
    image: '/garage1.jpg',
    alt: 'Garage 1',
    title: 'Join our team. Build the future of automotive care.',
    buttonText: '+ See More About Careers',
  },
  {
    id: 2,
    image: '/garage2.jpg',
    alt: 'Garage 2',
    title: 'Our story, our promise of why thousands trust us.',
    buttonText: '+ Read About Ezcare Warranty',
  },
  {
    id: 3,
    image: '/garage3.jpg',
    alt: 'Garage 3',
    title: 'Need help or have questions? We’re just a click away.',
    buttonText: '+ Contact Us',
  },
  {
    id: 4,
    image: '/garage4.jpg',
    alt: 'Garage 4',
    title: 'Find a trusted workshop near you fast and easy.',
    buttonText: '+ Locate ECW Services',
  },
];

const slides: Card[][] = [];
for (let i = 0; i < cards.length; i += 2) {
  slides.push(cards.slice(i, i + 2));
}

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-md">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-transform duration-500 ease-in-out ${
              slideIndex === currentIndex ? 'translate-x-0' : slideIndex < currentIndex ? '-translate-x-full' : 'translate-x-full'
            }`}
            style={{ display: slideIndex === currentIndex ? 'grid' : 'none' }}
          >
            {slide.map((card) => (
              <div
                key={card.id}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden min-h-[12rem] sm:min-h-[14rem] md:min-h-[16rem]"
              >
                <div className="flex-shrink-0 flex items-center justify-center max-w-[50%] max-h-48 sm:max-h-56 md:max-h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="max-w-full max-h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 flex flex-col justify-center flex-1">
                  <h3 className="font-bold text-base sm:text-lg mb-2">{card.title}</h3>
                  <button className="mt-4 bg-gray-200 text-gray-800 rounded-md px-3 py-2 text-sm hover:bg-gray-300 transition">
                    {card.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
