
import { useState } from 'react';
import { Link } from '@inertiajs/react';

interface Card {
  id: number;
  image: string;
  alt: string;
  title: string;
  buttonText: string;
  link: string;
}

const cards: Card[] = [
  {
    id: 1,
    image: '/team.jpg',
    alt: 'Ezcare Team',
    title: 'Join our team. Build the future of automotive care.',
    buttonText: '+ See More About Careers',
    link: '/career',
  },
  {
    id: 2,
    image: '/office1.png',
    alt: 'Ezcare Office',
    title: 'Our story, our promise of why thousands trust us.',
    buttonText: '+ Read About Ezcare Warranty',
    link: '/about',
  },
  {
    id: 3,
    image: '/garage3.jpg',
    alt: 'Customer Support',
    title: 'Need help or have questions? We are just a click away.',
    buttonText: '+ Contact Us',
    link: '/contact',
  },
  {
    id: 4,
    image: '/garage4.jpg',
    alt: 'Workshop Locator',
    title: 'From policy to performance, discover the companies driving Ezcare forward.',
    buttonText: '+ Discover Our Group of Companies',
    link: '/goc',
  },
];

const slides: Card[][] = [];
for (let i = 0; i < cards.length; i += 2) {
  slides.push(cards.slice(i, i + 2));
}

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
      {/* Carousel Container */}
      <div className="relative overflow-hidden" style={{ minHeight: '400px' }}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`transition-opacity duration-500 ease-in-out ${
              slideIndex === currentIndex ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {slide.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="aspect-video w-full overflow-hidden bg-gray-100">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-6 flex flex-col items-center text-center flex-grow">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                      {card.title}
                    </h3>
                    <Link
                      href={card.link}
                      className="mt-auto w-full max-w-sm bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
                    >
                      {card.buttonText}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 -left-2 md:left-0 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 -right-2 md:right-0 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-purple-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
