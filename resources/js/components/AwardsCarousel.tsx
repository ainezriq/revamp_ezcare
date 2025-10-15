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
    description: 'Ezcare Warranty was awarded Superbrand Status in 2020 by the Malaysia Superbrands Council, following a rigorous selection process that highlights outstanding brand reputation, market dominance, and customer trust. This recognition affirms Ezcare’s commitment to delivering reliable, high-quality warranty services across Malaysia and beyond. Being named a Superbrand places Ezcare among the top-tier brands that consistently exceed industry standards and customer expectations.',
    issuer: 'Superbrands Malaysia Council',
    date: '2020',
    category: 'Brand Excellence'
  },
  {
    id: 2,
    image: '/cert1.png',
    alt: 'MIAPEX Certificate',
    title: 'MIAPEX19 Participation',
    description: 'Ezcare Warranty participated as an exhibitor at the Malaysia International Automotive & Parts Expo (MIAPEX19), held at the Mines International Exhibition & Convention Centre. This event brought together key players in the automotive industry, offering a platform for innovation, networking, and showcasing cutting-edge solutions. Ezcare’s presence highlighted its commitment to engaging with industry stakeholders and promoting excellence in after-sales warranty services for reconditioned and pre-owned vehicles.',
    issuer: 'MotoNation (on behalf of MIAPEX)',
    date: '24–27 October 2019',
    category: 'Industry Participation (Exhibitor)'
  },
  {
    id: 3,
    image: '/cert3.png',
    alt: 'Sponsorship Appreciation',
    title: 'KUASA 5th Anniversary Sponsorship Appreciation',
    description: 'Ezcare was honored by the Kuala Lumpur & Selangor Automotive Charity Association (KUASA) during its 5th anniversary celebration, in recognition of Ezcare’s generous sponsorship and meaningful contribution to the association’s charitable initiatives. This appreciation reflects Ezcare’s commitment not only to automotive excellence, but also to community engagement and social responsibility—supporting causes that uplift industry professionals and local communities alike.',
    issuer: 'Kuala Lumpur & Selangor Automotive Charity Association (KUASA)',
    date: '17 February 2019',
    category: 'Sponsorship Appreciation'
  },
  {
    id: 4,
    image: '/cert4.png',
    alt: 'EVMASIA Certificate',
    title: 'EV MASIA 22 Participation',
    description: 'Ezcare participated in EV MASIA 22, a premier event focused on electric vehicles and sustainable mobility, held at MITEC Kuala Lumpur. This recognition highlights Ezcare’s proactive engagement in the evolving EV landscape, showcasing its commitment to future-forward automotive solutions. By joining forces with industry leaders and innovators, Ezcare continues to explore new frontiers in warranty services that align with Malaysia’s green mobility goals.',
    issuer: 'EV MASIA (in partnership with Smart Nation Expo, MARii, MIGHT, and others)',
    date: '27–29 September 2022',
    category: 'Industry Participation (Electric Vehicle & Sustainable Mobility Expo)'
  },
  {
    id: 5,
    image: '/cert5.png',
    alt: 'EVTech Talk & Training Attendance',
    title: 'EV Tech Talk & Training Attendance',
    description: 'Ezcare participated in the EV Tech Talk & Training session held at Bangi Golf Resort, an event dedicated to advancing knowledge in electric vehicle systems and sustainable mobility. Organized in collaboration with UKM and KWT, this training reflects Ezcare’s ongoing commitment to upskilling its team and staying ahead of emerging automotive technologies. By engaging in technical forums like this, Ezcare reinforces its role as a forward-thinking warranty provider in Malaysia’s evolving EV ecosystem.',
    issuer: 'Universiti Kebangsaan Malaysia (UKM), in collaboration with Ezcare and KWT',
    date: '16 July 2023',
    category: 'Technical Training & Knowledge Sharing (Electric Vehicle Technology)'
  },
  {
    id: 6,
    image: '/cert6.png',
    alt: 'Tesla Repair Level 3 Intensive Training',
    title: 'Tesla Repair Level 3 Intensive Training',
    description: 'Ezcare successfully completed the Tesla Repair Level 3 Intensive Training, a specialized program conducted by YSNEV and KWT to deepen technical expertise in high-voltage electric vehicle systems. Held at Ezcare’s own facility in Bandar Baru Bangi, this training reflects Ezcare’s dedication to mastering advanced EV diagnostics and repair protocols—especially for premium brands like Tesla. This milestone reinforces Ezcare’s position as a trusted, future-ready warranty and service provider in Malaysia’s evolving automotive landscape.',
    issuer: 'YSNEV (in collaboration with KWT and Ezcare)',
    date: '18–24 July 2023',
    category: 'Technical Training – Tesla Vehicle Repair (Level 3 Intensive)'
  },
  {
    id: 7,
    image: '/cert7.png',
    alt: 'FMC 37th Anniversary Appreciation',
    title: 'FMC 37th Anniversary Appreciation',
    description: 'Ezcare was recognized by Persatuan Perniagaan Motor dan Kredit Pahang (FMC) during its 37th Anniversary Dinner for its valued support and contribution to the association’s ongoing efforts in the automotive and credit industry. This appreciation reflects Ezcare’s dedication to building strong industry relationships and supporting regional initiatives that promote growth, collaboration, and community engagement within Malaysia’s automotive sector.',
    issuer: 'Persatuan Perniagaan Motor dan Kredit Pahang (FMC)',
    date: '10 November 2018',
    category: 'Appreciation for Support & Participation'
  },
  {
    id: 8,
    image: '/cert8.png',
    alt: 'Asia Automotive Award - Rising Star',
    title: 'Asia Automotive Award - Rising Star',
    description: 'Ezcare’s very own Ahmad Bin Ibrahim was honored with the Rising Star Award at the Asia Automotive Award 2019, recognizing outstanding leadership and innovation in the field of automotive warranty services. Presented by MotoNation and SpanarBoy, this award celebrates emerging industry figures who are driving change, elevating service standards, and shaping the future of automotive care in Malaysia. Ahmad’s achievement reflects Ezcare’s culture of excellence, growth, and forward-thinking service delivery.',
    issuer: 'MotoNation & SpanarBoy (as part of Asia Automotive Award 2019)',
    date: '2019',
    category: 'Rising Star Award – Automotive Warranty Services'
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
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Awards & Recognitions</h2>
            <p className="text-purple-100 text-lg max-w-3xl mx-auto">
              Celebrating our commitment to excellence in automotive warranty services through industry recognition and partnerships that drive innovation and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => handleCertificateClick(certificate)}
              >
                <div className="aspect-w-4 aspect-h-3 bg-gray-50 p-6 flex items-center justify-center min-h-[200px] md:min-h-[300px]">
                  <img
                    src={certificate.image}
                    alt={certificate.alt}
                    className="w-full h-auto max-h-72 object-contain group-hover:grayscale-0 transition-all duration-300"
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
