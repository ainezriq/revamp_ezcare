import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { NavFooter } from '@/components/nav-footer';
import { Head } from '@inertiajs/react';
import axios from 'axios';

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

    setError('');
    setLoading(true);
    setPolicy(null);

    try {
      // Directly call the EZCare API
      const response = await axios.get(
        'https://www.systemmy.ezcare-warranty.com/api/customer/check-policy',
        {
          params: {
            plate_number: plateNumber,
            phone: phoneNumber,
          },
        }
      );

      if (response.data && (response.data.policy_no || response.data.status_code)) {
        setPolicy(response.data);
      } else {
        setError('No policy found for the provided details.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch policy details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head title="Policy Holder" />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
            Policy Holder Lookup
          </h1>

          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-6">
            <label className="block mb-2 font-medium text-gray-700">Plate Number</label>
            <input
              type="text"
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value.toUpperCase())}
              placeholder="e.g. ABC1234"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
            />

            <label className="block mb-2 font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="e.g. 0123456789"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
            />

            <button
              onClick={handleSearch}
              className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition-colors"
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
                <div className="space-y-3 text-gray-700">
                  <p>
                    <span className="font-semibold">Policy Number:</span>{' '}
                    {policy.policy_no || 'N/A'}
                  </p>
                  <p>
                    <span className="font-semibold">Status Code:</span>{' '}
                    {policy.status_code || 'N/A'}
                  </p>
                  <p>
                    <span className="font-semibold">Activated At:</span>{' '}
                    {policy.activated_at || 'N/A'}
                  </p>
                  <p>
                    <span className="font-semibold">Expired At:</span>{' '}
                    {policy.expired_at || 'N/A'}
                  </p>
                  <p>
                    <span className="font-semibold">Warranty Plan:</span>{' '}
                    {policy.warranty_plan || 'N/A'}
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
