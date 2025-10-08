import React from 'react';
import Navbar from '@/components/Navbar';
import { NavFooter } from '@/components/nav-footer';
import { Mail, Phone, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Main Contact Section */}
        <div className="bg-[#8B5CF6] text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Column - Contact Information */}
              <div>
                <div className="mb-6">
                  <h1 className="text-4xl md:text-5xl font-bold mb-3">Get In Touch</h1>
                  <p className="text-lg opacity-90 mb-6">
                    Leave your message and we will get back to you within 24 hours
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Email</p>
                      <p className="font-semibold">info@ezcare-warranty.com</p>
                    </div>
                  </div>

                  {/* Hotline */}
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Hotline</p>
                      <p className="font-semibold">1 300 88 8287</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded-full">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm opacity-75">WhatsApp</p>
                      <p className="font-semibold">+60132880177</p>
                    </div>
                  </div>

                  {/* General Inquiries */}
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm opacity-75">General Inquiries</p>
                      <p className="font-semibold">03-8922-0571</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 p-2 rounded-full mt-1">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm opacity-75">BUSINESS HOURS</p>
                      <p className="font-semibold">
                        Monday - Friday: 9:00 am - 5:30 pm<br />
                        Saturday: 9:00 am - 2:30 pm<br />
                        Sunday & Public Holiday - Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column intentionally left blank (no contact form) */}
            </div>

            {/* Maps Section - Below Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Headquarters Map */}
              <div>
                <div className="bg-white/10 p-3 rounded-t-lg border-b border-white/20">
                  <h3 className="text-white font-semibold text-center">HEADQUARTERS</h3>
                  <p className="text-white text-sm text-center mt-1 opacity-90">
                    NO 1A & 3A,<br />
                    JALAN 8/1, SEKSYEN 8,<br />
                    43650 BANDAR BARU BANGI, SELANGOR
                  </p>
                </div>
                <div className="h-48 rounded-b-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO_BzDi2rGP1dE&q=NO+1A+3A+Jalan+8+1+Seksyen+8+43650+Bandar+Baru+Bangi+Selangor+Malaysia"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Headquarters Location"
                  ></iframe>
                </div>
              </div>

              {/* Southern Region Office Map */}
              <div>
                <div className="bg-white/10 p-3 rounded-t-lg border-b border-white/20">
                  <h3 className="text-white font-semibold text-center">SOUTHERN REGION OFFICE</h3>
                  <p className="text-white text-sm text-center mt-1 opacity-90">
                    12, JALAN SETIA TROPIKA 1/7, TAMAN SETIA TROPIKA,<br />
                    81200 JOHOR BAHRU,<br />
                    JOHOR DARUL TAKZIM
                  </p>
                </div>
                <div className="h-48 rounded-b-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO_BzDi2rGP1dE&q=12+Jalan+Setia+Tropika+1+7+Taman+Setia+Tropika+81200+Johor+Bahru+Johor+Malaysia"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Southern Region Office Location"
                  ></iframe>
                </div>
              </div>

              {/* East Malaysia Region Office Map */}
              <div>
                <div className="bg-white/10 p-3 rounded-t-lg border-b border-white/20">
                  <h3 className="text-white font-semibold text-center">EAST MALAYSIA REGION OFFICE</h3>
                  <p className="text-white text-sm text-center mt-1 opacity-90">
                    LOT 3225, (S/L 12), ITSHMUS SHOWROOM<br />
                    JALAN KEBUN,<br />
                    93450 KUCHING, SARAWAK
                  </p>
                </div>
                <div className="h-48 rounded-b-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO_BzDi2rGP1dE&q=LOT+3225+SL+12+ITSHMUS+SHOWROOM+Jalan+Kebun+93450+Kuching+Sarawak+Malaysia"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="East Malaysia Region Office Location"
                  ></iframe>
                </div>
              </div>

              {/* Indonesia Office Map */}
              <div>
                <div className="bg-white/10 p-3 rounded-t-lg border-b border-white/20">
                  <h3 className="text-white font-semibold text-center">INDONESIA OFFICE</h3>
                  <p className="text-white text-sm text-center mt-1 opacity-90">
                    JL. RS. FATMAWATI RAYA NO 98,RT. 2/RW 7,<br />
                    GANDARIA UTARA KEC. KEBAYORAN BARU, KOTA JAKARTA SELATAN<br />
                    DAERAH KHUSUS IBUKOTA JAKARTA, 12140 INDONESIA
                  </p>
                </div>
                <div className="h-48 rounded-b-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO_BzDi2rGP1dE&q=JL+RS+FATMAWATI+RAYA+NO+98+RT+2+RW+7+GANDARIA+UTARA+KEC+KEBAYORAN+BARU+KOTA+JAKARTA+SELATAN+DAERAH+KHUSUS+IBUKOTA+JAKARTA+12140+Indonesia"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Indonesia Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavFooter />
    </>
  );
}
