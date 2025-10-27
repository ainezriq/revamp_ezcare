
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { NavFooter } from '@/components/nav-footer';
import { AwardsCarousel } from '@/components/AwardsCarousel';
import { Wrench } from 'lucide-react';

export default function About() {
  // Workshop carousel state - tracks which image (0-3)
  const [workshopIndex, setWorkshopIndex] = useState(0);
  const workshopImages = [
    { src: '/workshop1.jpg', alt: 'Workshop 1' },
    { src: '/workshop2.jpg', alt: 'Workshop 2' },
    { src: '/workshop3.jpg', alt: 'Workshop 3' },
    { src: '/workshop4.jpg', alt: 'Workshop 4' },
  ];

  const handlePrevWorkshop = () => {
    setWorkshopIndex((prev) => (prev - 1 + workshopImages.length) % workshopImages.length);
  };

  const handleNextWorkshop = () => {
    setWorkshopIndex((prev) => (prev + 1) % workshopImages.length);
  };

  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Banner with exact same style as plans page */}
        <div className="relative w-full bg-purple-900 py-12 mb-8 overflow-hidden">
          {/* Gradient Mesh Background with Soft Waves */}
          <div className="absolute inset-0">
            {/* Soft Wave Layers */}
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              {/* Wave 1 - Top */}
              <path
                fill="rgba(255, 255, 255, 0.1)"
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              />
              {/* Wave 2 - Middle */}
              <path
                fill="rgba(255, 255, 255, 0.08)"
                d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,170.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              />
              {/* Wave 3 - Bottom */}
              <path
                fill="rgba(255, 255, 255, 0.06)"
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              />
            </svg>
            
            {/* Gradient Mesh Overlay */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: `
                  radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.12) 0%, transparent 50%),
                  radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
                `
              }}
            />
            
            {/* Subtle Dots Pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}
            />
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-800 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-800 rounded-full opacity-20 translate-x-1/3 translate-y-1/3" />
          
          <h1
            className="relative text-5xl md:text-6xl font-bold mb-4 text-white text-center w-full z-10"
            style={{
              textShadow:
                '0 4px 16px rgba(0,0,0,0.85), 0 1px 2px rgba(0,0,0,0.85)',
            }}
          >
            ABOUT EZCARE WARRANTY
          </h1>
        </div>

        {/* Our Story Section - Single Container with Images on Both Sides */}
        <div className="bg-[#4C1D95] rounded-lg p-8 mt-8 max-w-5xl mx-auto">
          <h2 className="text-center font-bold text-3xl mb-6 text-white">Our Story</h2>
          
          {/* First Image floated to the left - Fixed size */}
          <div className="float-left mr-6 mb-6 w-full sm:w-80 h-64 sm:h-80">
            <img
              src="/about2.jpg"
              alt="Ezcare Building"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>

          {/* Text content that wraps around both images with justified text */}
          <div className="text-white text-base md:text-sm space-y-3 text-justify">
            <p>
              Ezcare Warranty was founded in late 2016 with a clear mission to redefine confidence in vehicle ownership through trusted, transparent, and customer-first warranty solutions. Officially launching operations in January 2017, we are headquartering in Bandar Baru Bangi, Selangor, driven by the belief that vehicle protection should be accessible, reliable, and backed by genuine peace of mind.
            </p>
            <p>
              From a single headquarters, we have grown into a nationwide network, supported by branch offices in Johor Bahru, Johor and Kuching, Sarawak. Our ambition soon crossed borders as we expanded into the Indonesian market, establishing our presence with an operational office in South Jakarta marking the beginning of our global footprint.
            </p>
            <p>
              A defining moment in our story was our partnership with a reputable international insurance company, making Ezcare Warranty the first aftermarket warranty provider in Malaysia to be officially backed and underwritten at an international level. This collaboration ensures that every policy we issue is financially secure, professionally managed, and globally recognised.
            </p>
            
            <p>
              Innovation has always been at the heart of our growth. We introduced the open workshop concept, giving policyholders full freedom to choose their preferred service centres, a bold move that disrupted traditional industry norms. Coupled with one of the highest claim approval rates in the market, our approach quickly gained the trust of vehicle owners and dealers alike.
            </p>

            {/* Clear float before divider */}
            <div className="clear-both"></div>
            
            {/* Wrench Icon Divider */}
            <div className="flex justify-center items-center py-2 -mx-8">
              <div className="flex-grow border-t border-white/30"></div>
              <div className="px-8 flex-shrink-0">
                <Wrench className="w-6 h-6 text-white/70" />
              </div>
              <div className="flex-grow border-t border-white/30"></div>
            </div>

            {/* Second Image floated to the right - Fixed size */}
            <div className="float-right ml-6 mb-6 w-full sm:w-80 h-64 sm:h-80">
              <img
                src="/about3.jpg"
                alt="Ezcare Team"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>

            <p>
              Recognising the shift in mobility trends, we became pioneers in offering warranty plans for hybrid system and electric vehicles (EVs), supporting the transition toward cleaner and more advanced automotive technologies.
            </p>
            <p>
              In line with our commitment to digital transformation, we replaced traditional warranty booklets with a fully integrated mobile application, making policy access, claims access, and support available at policyholders' fingertips.
            </p>
            <p>
              Today, with over 80,000 policies issued and counting, Ezcare Warranty continues to lead with integrity, innovation, and customer assurance. Our dedication has been celebrated through prestigious recognitions such as the Asia Automotive Award in 2019 and the Superbrands Award in 2020.
            </p>
            <p>
              What began as a vision to elevate peace of mind on the road has evolved into a trusted brand known for protection, partnership, and progress. And our story is just getting started. As we continue to expand, innovate, and strengthen our market presence, one belief remains clear. We are here to stay.
            </p>
          </div>
          
          {/* Clear float */}
          <div className="clear-both"></div>
        </div>

        {/* Open Workshop Concept Section */}
        <div className="max-w-5xl mx-auto mt-12 px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-purple-200">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-purple-100 rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-center text-purple-900 mb-6">Open Workshop Concept</h3>
            
            {/* Workshop Images Carousel - Shows 1 image at a time */}
            <div className="relative w-full mb-8 overflow-hidden rounded-lg">
              <div className="relative w-full h-64 sm:h-80 md:h-96">
                {/* Images Container - NO padding on slides */}
                <div 
                  className="flex h-full transition-transform duration-500 ease-in-out" 
                  style={{ transform: `translateX(-${workshopIndex * 100}%)` }}
                >
                  {workshopImages.map((image, index) => (
                    <div key={index} className="min-w-full h-full flex-shrink-0">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={handlePrevWorkshop}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-purple-700 rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110"
                  aria-label="Previous workshop image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                
                <button
                  onClick={handleNextWorkshop}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-purple-700 rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110"
                  aria-label="Next workshop image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                {/* Dots Indicator - 4 dots for 4 images */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {workshopImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setWorkshopIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        workshopIndex === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="text-gray-700 leading-relaxed space-y-4 mt-12">
              <p>
                At Ezcare Warranty, we are committed to delivering flexibility, transparency and customer empowerment. Our <span className="font-semibold text-purple-700">Open Workshop Concept</span> allows you the freedom to service or repair your vehicle at any SSM-registered workshop throughout Malaysia.  
              </p>
              <p>
                Unlike conventional warranty providers that limit you to designated service centers, we place our trust in your judgment. Whether you prefer your long-time neighborhood mechanic or a specialised workshop of your choice, the decision remains entirely in your hands.
              </p>
              <div className="bg-purple-50 rounded-lg p-6 mt-4">
                <h4 className="font-semibold text-purple-900 mb-3 text-lg">Benefits of Open Workshop Concept:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-700 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-semibold">Nationwide Freedom:</span> Access any SSM-certified registered workshop nationwide.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-700 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-semibold">Unmatched Convenience:</span> Service or repair your vehicle wherever you are in Malaysia.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-700 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-semibold">Continue with Trusted Mechanics:</span> Maintain your relationship with workshops you already know and trust.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-700 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-semibold">No Unnecessary Travel:</span> No need to travel far for services & claims.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-700 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-semibold">Faster Turnaround Time:</span> Reduce waiting times often associated with overcrowded panel workshops.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-700 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-semibold">Flexibility in Specialisation:</span> Choose workshops that specialise in your specific vehicle make or issue.</span>
                  </li>
                </ul>
              </div>
              <p className="text-center text-purple-900 mt-6 text-xl font-extrabold uppercase">
                Your Vehicle. Your Choice. Your Peace of Mind.
              </p>
              <p className="text-center font-semibold text-purple-900 mt-6 text-md">
                With Ezcare Warranty, flexibility is not an option, it’s a standard.
              </p>
            </div>
          </div>
        </div>

        {/* Industry Spotlight Articles */}
        <div className="max-w-5xl mx-auto mt-12 px-4">
          <h2 className="text-center font-semibold text-2xl mb-8">Industry Spotlight : Ezcare Warranty</h2>
          <div className="flex flex-col md:flex-row gap-12 justify-center">
            <div className="flex flex-col items-center max-w-xs">
              <img
                src="/news1.jpg"
                alt="News 1"
                className="rounded-lg object-cover w-full h-56"
              />
              <h3 className="mt-4 font-semibold text-center">
                <a href="https://www.kosmo.com.my/2025/03/05/kerjasama-ezcare-generali-perkukuh-keyakinan-pelanggan/#google_vignette" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Kerjasama Ezcare, Generali perkukuh keyakinan pelanggan
                </a>
              </h3>
              <p className="text-sm text-gray-600 mt-1">26 May 2023, 5:27 pm</p>
            </div>
            <div className="flex flex-col items-center max-w-xs">
              <img
                src="/news2.jpg"
                alt="News 2"
                className="rounded-lg object-cover w-full h-56"
              />
              <h3 className="mt-4 font-semibold text-center">
                <a href="https://www.kosmo.com.my/2023/07/25/ezcare-kwt-technology-pertingkat-kesedaran-informasi-tentang-perkhidmatan-selepas-jualan-ev/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Ezcare, KWT Technology pertingkat kesedaran, informasi tentang perkhidmatan selepas jualan EV
                </a>
              </h3>
              <p className="text-sm text-gray-600 mt-1">25 Julai 2023, 10:04 am</p>
            </div>
            <div className="flex flex-col items-center max-w-xs">
              <img
                src="/news3.jpg"
                alt="News 3"
                className="rounded-lg object-cover w-full h-56"
              />
              <h3 className="mt-4 font-semibold text-center">
                <a href="https://www.kosmo.com.my/2022/07/18/formula-kreativiti-ezcare-kini-menjadi/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Formula, kreativiti Ezcare kini menjadi
                </a>
              </h3>
              <p className="text-sm text-gray-600 mt-1">18 Julai 2022, 9:09 am</p>
            </div>
          </div>
        </div>

        {/* Ezcare Offices */}
        <div className="bg-purple-900 text-white py-12 mt-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-center text-3xl font-bold mb-12">Ezcare Offices Across Malaysia & Indonesia</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Headquarters */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">HEADQUARTERS</h3>
                <p className="text-sm mb-4">
                  NO 1A & 3A,<br />
                  JALAN 1/5T SEKSYEN 8,<br />
                  43650 BANDAR BARU BANGI, SELANGOR
                </p>
                <img
                  src="/office1.png"
                  alt="Headquarters Office"
                  className="rounded-lg object-cover w-full h-75 mx-auto"
                />
              </div>

              {/* Southern Region Office */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">SOUTHERN REGION OFFICE</h3>
                <p className="text-sm mb-4">
                  12, JALAN SETIA TROPIKA 1/7, TAMAN SETIA TROPIKA,<br />
                  81200 JOHOR BAHRU,<br />
                  JOHOR DARUL TAKZIM
                </p>
                <img
                  src="/office2.png"
                  alt="Southern Region Office"
                  className="rounded-lg object-cover w-full h-75 mx-auto"
                />
              </div>

              {/* East Malaysia Region Office */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">EAST MALAYSIA REGION OFFICE</h3>
                <p className="text-sm mb-4">
                  LOT 3225, (S/L 12), TISHMUS SHOWROOM<br />
                  JALAN KEBUN,<br />
                  93450 KUCHING, SARAWAK
                </p>
                <img
                  src="/office3.png"
                  alt="East Malaysia Region Office"
                  className="rounded-lg object-cover w-full h-75 mx-auto"
                />
              </div>

              {/* Indonesia Office */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">INDONESIA OFFICE</h3>
                <p className="text-sm mb-4">
                  JL. RS. FATMAWATI RAYA NO 98,RT. 2/RW 7,<br />
                  GANDARIA UTARA KEC. KEBAYORAN BARU, KOTA JAKARTA SELATAN<br />
                  DAERAH KHUSUS IBUKOTA JAKARTA, 12140 INDONESIA
                </p>
                <img
                  src="/office4.png"
                  alt="Indonesia Office"
                  className="rounded-lg object-cover w-full h-75 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Awards and Recognition Section */}
        <div className="py-16 bg-gray-50">
          <AwardsCarousel />
        </div>
      </div>
      <NavFooter />
    </>
  );
}
