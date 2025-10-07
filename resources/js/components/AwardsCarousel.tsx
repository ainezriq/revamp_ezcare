import React, { useState } from 'react';

interface Certificate {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  issuer: string;
  date: string;
  category: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    image: '/cert2.png',
    alt: 'Superbrands Certificate',
    title: 'Superbrands Recognition',
    description: 'Recognized as a leading brand in the automotive warranty industry for exceptional service and customer trust.',
    issuer: 'Superbrands Council',
    date: '2023',
    category: 'Brand Excellence'
  },
  {
    id: 2,
    image: '/cert1.png',
    alt: 'MIAPEX Certificate',
    title: 'MIAPEX Participation Certificate',
    description: 'Certificate of participation in the Malaysia International Automotive Parts & Accessories Expo.',
    issuer: 'MIAPEX',
    date: '2023',
    category: 'Industry Participation'
  },
  {
    id: 3,
    image: '/cert3.png',
    alt: 'Industry Leadership Award',
    title: 'Industry Leadership Award',
    description: 'Recognition for outstanding leadership and innovation in the automotive warranty sector.',
    issuer: 'ASEAN Insurance Council',
    date: '2023',
    category: 'Leadership Excellence'
  },
  {
    id: 4,
    image: '/cert4.png',
    alt: 'EVMASIA Certificate',
    title: 'EVMASIA Partnership Certificate',
    description: 'Certificate of partnership for advancing electric vehicle warranty solutions and services.',
    issuer: 'EVMASIA',
    date: '2022',
    category: 'Strategic Partnership'
  }
];

export function AwardsCarousel() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCertificateClick = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Awards & Recognitions</h2>
            <p className="text-purple-100 text-lg max-w-3xl mx-auto">
              Celebrating our commitment to excellence in automotive warranty services through industry recognition and partnerships that drive innovation and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => handleCertificateClick(certificate)}
              >
                <div className="aspect-w-4 aspect-h-3 bg-gray-50 p-6 flex items-center justify-center min-h-[300px]">
                  <img
                    src={certificate.image}
                    alt={certificate.alt}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-purple-700 transition-colors text-center">
                    {certificate.title}
                  </h3>
                  <p className="text-sm text-purple-600 font-medium text-center mb-1">{certificate.category}</p>
                  <p className="text-xs text-gray-500 text-center">{certificate.issuer} • {certificate.date}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-purple-700 bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <p className="text-lg font-semibold mb-2">View Details</p>
                    <p className="text-sm opacity-90">Click to learn more about this recognition</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-purple-200 text-sm">
              Click on any certificate to view detailed information
            </p>
          </div>
        </div>
      </div>

      {/* Modal for detailed certificate information */}
      {isModalOpen && selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 z-10 bg-white rounded-full p-2 shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="mb-6 flex justify-center">
                    <img
                      src={selectedCertificate.image}
                      alt={selectedCertificate.alt}
                      className="max-w-full max-h-64 object-contain rounded-lg shadow-lg"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-3">
                    {selectedCertificate.title}
                  </h3>
                  <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {selectedCertificate.category}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-700 mb-3 text-lg">About This Recognition</h4>
                      <p className="text-gray-600 leading-relaxed">{selectedCertificate.description}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-gray-700 mb-3 text-lg">Certificate Details</h4>
                      <div className="space-y-3">
                        <div>
                          <span className="font-semibold text-gray-600">Issuing Organization:</span>
                          <p className="text-gray-800">{selectedCertificate.issuer}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-600">Date Awarded:</span>
                          <p className="text-gray-800">{selectedCertificate.date}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-600">Category:</span>
                          <p className="text-gray-800">{selectedCertificate.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
