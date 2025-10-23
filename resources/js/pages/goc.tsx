import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { NavFooter } from '@/components/nav-footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Company {
  id: number;
  name: string;
  image: string;
  description: string;
  details: string[];
  services?: {
    title: string;
    locations: {
      name: string;
      address: string;
      phone: string;
      mapUrl?: string;
    }[];
  }[];
}

const companies: Company[] = [
  {
    id: 1,
    name: "ECW Motorsports",
    image: "/goc2.jpg",
    description: "Formerly known as ECW Garage, ECW Motorsports is more than just a car repair shop. We offer a full range of automotive services, with customer satisfaction as our top priority.",
    details: [
      "Our Expertise: We service and repair all types of vehicles, including hybrids and electric vehicles (EVs), ensuring top performance and long-lasting reliability.",
      "Our Growth: In 2019, we expanded to multiple branches in Sg. Chua Kajang, Bandar Baru Bangi, and Kuching to serve more customers nationwide.",
      "More Than Just Repairs: Alongside core repairs and maintenance, we offer mobile servicing, tire and rim sales, body and paint repairs, and vehicle accessories — all under one trusted brand.",
      "Our Mission: We aim to be your long-term automotive partner by delivering quality service and building strong, lasting relationships with our customers."
    ],
    services: [
      {
        title: "Vehicle Repair & Maintenance",
        locations: [
          {
            name: "ECW Motorsports Bandar Baru Bangi",
            address: "9, Jalan P10/21, Taman Perindustrian Selaman, 43650 Bandar Baru Bangi, Selangor",
            phone: "013-288 0948"
          },
          {
            name: "ECW Motorsports Kajang",
            address: "534, Jalan Tun Hishammuddin, Sungai Chua, 43000 Kajang, Selangor",
            phone: "013-288 0120"
          },
          {
            name: "ECW Motorsports Kuching",
            address: "Ground Floor, Lot 3235 (SL12), Ishmus Showroom, Jalan Keruing, 93450 Kuching, Sarawak",
            phone: "013-288 0651"
          }
        ]
      },
      {
        title: "Tyres & Sport Rims",
        locations: [
          {
            name: "ECW Motorsports (Tyres & Sport Rims)",
            address: "38, Jalan 1/2, Seksyen 1, Bandar Teknologi Kajang, 43500 Semenyih, Selangor",
            phone: "013-288 0381"
          }
        ]
      },
      {
        title: "Paint & Body Works",
        locations: [
          {
            name: "ECW Paint & Body Works",
            address: "41, Jalan P10/21, Seksyen 10, Taman Industri Selaman, 43650 Bandar Baru Bangi, Selangor",
            phone: "013-288 0661"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Ezcare Transporter",
    image: "/goc5.png",
    description: "Established in 2022, Ezcare Transporter provides reliable vehicle delivery services across Malaysia. Our fleet includes 5 trailer units and 1 single carrier unit, ensuring efficient and safe transport.",
    details: [
      "Nationwide Coverage : We deliver vehicles throughout Peninsular Malaysia and extend services to Sabah and Sarawak via cargo ships, creating a fully connected nationwide network.",
      "Growing to Serve You Better : To meet increasing demand, we plan to expand our fleet with more trailer units, boosting our capacity and efficiency.",
      "Our Goal : We are committed to providing seamless, dependable delivery services that meet the growing needs of customers across the country."
    ]
  },
  {
    id: 3,
    name: "ECW Mobile Service",
    image: "/goc4.png",
    description: "Established In 2018. ECW Mobile Service redefines automotive convenience by providing door-to-door services, serving the Klang Valley regions and selection area in Negeri Sembilan.",
    details: [
      "Nationwide Coverage : We deliver vehicles throughout Peninsular Malaysia and extend services to Sabah and Sarawak via cargo ships, creating a fully connected nationwide network.",
      "Growing to Serve You Better : To meet increasing demand, we plan to expand our fleet with more trailer units, boosting our capacity and efficiency.",
      "Our Goal : We are committed to providing seamless, dependable delivery services that meet the growing needs of customers across the country."
    ]
  }
];

export default function GroupOfCompanies() {
  const [openCompany, setOpenCompany] = useState<number | null>(companies[0].id);

  const filteredCompanies = companies.filter(company => company.name !== "ECW Mobile Service");

  const toggleCompany = (companyId: number) => {
    setOpenCompany(openCompany === companyId ? null : companyId);
  };

  const openInGoogleMaps = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Hero Section with exact same banner style */}
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
            GROUP OF COMPANIES
          </h1>
        </div>

        {/* Description Section Below Banner */}
        <div className="bg-white py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              Discover the diverse range of companies under the Ezcare umbrella, each
              contributing to our mission of providing exceptional warranty services.
            </p>
          </div>
        </div>

        {/* Group of Companies content */}
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-4">
              {filteredCompanies.map((company) => (
                <div key={company.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Company Header - Always Visible */}
                  <div
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleCompany(company.id)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {company.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {openCompany === company.id ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Company Details - Visible if openCompany matches */}
                  {openCompany === company.id && (
                    <div className="border-t border-gray-200">
                      <div className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {/* Company Image */}
                          <div className="flex justify-center">
                            <img
                              src={company.image}
                              alt={company.name}
                              className="rounded-lg object-cover w-full max-w-md h-64"
                            />
                          </div>

                          {/* Company Information */}
                          <div className="space-y-6">
                            <p className="text-gray-700 text-lg leading-relaxed">
                              {company.description}
                            </p>

                            {/* Additional Details */}
                            <div className="space-y-3">
                              {company.details.map((detail, index) => (
                                <div key={index} className="flex">
                                  <div className="w-2 h-2 bg-[#4C1D95] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <p className="text-gray-600 leading-relaxed">
                                    {detail}
                                  </p>
                                </div>
                              ))}
                            </div>

                            {/* Services Section */}
                            {company.services && company.services.map((service, serviceIndex) => (
                              <div key={serviceIndex} className="border-t pt-4">
                                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                  <span className="w-3 h-3 bg-[#4C1D95] rounded-full mr-3"></span>
                                  {service.title}
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {service.locations.map((location, locationIndex) => (
                                    <div key={locationIndex} className="bg-gray-50 rounded-lg p-4">
                                      <h5 className="font-medium text-gray-900 mb-2">
                                        {location.name}
                                      </h5>
                                      <p className="text-sm text-gray-600 mb-2">
                                        {location.address}
                                      </p>
                                      <p className="text-sm text-gray-500 mb-3">
                                        Phone: {location.phone}
                                      </p>
                                      <button
                                        onClick={() => openInGoogleMaps(location.address)}
                                        className="bg-[#4C1D95] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#3730A3] transition-colors"
                                      >
                                        See Location in Maps
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <NavFooter />
    </>
  );
}
