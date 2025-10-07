 import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { NavFooter } from '@/components/nav-footer';
import { Head, Link } from '@inertiajs/react';

interface Policy {
  id: string;
  type: string;
  status: 'active' | 'expired' | 'pending';
  vehicleInfo: {
    make: string;
    model: string;
    year: string;
    registration: string;
  };
  coverage: {
    startDate: string;
    endDate: string;
    coverageAmount: string;
    deductible: string;
  };
  premium: {
    amount: string;
    frequency: string;
    nextPayment: string;
  };
}

const mockPolicies: Policy[] = [
  {
    id: 'POL-2024-001',
    type: 'Comprehensive Warranty',
    status: 'active',
    vehicleInfo: {
      make: 'Toyota',
      model: 'Camry',
      year: '2022',
      registration: 'ABC 1234'
    },
    coverage: {
      startDate: '2024-01-15',
      endDate: '2025-01-14',
      coverageAmount: 'RM 50,000',
      deductible: 'RM 500'
    },
    premium: {
      amount: 'RM 1,200',
      frequency: 'Annually',
      nextPayment: '2025-01-15'
    }
  },
  {
    id: 'POL-2023-045',
    type: 'Powertrain Warranty',
    status: 'active',
    vehicleInfo: {
      make: 'Honda',
      model: 'Civic',
      year: '2021',
      registration: 'XYZ 5678'
    },
    coverage: {
      startDate: '2023-06-01',
      endDate: '2024-05-31',
      coverageAmount: 'RM 30,000',
      deductible: 'RM 300'
    },
    premium: {
      amount: 'RM 800',
      frequency: 'Annually',
      nextPayment: '2024-06-01'
    }
  }
];

export default function PolicyHolder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [selectedPolicyForAction, setSelectedPolicyForAction] = useState<Policy | null>(null);

  const filteredPolicies = mockPolicies.filter(policy =>
    policy.vehicleInfo.registration.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'expired': 
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <>
      <Head title="Policy Holder - Check Your Policy" />
      <Navbar />
      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Policy Holder Portal</h1>
            <p className="text-gray-600">Check your policy status and manage your warranty coverage</p>
          </div>

          {/* Search Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="mb-4">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search Your Policy
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter vehicle plate number..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="phone"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter verified phone number..."
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Policies List */}
          <div className="space-y-6">
            {searchTerm.trim() === '' || phoneNumber.trim() === '' ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Enter Search Criteria</h3>
                <p className="text-gray-500">
                  Please enter both vehicle plate number and verified phone number to search for policies.
                </p>
              </div>
            ) : filteredPolicies.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No policies found</h3>
                <p className="text-gray-500">
                  Try adjusting your search terms.
                </p>
              </div>
            ) : (
              filteredPolicies.map((policy) => (
                <div
                  key={policy.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedPolicy(policy)}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{policy.id}</h3>
                        <p className="text-gray-600">{policy.type}</p>
                      </div>
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(policy.status)}`}>
                        {policy.status.charAt(0).toUpperCase() + policy.status.slice(1)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Vehicle Information */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Vehicle Information</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p><span className="font-medium">Make/Model:</span> {policy.vehicleInfo.make} {policy.vehicleInfo.model}</p>
                          <p><span className="font-medium">Year:</span> {policy.vehicleInfo.year}</p>
                          <p><span className="font-medium">Registration:</span> {policy.vehicleInfo.registration}</p>
                        </div>
                      </div>

                      {/* Coverage Details */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Coverage Details</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p><span className="font-medium">Coverage:</span> {policy.coverage.coverageAmount}</p>
                          <p><span className="font-medium">Deductible:</span> {policy.coverage.deductible}</p>
                          <p><span className="font-medium">Valid Until:</span> {formatDate(policy.coverage.endDate)}</p>
                        </div>
                      </div>

                      {/* Premium Information */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Premium Information</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p><span className="font-medium">Annual Premium:</span> {policy.premium.amount}</p>
                          <p><span className="font-medium">Payment:</span> {policy.premium.frequency}</p>
                          <p><span className="font-medium">Next Payment:</span> {formatDate(policy.premium.nextPayment)}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>Policy Start: {formatDate(policy.coverage.startDate)}</span>
                        <button className="text-purple-600 hover:text-purple-800 font-medium">
                          View Full Details →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <Link
                href="/contact"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Contact Support</p>
                  <p className="text-sm text-gray-500">Get help and support</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Claim Filing Modal */}
      {showClaimModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">File a Warranty Claim</h2>
                <button
                  onClick={() => setShowClaimModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Policy Number</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter policy number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Registration</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter registration number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Claim Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>Select claim type</option>
                    <option>Engine Repair</option>
                    <option>Transmission Repair</option>
                    <option>Electrical System</option>
                    <option>Brake System</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description of Issue</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Please describe the issue you're experiencing..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Repair Cost</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="RM 0.00"
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowClaimModal(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  >
                    Submit Claim
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Service Scheduling Modal */}
      {showServiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Schedule Service</h2>
                <button
                  onClick={() => setShowServiceModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Policy Number</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter policy number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Registration</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter registration number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option>Select time slot</option>
                      <option>9:00 AM - 11:00 AM</option>
                      <option>11:00 AM - 1:00 PM</option>
                      <option>2:00 PM - 4:00 PM</option>
                      <option>4:00 PM - 6:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>Select service type</option>
                    <option>Routine Maintenance</option>
                    <option>Oil Change</option>
                    <option>Brake Service</option>
                    <option>Tire Rotation</option>
                    <option>Engine Diagnostic</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Any specific concerns or requirements..."
                  ></textarea>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowServiceModal(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  >
                    Schedule Service
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <NavFooter />
    </>
  );
}
