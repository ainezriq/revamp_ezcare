import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { NavFooter } from '@/components/nav-footer';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function PolicyHolder() {
  const [plateNumber, setPlateNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [policy, setPolicy] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

const handleSearch = async () => {
  if (!plateNumber.trim() || !phoneNumber.trim()) {
    setError('Please enter both plate number and phone number.');
    return;
  }

  // Check if phone number starts with 6
  if (!phoneNumber.startsWith('6')) {
    Swal.fire({
      icon: 'warning',
      title: 'Phone Number Format',
      text: 'Please include the country code. Malaysian numbers should start with 6 (e.g., 6018228245)',
      confirmButtonColor: '#4C1D95',
      confirmButtonText: 'OK'
    });
    return;
  }

    setError('');
    setLoading(true);
    setPolicy(null);

    try {
      // Directly call the EZCare API
      const response = await axios.get(
        'https://www.systemmy.ezcare-warranty.com/api/customer/check-policy',
        {
          params: {
            vehicle_registration_number: plateNumber,
            phone_no: phoneNumber,
          },
        }
      );

      if (response.data && (response.data.policy_no || response.data.status_code)) {
        setPolicy(response.data);
      } else {
        setError('Great news! We’ve found your policy. All the details are listed below.');
      }
      setPolicy(response.data);

    // SweetAlert success message
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Successfully fetched policy details.',
        confirmButtonColor: '#4C1D95',
        confirmButtonText: 'OK'
      });

    } catch (err) {
      console.error(err);
      setError('We couldn’t find a matching policy. Double-check your plate and phone number, then try again.');
      // SweetAlert error message
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occurred while fetching policy details. Please try again later.',
        confirmButtonColor: '#4C1D95',
        confirmButtonText: 'OK'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head title="Policy Holder" />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-12 pt-24">
          <div className="flex items-center justify-center gap-3 mb-8">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 512 512"
              className="text-[#4C1D95]"
            >
              <path 
                fill="currentColor" 
                d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175 175 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.03 175.03 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195M48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192m408.971 264.284a24.03 24.03 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.03 24.03 0 0 1-.002 33.941"
              />
            </svg>
            <h1 className="text-3xl font-bold text-[#4C1D95]">
              Policyholder Lookup
            </h1>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6">
            <label className="block mb-2 font-medium text-gray-700">Plate Number</label>
            <input
              type="text"
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value.toUpperCase())}
              placeholder="e.g. BDR5431"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
            />

            <label className="block mb-2 font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="e.g. 6018228245"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
            />

            <button
              onClick={handleSearch}
              className="w-full bg-[#4C1D95] text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition-colors"
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search Policy'}
            </button>

            {error && <p className="text-red-600 text-sm mt-3 text-center">{error}</p>}
          </div>

          {/* Results Section */}
          <div className="mt-10">
            {policy && (
              <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-6 border border-gray-200">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                  Policy Details
                </h2>
                
                {/* Image Container */}
                <div className="flex justify-center mb-6">
                  <div className="w-64 h-48 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img
                      src="/policy-placeholder.png"
                      alt="Policy Document"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="256" height="192" viewBox="0 0 256 192"%3E%3Crect width="256" height="192" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%239ca3af"%3EPolicy Document%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-3 text-gray-700">
                  <p>
                    <span className="font-semibold">Policy Number:</span>{' '}
                    {policy.data.policy_no || 'N/A'}
                  </p>
                  <p>
                    <span className="font-semibold">Status Code:</span>{' '}
                    {policy.data.status_code || 'N/A'}
                  </p>
                  <p>
                    <span className="font-semibold">Activated At:</span>{' '}
                    {policy.data.activated_at || 'N/A'}
                  </p>
                  <p>
                    <span className="font-semibold">Expired At:</span>{' '}
                    {policy.data.expired_at || 'N/A'}
                  </p>
                  <p>
                    <span className="font-semibold">Warranty Plan:</span>{' '}
                    {policy.data.warranty_plan || 'N/A'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>

        <NavFooter />
      </div>
    </>
  );
}
