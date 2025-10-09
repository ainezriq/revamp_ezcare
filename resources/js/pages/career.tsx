import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { NavFooter } from '@/components/nav-footer';


export default function Career() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    areaOfInterest: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email content
    const subject = encodeURIComponent('Job Application - EZCare Warranty');
    const body = encodeURIComponent(
      `Dear EZCare HR Team,

I am submitting my application for the position at EZCare Warranty.

Application Details:
- Name: ${formData.name}
- Phone Number: ${formData.phone}
- Area of Interest: ${formData.areaOfInterest}
- Message: ${formData.message}

Please find my resume attached to this email.

Thank you for considering my application.

Best regards,
${formData.name}`
    );

    // Create mailto URL
    const mailtoUrl = `mailto:careers@ezcare-warranty.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoUrl;
  };

  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Career page content will go here */}
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <div className="relative">
            <img
              src="/career1.png"
              alt="Career Banner"
              className="w-full h-125 object-cover"
            />
            <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white text-center w-full"
                style={{ textShadow: '0 4px 16px rgba(0,0,0,0.85), 0 1px 2px rgba(0,0,0,0.85)' }}>
                CAREERS AT EZCARE
              </h1>
            </div>
          </div>

          {/* Career Content */}
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Join Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Ezcare Warranty, we're always looking for talented individuals who are passionate about
                innovation and excellence in the automotive warranty industry. Join us in our mission to
                provide exceptional service to our customers.
              </p>
            </div>

            {/* Career Opportunities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Unlimited Opportunities for Professional Growth
                </h3>
                <p className="text-gray-600 mb-4">
                  We offer clear career paths, hands-on training, and mentorship to help you grow professionally and personally.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  A Motivated and Collaborative Team Culture
                </h3>
                <p className="text-gray-600 mb-4">
                  Join a team that values open communication, shared goals, and mutual support across departments.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Competitive Rewards for Excellence
                </h3>
                <p className="text-gray-600 mb-4">
                  We recognize your contributions with fair compensation, performance bonuses, and advancement opportunities.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  A Supportive and Future-Focused Workplace
                </h3>
                <p className="text-gray-600 mb-4">
                  Work in a dynamic environment that embraces innovation, continuous improvement, and long-term career development.
                </p>
              </div>

              
            </div>

            {/* Career Application Form */}
            <div className="bg-purple-200 rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="flex items-center justify-center mb-8">
                <svg className="mr-4" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"><path d="m9.485 16.248l-1.963 3.927c-.491.884-1.571 1.178-2.455.687c-.687-.49-.982-1.374-.589-2.16l1.178-2.454m8.64-3.828v-.884c0-1.768-1.276-3.338-2.945-3.633a2.65 2.65 0 0 0-1.458 0"/><path d="M2.318 16.248L1.14 18.703c-.352.736-.098 1.669.59 2.16c.883.49 1.963.196 2.454-.688l.17-.322m6.408-13.525a2.454 2.454 0 1 0 0-4.908a2.454 2.454 0 0 0 0 4.908m-2.416 7.024H2.652a.74.74 0 0 1-.687-.491l-.97-3.532c-.095-.357.184-.886.675-.886h4.713c.294 0 .589.196.687.49zm2.946 0H8.346m12.45 2.945c.393-.393.59-.982.59-1.669v-2.945l-1.965.981h-.981l-1.964-.981v2.945c0 .687.295 1.375.786 1.865m3.534-.196l1.767 2.553c.295.49.46 1.097.46 1.686v.098c0 1.08-.852 1.947-1.932 1.947H15.2m2.258-6.087v6.087"/></g></svg>
                <h3 className="text-2xl font-bold text-gray-900">
                  Career Form
                </h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                  />
                </div>

                {/* Resume/CV Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100 bg-white"
                  />
                  <p className="text-xs text-gray-500 mt-1">Please attach your resume/CV file (PDF, DOC, or DOCX)</p>
                </div>

                {/* Area of Interest */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Interest
                  </label>
                  <select
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 bg-white"
                  >
                    <option value="">Select your area of interest</option>
                    <option value="customer-service">Customer Service</option>
                    <option value="claims">Claims Processing</option>
                    <option value="sales">Sales</option>
                    <option value="marketing">Marketing</option>
                    <option value="it">IT Support</option>
                    <option value="hr">Human Resources</option>
                    <option value="finance">Finance</option>
                    <option value="internship">Internship</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself and why you're interested in joining Ezcare Warranty"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none bg-white"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
                  >
                    Send Application via Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <NavFooter />
    </>
  );
}
