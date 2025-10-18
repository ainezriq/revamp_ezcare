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
  question: "What is a vehicle’s extended warranty?",
  answer: "An extended warranty is a protection plan that covers your vehicle beyond the original manufacturer's warranty period.",
  category: "General"
},
{
  id: 2,
  question: "What types of vehicles does Ezcare Warranty cover?",
  answer: "Ezcare Warranty covers reconditioned and pre-owned vehicles, including hybrids, EVs, high-performance motorcycles, and supercars.",
  category: "General"
},
{
  id: 3,
  question: "How long does the warranty coverage last?",
  answer: "Coverage terms range from 1 to 5 years, depending on your selected plan.",
  category: "General"
},
{
  id: 4,
  question: "What components are included under the warranty?",
  answer: "Major mechanical and electrical parts like the engine, gearbox, air conditioning, and fuel system are covered, depending on your plan.",
  category: "General"
},
{
  id: 5,
  question: "Are there any parts not covered under the warranty?",
  answer: "Wear-and-tear items like brake pads, tires, 12V batteries, and light bulbs are not covered unless stated in your plan.",
  category: "General"
},
{
  id: 6,
  question: "Can I choose my own service and repair workshop?",
  answer: "Yes, as long as the workshop is SSM-certified and properly registered.",
  category: "General"
},
{
  id: 7,
  question: "What should I do if my warranty is about to expire?",
  answer: "Contact Ezcare at 1300 88 8287 to renew your warranty before it expires.",
  category: "General"
},
{
  id: 8,
  question: "Can I transfer my warranty to a new vehicle owner?",
  answer: "Yes, the warranty is transferable as long as terms and conditions are not breached.",
  category: "General"
},
{
  id: 9,
  question: "What maintenance is required to keep the warranty valid?",
  answer: "Follow the service intervals as outlined in the Ezcare Warranty SuperApp.",
  category: "General"
},
{
  id: 10,
  question: "Do you provide breakdown assistance?",
  answer: "Yes, via the Ezcare Warranty SuperApp or by calling 1300 88 8287.",
  category: "General"
},
{
  id: 11,
  question: "Can I upgrade my warranty plan later?",
  answer: "Yes, upgrades are allowed anytime during coverage. Charges depend on the plan difference.",
  category: "General"
},
{
  id: 12,
  question: "Is the warranty valid throughout Malaysia?",
  answer: "Yes, including Sabah and Sarawak.",
  category: "General"
},
{
  id: 13,
  question: "Does Ezcare Warranty cover hybrid batteries or EV systems?",
  answer: "Yes, selected plans offer add-ons for hybrid and EV system coverage.",
  category: "General"
},
{
  id: 14,
  question: "What happens if I sell my vehicle before the warranty expires?",
  answer: "The warranty stays with the vehicle and remains valid under the new owner.",
  category: "General"
},
{
  id: 15,
  question: "How do I contact Ezcare Warranty for support?",
  answer: "Use the chat support in the SuperApp or call 1300 88 8287.",
  category: "General"
},
{
  id: 16,
  question: "How do I make a warranty claim?",
  answer: "Use the SuperApp’s chat or breakdown feature, or call 1300 88 8287.",
  category: "Claims"
},
{
  id: 17,
  question: "When should I file a claim?",
  answer: "Immediately after noticing any issue with your vehicle.",
  category: "Claims"
},
{
  id: 18,
  question: "What documents do I need to submit a claim?",
  answer: "Provide your vehicle registration or policy number, issue details, and workshop info.",
  category: "Claims"
},
{
  id: 19,
  question: "How long does it take to process a claim?",
  answer: "Most claims are processed within 24 hours after receiving all required documents.",
  category: "Claims"
},
{
  id: 20,
  question: "Can I get repairs done before claim approval?",
  answer: "No. All repairs must be pre-approved by Ezcare Warranty.",
  category: "Claims"
},
{
  id: 21,
  question: "What if the repair cost is higher than expected?",
  answer: "The claims team will review the updated quotation before final approval.",
  category: "Claims"
},
{
  id: 22,
  question: "Can I track my claim status?",
  answer: "Yes, via the 'Claims' tab in the SuperApp.",
  category: "Claims"
},
{
  id: 23,
  question: "What happens if my claim is denied?",
  answer: "You’ll receive a written explanation detailing the reason for denial.",
  category: "Claims"
},
{
  id: 24,
  question: "Do I need to pay the workshop first?",
  answer: "Ezcare pays the approved amount directly to the workshop. You cover any balance.",
  category: "Claims"
},
{
  id: 25,
  question: "Can I claim multiple times during the warranty period?",
  answer: "Yes, as long as claims fall within your plan’s coverage and limits.",
  category: "Claims"
},
{
  id: 26,
  question: "Does my warranty have towing assistance for breakdown-related issues?",
  answer: "Yes, towing assistance is included.",
  category: "Claims"
}

];

const categories = ["All", "General", "Claims"];

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
