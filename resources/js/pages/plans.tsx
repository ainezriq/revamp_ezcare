import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { NavFooter } from '@/components/nav-footer';
import Navbar from '@/components/Navbar';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible';

const warrantyPlansData = {
  reconditioned: {
    title: 'RECONDITIONED VEHICLE WARRANTY PLAN',
    features: [
      { name: 'ENGINE', basic: true, premier: true },
      { name: 'TRANSMISSION', basic: true, premier: true },
      { name: 'ECU', basic: true, premier: true },
      { name: 'ECM', basic: true, premier: true },
      { name: 'TCM', basic: true, premier: true },
      { name: 'STEERING MECHANISM', basic: true, premier: true },
      { name: 'AIR CONDITIONING', basic: true, premier: true },
      { name: 'COOLING SYSTEM', basic: true, premier: true },
      { name: 'BRAKING SYSTEM', basic: false, premier: true },
      { name: 'TURBO', basic: false, premier: true },
      { name: 'SUPERCHARGER', basic: false, premier: true },
      { name: 'FUEL SYSTEM', basic: false, premier: true },
      { name: 'IGNITION SYSTEM', basic: false, premier: true },
      { name: 'REAR AXLE', basic: false, premier: true },
      { name: 'FRONT WHEEL & 4-WHEEL DRIVE', basic: false, premier: true },
      { name: 'ELECTRICAL COMPONENTS', basic: false, premier: true },
      { name: 'MAJOR OIL LEAKS', basic: false, premier: true },
    ],
    plans: ['BASIC PLAN', 'PREMIER PLAN']
  },
  used: {
    title: 'USED VEHICLE WARRANTY PLAN',
    features: [
      { name: 'ENGINE', basic: true, premier: true, ultimate: true },
      { name: 'TRANSMISSION', basic: true, premier: true, ultimate: true },
      { name: 'ECU', basic: true, premier: true, ultimate: true },
      { name: 'ECM', basic: true, premier: true, ultimate: true },
      { name: 'TCM', basic: true, premier: true, ultimate: true },
      { name: 'STEERING MECHANISM', basic: true, premier: true, ultimate: true },
      { name: 'AIR CONDITIONING', basic: true, premier: true, ultimate: true },
      { name: 'BRAKING SYSTEM', basic: false, premier: true, ultimate: true },
      { name: 'TURBO', basic: false, premier: true, ultimate: true },
      { name: 'SUPERCHARGER', basic: false, premier: true, ultimate: true },
      { name: 'FUEL SYSTEM', basic: false, premier: true, ultimate: true },
    ],
    plans: ['BASIC PLAN', 'PREMIER PLAN', 'ULTIMATE PLAN']
  },
  supercar: {
    title: 'SUPERCAR WARRANTY PLAN',
    features: [
      { name: 'ENGINE', supercar: true },
      { name: 'TRANSMISSION', supercar: true },
      { name: 'ECU', supercar: true },
      { name: 'ECM', supercar: true },
      { name: 'TCM', supercar: true },
      { name: 'STEERING MECHANISM', supercar: true },
      { name: 'AIR CONDITIONING', supercar: true },
      { name: 'BRAKING SYSTEM', supercar: true },
      { name: 'TURBO', supercar: true },
      { name: 'SUPERCHARGER', supercar: true },
      { name: 'FUEL SYSTEM', supercar: true },
      { name: 'IGNITION SYSTEM', supercar: true },
      { name: 'COOLING SYSTEM', supercar: true },
      { name: 'REAR AXLE', supercar: true },
      { name: 'FRONT WHEEL & 4-WHEEL DRIVE', supercar: true },
      { name: 'ELECTRICAL COMPONENTS', supercar: true },
      { name: 'MAJOR OIL LEAKS', supercar: true },
    ],
    plans: ['SUPERCAR PLAN']
  },
  ev: {
    title: 'ELECTRIC VEHICLE WARRANTY PLAN',
    features: [
      { name: 'ONBOARD CHARGER', nonTesla: true, tesla: true },
      { name: 'HIGH VOLTAGE LITHIUM-ION BATTERY', nonTesla: true, tesla: true },
      { name: 'DRIVE UNIT', nonTesla: true, tesla: true },
      { name: 'MCU (Tesla Model Only)', nonTesla: false, tesla: true },
    ],
    plans: ['NON TESLA MODEL', 'TESLA MODEL']
  },
  bikers: {
    title: 'BIKERS WARRANTY PLAN',
    features: [
      { name: 'ENGINE', basic: true, premier: true },
      { name: 'TRANSMISSION', basic: true, premier: true },
      { name: 'ECU', basic: true, premier: true },
      { name: 'FUEL SYSTEM', basic: true, premier: true },
      { name: 'SHAFT DRIVE', basic: false, premier: true },
      { name: 'IGNITION SYSTEM', basic: false, premier: true },
      { name: 'FLYWHEEL', basic: false, premier: true },
      { name: 'BRAKING SYSTEM', basic: true, premier: true },
      { name: 'ELECTRICAL COMPONENTS', basic: true, premier: true },
    ],
    plans: ['BASIC PLAN', 'PREMIER PLAN']
  },
  optional_add_on_hybrid_coverage: {
    title: 'OPTIONAL ADD ON HYBRID COVERAGE',
    features: [
      { name: 'HIGH VOLTAGE BATTERY', basic: true },
      { name: 'ELECTRIC MOTOR', basic: true },
      { name: 'INVERTER', basic: true },
    ],
    plans: ['HYBRID COVERAGE']
  }
};


