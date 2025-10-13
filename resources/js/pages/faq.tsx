import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { NavFooter } from '@/components/nav-footer';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What types of vehicles does Ezcare Warranty cover?",
    answer: "Ezcare Warranty covers reconditioned and pre-owned vehicles, including hybrids, EVs, and high-performance motorcycles. We provide comprehensive coverage for various makes and models.",
    category: "Coverage"
  },
  {
    id: 2,
    question: "How long does the warranty coverage last?",
    answer: "Our warranty plans offer flexible coverage periods ranging from 1 to 5 years, depending on the plan you choose. Extended coverage options are also available for additional peace of mind.",
    category: "Coverage"
  },
  {
    id: 3,
    question: "What does the warranty cover exactly?",
    answer: "Our warranty covers major mechanical and electrical components including engine, transmission, electrical systems, air conditioning, and more. Please refer to your specific plan details for complete coverage information.",
    category: "Coverage"
  },
  {
    id: 4,
    question: "Can I choose my own repair shop?",
    answer: "Yes! Ezcare operates on an 'open workshop' concept, allowing you to choose any authorized service center for repairs and maintenance covered under your warranty plan.",
    category: "Service"
  },
  {
    id: 5,
    question: "How do I file a warranty claim?",
    answer: "To file a claim, contact our support team immediately at 03-8922-0571 or email info@ezcare-warranty.com. Provide your policy number, vehicle details, and description of the issue. Our team will guide you through the process.",
    category: "Claims"
  },
  {
    id: 6,
    question: "What documents do I need for a claim?",
    answer: "You'll need your warranty policy document, vehicle registration, proof of maintenance records, and detailed repair estimates. Our claims team will provide specific requirements based on your situation.",
    category: "Claims"
  },
  {
    id: 7,
    question: "Is there a deductible for warranty claims?",
    answer: "Deductible amounts vary by plan and type of repair. Basic plans may have higher deductibles while premium plans offer lower or zero deductibles. Check your specific plan details for exact amounts.",
    category: "Claims"
  },
  {
    id: 8,
    question: "Can I transfer my warranty to a new owner?",
    answer: "Yes, warranty plans are transferable to new vehicle owners. A transfer fee may apply, and the new owner must meet our eligibility requirements. Contact us for transfer procedures.",
    category: "Policy"
  },
  {
    id: 9,
    question: "What maintenance is required to keep warranty valid?",
    answer: "Regular maintenance according to manufacturer specifications is required. Keep detailed records of all services performed. Failure to maintain your vehicle may void warranty coverage.",
    category: "Maintenance"
  },
  {
    id: 10,
    question: "Do you offer roadside assistance?",
    answer: "Yes, many of our premium plans include 24/7 roadside assistance covering towing, battery jump-starts, flat tire changes, fuel delivery, and lockout services.",
    category: "Service"
  },
  {
    id: 11,
    question: "How quickly are claims processed?",
    answer: "Most claims are processed within 24-48 hours after receiving all required documentation. Emergency repairs may be pre-approved for faster service.",
    category: "Claims"
  },
  {
    id: 12,
    question: "Can I upgrade my warranty plan?",
    answer: "Yes, you can upgrade your plan at any time during the coverage period. Additional costs will apply based on the upgrade level and remaining coverage time.",
    category: "Policy"
  }
];

const categories = ["All", "Coverage", "Claims", "Service", "Policy", "Maintenance"];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesKeyword =
      faq.question.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesCategory && matchesKeyword;
  });

  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative">
          <img
            src="/faq1.jpg"
            alt="FAQ Banner"
            className="w-full h-125 object-cover"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <HelpCircle className="h-16 w-16 mx-auto mb-4" />
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white text-center w-full"
                style={{ textShadow: '0 4px 16px rgba(0,0,0,0.85), 0 1px 2px rgba(0,0,0,0.85)' }}>FREQUENTLY ASKED QUESTIONS</h1>
              <p className="text-lg md:text-xl">Find answers to common questions about our warranty services</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search Keyword"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse by Category</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-purple-100 border border-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                      <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <div className="ml-4">
                      {openItems.includes(faq.id) ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </button>

                  {openItems.includes(faq.id) && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Still Need Help Section */}
            <div className="mt-16 bg-[#4C1D95] text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
              <p className="text-lg mb-6 opacity-90">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0389220571"
                  className="bg-white text-purple-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  Call: 03-8922-0571
                </a>
                <a
                  href="mailto:info@ezcare-warranty.com"
                  className="bg-white text-purple-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  Email: info@ezcare-warranty.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavFooter />
    </>
  );
}
