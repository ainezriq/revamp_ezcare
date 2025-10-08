import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { NavFooter } from '@/components/nav-footer';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';

export default function PolicyHolder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [policies, setPolicies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!searchTerm.trim() || !phoneNumber.trim()) {
      setError('Please enter both plate number and phone number.');
      return;
    }

    setError('');
    setLoading(true);
    setPolicies([]);

    try {
      const response = await axios.get('/check-policy', {
        params: {
          plate_number: searchTerm,
          phone: phoneNumber,
        },
      });

      if (response.data && Array.isArray(response.data) && response.data.length > 0) {
        setPolicies(response.data);
      } else if (response.data && response.data.policy_number) {
        // Handle case where API returns single object
        setPolicies([response.data]);
      } else {
        setError('No policies found for the provided details.');
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
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
            Policy Holder Lookup
          </h1>

          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-6">
            <label className="block mb-2 font-medium text-gray-700">Plate Number</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
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

          <div className="mt-10">
            {policies.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                  Policy Details
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {policies.map((policy, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-md rounded-2xl p-6 border border-gray-200"
                    >
                      <p className="text-gray-800 font-bold text-lg mb-2">
                        Policy Number: {policy.policy_number || 'N/A'}
                      </p>
                      <p className="text-gray-700">Name: {policy.name || 'N/A'}</p>
                      <p className="text-gray-700">Phone: {policy.phone || 'N/A'}</p>
                      <p className="text-gray-700">Plate Number: {policy.plate_number || 'N/A'}</p>
                      <p className="text-gray-700">Vehicle Model: {policy.vehicle_model || 'N/A'}</p>
                      <p className="text-gray-700">Start Date: {policy.start_date || 'N/A'}</p>
                      <p className="text-gray-700">End Date: {policy.end_date || 'N/A'}</p>
                      <p className="text-gray-700">
                        Warranty Status: {policy.warranty_status || 'Unknown'}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </main>

        <NavFooter />
      </div>
    </>
  );
}
