import { Link } from "@inertiajs/react";
import { useEffect, useRef } from "react";
import { Twitter, Instagram, Youtube, Linkedin, Phone, Globe, Shield } from "lucide-react";

export function NavFooter() {
  const visitorCounterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (visitorCounterRef.current) {
      // Create and append auth script
      const authScript = document.createElement("script");
      authScript.src = "https://www.freevisitorcounters.com/auth.php?id=722492ba32d5ca07da3587d29843149f492c0077";
      authScript.async = true;
      visitorCounterRef.current.appendChild(authScript);

      // Create and append counter script
      const counterScript = document.createElement("script");
      counterScript.src = "https://freevisitorcounters.com/en/home/counter/1387154/t/11";
      counterScript.async = true;
      visitorCounterRef.current.appendChild(counterScript);
    }
  }, []);

  return (
    <footer className="bg-white text-black py-10 border-t border-gray-200 w-full">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div>
            <div className="flex flex-col items-left mb-4">
              <Link href="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="EZCare Warranty Logo"
                  className="h-13 w-auto"
                />
              </Link>
              <div className="flex items-center space-x-2 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 9A7 7 0 1 0 5 9c0 1.387.409 2.677 1.105 3.765h-.008L12 22l5.903-9.235h-.007A6.97 6.97 0 0 0 19 9m-7 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6"/></svg>
                <span className="text-lg font-bold">Ezcare Warranty HQ</span>
              </div>
            </div>

            <div className="not-italic text-sm text-gray-900 mb-6 leading-relaxed">
              NO 1A & 3A, Jalan 8/1,<br />
              Seksyen 8, 43650 Bandar Baru Bangi,<br />
              Selangor
            </div>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              {/* Phone Number */}
              <div className="flex items-center space-x-3 text-gray-900 text-sm">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>0389220571</span>
              </div>

              {/* Website */}
              <div className="flex items-start space-x-3 text-gray-900 text-sm">
                <Globe className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <Link
                  href="https://www.systemmy.ezcare-warranty.com/"
                  className="hover:text-[#4C1D95] break-words leading-relaxed"
                >
                  https://www.systemmy.ezcare-warranty.com/
                </Link>
              </div>
            </div>

            {/* Social Icons with Lucide */}
            <div className="flex space-x-4 text-gray-900">
              <Link href="#" aria-label="Twitter" className="hover:text-[#4C1D95] transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-[#4C1D95] transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="YouTube" className="hover:text-[#4C1D95] transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-[#4C1D95] transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-md font-semibold mb-6">
  <Link href="/plans" className="hover:text-[#4C1D95]">
    Warranty Plans
  </Link>
</h3>
            <h3 className="text-md font-semibold mb-3">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-900 hover:text-[#4C1D95]">About Ezcare Warranty</Link></li>
              <li><Link href="/career" className="text-gray-900 hover:text-[#4C1D95]">Career at Ezcare</Link></li>
              <li><Link href="/goc" className="text-gray-900 hover:text-[#4C1D95]">Group of Companies</Link></li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-md font-semibold mb-3">Support Center</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-900 hover:text-[#4C1D95]">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-900 hover:text-[#4C1D95]">FAQ</Link></li>
            </ul>
          </div>
        </div>
        {/* Visitor Counter Section */}
        <div className="mt-8 text-center text-sm text-gray-700" ref={visitorCounterRef}>
          <div>Current Visitor's Count</div>
          <a href="https://www.free-counters.org/">free Counters</a>
        </div>
      </div>
    </footer>
  );
}