export default function Plans() {
  const [openSection, setOpenSection] = useState<string | null>('reconditioned');
  const [registeredPlansCount, setRegisteredPlansCount] = useState(0);
  const [successfulClaimsCount, setSuccessfulClaimsCount] = useState(0);

  useEffect(() => {
    let start = 0;
    let startClaims = 0;
    const registeredEnd = 50000;
    const claimsEnd = 30000;
    const duration = 5000;
    const incrementTime = 74;
    const registeredIncrements = duration / incrementTime;
    const claimsIncrements = duration / incrementTime;
    const registeredIncrementValue = registeredEnd / registeredIncrements;
    const claimsIncrementValue = claimsEnd / claimsIncrements;

    const registeredInterval = setInterval(() => {
      start += registeredIncrementValue;
      if (start >= registeredEnd) {
        start = registeredEnd;
        clearInterval(registeredInterval);
      }
      setRegisteredPlansCount(Math.floor(start));
    }, incrementTime);

    const successfulInterval = setInterval(() => {
      startClaims += claimsIncrementValue;
      if (startClaims >= claimsEnd) {
        startClaims = claimsEnd;
        clearInterval(successfulInterval);
      }
      setSuccessfulClaimsCount(Math.floor(startClaims));
    }, incrementTime);

    return () => {
      clearInterval(registeredInterval);
      clearInterval(successfulInterval);
    };
  }, []);

  const formatCount = (count: number, type: 'registered' | 'claims') => {
    if (type === 'registered') {
      return count >= 50000 ? '50,000+' : count.toLocaleString();
    }
    if (type === 'claims') {
      return count >= 30000 ? '30,000+' : count.toLocaleString();
    }
    return count.toLocaleString();
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const CoverageIcon = ({ covered }: { covered: boolean }) => (
    <span className={`inline-block w-6 h-6 rounded-full text-center leading-6 text-sm font-bold ${
      covered ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`}>
      {covered ? '✓' : '✗'}
    </span>
  );

  const ComparisonTable = ({ data }: { data: any }) => (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 ${
        (data.title.includes('ELECTRIC VEHICLE') || data.title.includes('BIKERS'))
          ? 'w-full'
          : ''
      }`}
      style={
        (data.title.includes('ELECTRIC VEHICLE') || data.title.includes('BIKERS'))
          ? { maxWidth: '100%' }
          : {}
      }
    >
      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4">
            <div className="grid gap-3" style={{ gridTemplateColumns: `200px repeat(${data.plans.length}, 1fr)` }}>
              <div className="font-bold text-gray-700 text-sm">COMPONENT</div>
              {data.plans.map((plan: string, idx: number) => (
                <div key={plan} className="text-center">
                  <div className="bg-white rounded-lg p-3 shadow-md border-2 border-purple-200">
                    <div className="font-bold text-sm text-purple-800">{plan}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Feature rows */}
          <div className="divide-y divide-gray-100">
            {data.features.map((feature: any, idx: number) => (
              <div key={feature.name} className="grid gap-3 hover:bg-gray-50 transition-colors" style={{ gridTemplateColumns: `200px repeat(${data.plans.length}, 1fr)` }}>
                <div className="font-medium text-gray-800 py-3 px-4 bg-gray-50 border-r border-gray-200 text-sm">
                  {feature.name}
                </div>
                {data.plans.map((plan: string, planIdx: number) => {
                  let planKey = '';
                  if (data.title.includes('ELECTRIC VEHICLE')) {
                    planKey = plan.toLowerCase().includes('tesla') ? 'tesla' : 'nonTesla';
                  } else if (data.title.includes('BIKERS')) {
                    planKey = plan.toLowerCase().includes('basic') ? 'basic' : 'premier';
                  } else if (data.title.includes('SUPERCAR')) {
                    planKey = 'supercar';
                  } else {
                    // Default for basic/premier/ultimate
                    planKey = plan.toLowerCase().replace(/\s+/g, '').replace(/plan$/, '');
                  }
                  const isCovered = feature[planKey];
                  return (
                    <div key={plan + feature.name} className="text-center py-3 px-2 bg-white">
                      <CoverageIcon covered={!!isCovered} />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          {/* CTA Button - only one for each PLAN, not for each plan column */}
          <div className="bg-gray-50 p-4">
            <div className="flex justify-end">
              <a
                href={`https://wa.me/60132880177?text=${encodeURIComponent(
                  `Hi, can I get a quote on ${data.title}?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg py-2 px-6 text-xs font-semibold hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-md flex items-center justify-center"
              >
                Get a FREE Quotation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Head title="Warranty Plans" />
      <div className="min-h-screen bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a]">
        <Navbar />
        {/* Add heading above the plans */}
        <div className="w-full bg-purple-900 py-12 mb-8 pt-28">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 text-white text-center w-full"
            style={{
              textShadow:
                '0 4px 16px rgba(0,0,0,0.85), 0 1px 2px rgba(0,0,0,0.85)',
            }}
          >
            WARRANTY PLANS
          </h1>
        </div>
        <div className="max-w-5xl mx-auto px-4 pt-4 pb-8">
          {Object.entries(warrantyPlansData)
            .filter(([sectionKey]) => sectionKey !== 'optional_add_on_hybrid_coverage')
            .map(([sectionKey, sectionData]) => (
              <Collapsible key={sectionKey} open={openSection === sectionKey}>
                <CollapsibleTrigger
                  onClick={() => toggleSection(sectionKey)}
                  className="w-full flex justify-between items-center border rounded-md px-4 py-3 font-semibold cursor-pointer select-none mb-10"
                >
                  {sectionData.title}
                  <span
                    className={`transform transition-transform duration-300 ${
                      openSection === sectionKey ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-10 pb-20 flex flex-wrap gap-8 justify-start items-start">
                  {(sectionKey === 'ev' || sectionKey === 'bikers') ? (
                    <div className="w-full">
                      <ComparisonTable data={sectionData} />
                    </div>
                  ) : (
                    <div className="flex-1 min-w-[320px] max-w-[720px]">
                      <ComparisonTable data={sectionData} />
                    </div>
                  )}
                  {(sectionKey === 'used' || sectionKey === 'reconditioned' || sectionKey === 'supercar') && (
                    <div className="w-full sm:w-72 bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col justify-between">
                      <h3 className="text-purple-800 font-bold mb-4 text-center text-sm sm:text-base">OPTIONAL ADD ON HYBRID COVERAGE</h3>
                      <ul className="text-sm text-gray-700 space-y-3 flex-grow">
                        {warrantyPlansData.optional_add_on_hybrid_coverage.features.map((feature, idx) => (
                          <li key={feature.name} className="flex items-center gap-3">
                            <span className="inline-block w-6 h-6 rounded-full bg-green-500 text-white text-center leading-6 font-bold">✓</span>
                            <span className="uppercase">{feature.name}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 text-center">
                        <a
                          href={`https://wa.me/60132880177?text=${encodeURIComponent(
                            `Hi, can I get a quote on ${sectionData.title} include OPTIONAL ADD ON HYBRID COVERAGE?`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg py-2 px-4 text-xs font-semibold hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-md flex items-center justify-center"
                        >
                          Get a FREE Quotation
                        </a>
                      </div>
                    </div>
                  )}
                </CollapsibleContent>
              </Collapsible>
          ))}
        </div>
        {/* Move the purple container here, above NavFooter and outside the max-w-5xl container */}
        <div className="mt-20 bg-purple-100 rounded-lg p-8 text-center w-full">
          <h2 className="text-2xl font-bold mb-4">Ezcare by the Numbers</h2>
          <p className="mb-2">Underwritten by:</p>
          <img
            src="/pacific-insurance-logo.png"
            alt="Pacific Insurance"
            className="mx-auto mb-2"
            style={{ maxWidth: '400px' }}
          />
          <div className="flex justify-center gap-16">
            <div>
              <img
                src="clipboard-icon.png"
                alt="Registered Plans"
                className="mx-auto mb-2"
                style={{ width: '80px', height: '80px' }}
              />
              <p className="text-3xl font-semibold">{formatCount(registeredPlansCount, 'registered')}</p>
              <p>Registered Plans</p>
            </div>
            <div>
              <img
                src="/thumbs-up-icon.png"
                alt="Successful Claims"
                className="mx-auto mb-2"
                style={{ width: '80px', height: '80px' }}
              />
              <p className="text-3xl font-semibold">{formatCount(successfulClaimsCount, 'claims')}</p>
              <p>Successful Claims</p>
            </div>
          </div>
        </div>
        <NavFooter />
      </div>
    </>
  );
}
