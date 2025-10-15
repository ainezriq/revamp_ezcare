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
  answer: "Ezcare Warranty covers reconditioned, used vehicles, supercars, including hybrids, EVs, and motorcycles. Coverage applies to a wide range of makes and models.",
  category: "General"
},
{
  id: 2,
  question: "How long does the warranty coverage last?",
  answer: "Our warranty plans offer flexible terms from 1 to 5 years, depending on your selected plan. Extended coverage is available upon request.",
  category: "General"
},
{
  id: 3,
  question: "What components are included under the warranty?",
  answer: "The warranty covers key mechanical and electrical components such as the engine, gearbox, air conditioning, and fuel system. Refer to your plan for full details.",
  category: "General"
},
{
  id: 4,
  question: "Are there any parts not covered under the warranty?",
  answer: "Yes. Wear-and-tear items such as brake pads, tires, batteries, and light bulbs are not covered unless stated in your plan.",
  category: "General"
},
{
  id: 5,
  question: "Can I choose my own repair workshop?",
  answer: "Yes. Ezcare Warranty allows repairs at any authorized or reputable workshop. Simply ensure the workshop provides a quotation before repair approval.",
  category: "General"
},
{
  id: 6,
  question: "What should I do if my warranty is about to expire?",
  answer: "You can contact us to renew or extend your warranty before the expiry date. Early renewal may qualify for special discounts.",
  category: "General"
},
{
  id: 7,
  question: "Can I transfer my warranty to a new vehicle owner?",
  answer: "Yes. Warranties are transferable to new owners for a small administrative fee, provided the vehicle and policy remain eligible.",
  category: "General"
},
{
  id: 8,
  question: "What maintenance is required to keep the warranty valid?",
  answer: "Follow the manufacturer’s service schedule and retain all service receipts. Missing or irregular maintenance can void your warranty.",
  category: "General"
},
{
  id: 9,
  question: "Do you provide roadside assistance?",
  answer: "Yes. Most plans include 24/7 roadside assistance for towing, battery jump-starts, tire changes, fuel delivery, and lockouts.",
  category: "General"
},
{
  id: 10,
  question: "Can I upgrade or change my plan later?",
  answer: "Yes. You may upgrade your plan anytime during your coverage period. Additional costs apply based on your current plan and remaining term.",
  category: "General"
},
{
  id: 11,
  question: "Is the warranty valid throughout Malaysia?",
  answer: "Yes. Ezcare Warranty coverage is valid nationwide, including Sabah and Sarawak, as long as repairs are done at approved workshops.",
  category: "General"
},
{
  id: 12,
  question: "How can I check if my warranty is still active?",
  answer: "You can verify your warranty status by contacting our customer service team or checking your policy details online.",
  category: "General"
},
{
  id: 13,
  question: "Does Ezcare Warranty cover hybrid batteries or EV systems?",
  answer: "Yes. Selected plans include coverage for hybrid and electric vehicle components such as traction motors and battery packs.",
  category: "General"
},
{
  id: 14,
  question: "What happens if I sell my vehicle before the warranty expires?",
  answer: "You can transfer the warranty to the new owner or request a cancellation according to the policy terms.",
  category: "General"
},
{
  id: 15,
  question: "Does Ezcare Warranty work with car dealers?",
  answer: "Yes. We partner with trusted car dealers nationwide to provide customers with warranty protection at the time of purchase.",
  category: "General"
},
{
  id: 16,
  question: "How do I contact Ezcare Warranty for support?",
  answer: "You can reach us via phone at 03-8922-0571, email info@ezcare-warranty.com, or through our website’s contact form.",
  category: "General"
},
{
  id: 17,
  question: "How do I make a warranty claim?",
  answer: "Contact our claims team at 03-8922-0571 or email info@ezcare-warranty.com. Provide your policy number, vehicle details, and a description of the issue.",
  category: "Claims"
},
{
  id: 18,
  question: "When should I file a claim?",
  answer: "File a claim as soon as you notice a problem. Delaying may cause further damage and affect claim eligibility.",
  category: "Claims"
},
{
  id: 19,
  question: "What documents do I need to submit a claim?",
  answer: "Prepare your policy document, vehicle registration, maintenance records, and a detailed repair quotation from the workshop.",
  category: "Claims"
},
{
  id: 20,
  question: "Is there a deductible for claims?",
  answer: "Yes. Deductible amounts vary depending on your plan type. Premium plans may have lower or zero deductibles.",
  category: "Claims"
},
{
  id: 21,
  question: "How long does it take to process a claim?",
  answer: "Most claims are processed within 24–48 hours after all required documents are received. Urgent repairs can be prioritized.",
  category: "Claims"
},
{
  id: 22,
  question: "Can I get repairs done before claim approval?",
  answer: "No. Repairs must not begin until Ezcare Warranty has approved the claim. Unauthorized repairs may not be reimbursed.",
  category: "Claims"
},
{
  id: 23,
  question: "What if the repair cost is higher than expected?",
  answer: "Our claims team will review the updated quotation before providing final approval to ensure coverage is applied correctly.",
  category: "Claims"
},
{
  id: 24,
  question: "Can I track my claim status?",
  answer: "Yes. You can check your claim progress by contacting our support team via phone or email for updates.",
  category: "Claims"
},
{
  id: 25,
  question: "What happens if my claim is rejected?",
  answer: "You’ll receive a written explanation detailing the reason for rejection. You may appeal if you provide new evidence or documentation.",
  category: "Claims"
},
{
  id: 26,
  question: "Do I need to pay the workshop first?",
  answer: "In most cases, Ezcare pays the approved workshop directly. However, some workshops may request an upfront payment before claim approval.",
  category: "Claims"
},
{
  id: 27,
  question: "Can I claim multiple times during the warranty period?",
  answer: "Yes. You can make multiple claims as long as they fall within your coverage limits and the policy remains active.",
  category: "Claims"
},
{
  id: 28,
  question: "Does my warranty cover towing for claim-related issues?",
  answer: "Yes. Towing to an authorized repair center is included for covered breakdowns, depending on your plan.",
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
