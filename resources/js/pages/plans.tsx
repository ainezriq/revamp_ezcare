
import { Head } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
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
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const [hasStartedCounting, setHasStartedCounting] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const registeredIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const claimsIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const registeredStartRef = useRef(0);
  const claimsStartRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsCounterVisible(entry.isIntersecting);
          
          if (entry.isIntersecting && !hasStartedCounting) {
            setHasStartedCounting(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
      // Clean up intervals on unmount
      if (registeredIntervalRef.current) clearInterval(registeredIntervalRef.current);
      if (claimsIntervalRef.current) clearInterval(claimsIntervalRef.current);
    };
  }, [hasStartedCounting]);

  useEffect(() => {
    if (!hasStartedCounting) return;

    const registeredEnd = 83959;
    const claimsEnd = 47267;
    const duration = 7000;
    const incrementTime = 83;
    const registeredIncrements = duration / incrementTime;
    const claimsIncrements = duration / incrementTime;
    const registeredIncrementValue = registeredEnd / registeredIncrements;
    const claimsIncrementValue = claimsEnd / claimsIncrements;

    if (isCounterVisible) {
      // Resume or start counting
      registeredIntervalRef.current = setInterval(() => {
        registeredStartRef.current += registeredIncrementValue;
        if (registeredStartRef.current >= registeredEnd) {
          registeredStartRef.current = registeredEnd;
          if (registeredIntervalRef.current) {
            clearInterval(registeredIntervalRef.current);
          }
        }
        setRegisteredPlansCount(Math.floor(registeredStartRef.current));
      }, incrementTime);

      claimsIntervalRef.current = setInterval(() => {
        claimsStartRef.current += claimsIncrementValue;
        if (claimsStartRef.current >= claimsEnd) {
          claimsStartRef.current = claimsEnd;
          if (claimsIntervalRef.current) {
            clearInterval(claimsIntervalRef.current);
          }
        }
        setSuccessfulClaimsCount(Math.floor(claimsStartRef.current));
      }, incrementTime);
    } else {
      // Pause counting
      if (registeredIntervalRef.current) {
        clearInterval(registeredIntervalRef.current);
        registeredIntervalRef.current = null;
      }
      if (claimsIntervalRef.current) {
        clearInterval(claimsIntervalRef.current);
        claimsIntervalRef.current = null;
      }
    }

    return () => {
      if (registeredIntervalRef.current) clearInterval(registeredIntervalRef.current);
      if (claimsIntervalRef.current) clearInterval(claimsIntervalRef.current);
    };
  }, [isCounterVisible, hasStartedCounting]);

  const formatCount = (count: number, type: 'registered' | 'claims') => {
    if (type === 'registered') {
      return count >= 83959 ? '83,959+' : count.toLocaleString();
    }
    if (type === 'claims') {
      return count >= 47267 ? '47,267+' : count.toLocaleString();
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
        {/* Add heading above the plans with pattern */}
<div className="relative w-full bg-purple-900 py-12 mb-8 pt-28 overflow-hidden">
  {/* Gradient Mesh Background with Soft Waves */}
  <div className="absolute inset-0">
    {/* Soft Wave Layers */}
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      {/* Wave 1 - Top */}
      <path
        fill="rgba(255, 255, 255, 0.1)"
        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
      {/* Wave 2 - Middle */}
      <path
        fill="rgba(255, 255, 255, 0.08)"
        d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,170.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
      {/* Wave 3 - Bottom */}
      <path
        fill="rgba(255, 255, 255, 0.06)"
        d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
    </svg>
    
    {/* Gradient Mesh Overlay */}
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
        `
      }}
    />
    
    {/* Subtle Dots Pattern */}
    <div 
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }}
    />
  </div>
  
  {/* Decorative circles */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-purple-800 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-800 rounded-full opacity-20 translate-x-1/3 translate-y-1/3" />
  
  <h1
    className="relative text-5xl md:text-6xl font-bold mb-4 text-white text-center w-full z-10"
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
        {/* Counter Container */}
<div 
  ref={counterRef}
  className="mt-20 bg-gray-200 rounded-lg p-8 text-center w-full text-black"
>
  <h2 className="text-2xl font-bold mb-4 text-black">INTERNATIONALLY BACKED. LOCALLY TRUSTED.</h2>
  <p className="text-base mb-6 text-black max-w-4xl mx-auto">
    At Ezcare Warranty, your protection goes beyond promises, it's backed by one of international's most reputable insurance providers, Pacific Insurance Berhad. As the official underwriter for all Ezcare Warranty programmes, this partnership ensures every policy issued is supported by strong financial security, professional claims governance and global credibility.
  </p>
  <img
    src="/pacific-insurance-logo.png"
    alt="Pacific Insurance"
    className="mx-auto mb-2"
    style={{ maxWidth: '500px' }}
  />
  <div className="flex justify-center gap-16">
    <div>
      <img
        src="/clipboard-icon.png"
        alt="Registered Plans"
        className="mx-auto mb-2"
        style={{ width: '80px', height: '80px' }}
      />
      <p className="text-3xl text-black font-semibold">{formatCount(registeredPlansCount, 'registered')}</p>
      <p>Registered Plans</p>
    </div>
    <div>
      <img
        src="/thumbs-up-icon.png"
        alt="Successful Claims"
        className="mx-auto mb-2"
        style={{ width: '80px', height: '80px' }}
      />
      <p className="text-3xl font-semibold text-black">{formatCount(successfulClaimsCount, 'claims')}</p>
      <p>Successful Claims</p>
    </div>
          </div>
        </div>
        
        {/* What This Means For You Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">WHAT THIS MEANS FOR YOU</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h5 className="font-bold text-lg mb-3 text-black">Financially Secure Coverage</h5>
              <p className="text-gray-700">Your warranty coverage is supported by an established international insurer.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h5 className="font-bold text-lg mb-3 text-black">Greater Confidence & Assurance</h5>
              <p className="text-gray-700">Policyholders receive industry-grade protection that meets stringent insurance standards.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h5 className="font-bold text-lg mb-3 text-black">Transparent & Regulated Claims Process</h5>
              <p className="text-gray-700">Managed under established insurance compliance and oversight.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h5 className="font-bold text-lg mb-3 text-black">Trusted by the Market</h5>
              <p className="text-gray-700">A partnership that reinforces Ezcare Warranty’s credibility in both local and regional markets.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-bold mb-4 text-black">
              With Ezcare Warranty and Pacific Insurance Berhad working together, you’re not just covered, you’re confidently protected with internationally underwritten protection built to last.</p>
            <p className="text-base font-medium text-gray-700">
              Drive will full confidence with warranty programmes designed to protect you when it matters most.
            </p>
          </div>
        </section>

        <NavFooter />
      </div>
    </>
  );
}
