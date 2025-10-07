import React from 'react';
import Navbar from '@/components/Navbar';
import { NavFooter } from '@/components/nav-footer';
import { AwardsCarousel } from '@/components/AwardsCarousel';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <div className="relative image-container">
          <img
            src="/about1.jpg"
            alt="Banner"
            className="w-full h-125 object-cover"
          />
          <div className="absolute inset-0 bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                ABOUT EZCARE WARRANTY
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-purple-200 rounded-lg p-6 mt-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src="/about2.jpg"
            alt="Ezcare Building"
            className="w-full md:w-1/3 rounded-lg object-cover"
            style={{ maxHeight: '300px' }}
          />
          <div className="text-black text-base md:text-lg">
            <h2 className="text-center md:text-left font-bold text-3xl mb-4">Our Story</h2>
            <p className="mb-4">
              Ezcare Warranty is a leading after-market provider for reconditioned and pre-owned vehicles, including hybrids, EVs, and high-performance motorcycles.
            </p>
            <p className="mb-4">
              Founded in late 2016 and officially launched in January 2017, its headquarters is in Bandar Baru Bangi, with branches in Johor Bahru, Kuching, and South Jakarta, Indonesia.
            </p>
            <p>
              What sets Ezcare apart is its flexible “open workshop” concept, allowing policyholders to choose their preferred service center. With competitive rates and over 50,000 policies issued to date, Ezcare continues to grow as a trusted name in vehicle warranty services.
            </p>
          </div>
        </div>
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
        <div className="bg-purple-700 text-white py-12 mt-12">
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
