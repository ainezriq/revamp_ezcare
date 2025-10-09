import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Phone } from 'lucide-react';

export default function Navbar() {
    const { auth } = usePage<SharedData>().props;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/logo.png"
                                alt="EZCare Logo"
                                className="h-13 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex">
                        <NavigationMenu>
                            <NavigationMenuList className="flex space-x-8">
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/"
                                            className="text-[#1b1b18] hover:text-[#4C1D95] px-3 py-2 rounded-md text-sm font-medium transition-colors dark:text-[#EDEDEC] dark:hover:text-[#6B46C1]"
                                        >
                                            Home
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/plans"
                                            className="text-[#1b1b18] hover:text-[#4C1D95] px-3 py-2 rounded-md text-sm font-medium transition-colors dark:text-[#EDEDEC] dark:hover:text-[#6B46C1]"
                                        >
                                            Warranty Plans
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-[#1b1b18] hover:text-[#4C1D95] px-3 py-2 rounded-md text-sm font-medium transition-colors dark:text-[#EDEDEC] dark:hover:text-[#6B46C1]">
                                        About Us
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                        href="/about"
                                                    >
                                                        <div className="mb-2 mt-4 text-lg font-medium">
                                                            About Ezcare Warranty
                                                        </div>
                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                            Learn more about Ezcare Warranty and our mission.
                                                        </p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href="/career"
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                    >
                                                        <div className="text-sm font-medium leading-none">Career at Ezcare</div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                            Discover the history of Ezcare.
                                                        </p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href="/goc"
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                    >
                                                        <div className="text-sm font-medium leading-none">Group of Companies</div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                            Meet our dedicated team.
                                                        </p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-[#1b1b18] hover:text-[#4C1D95] px-3 py-2 rounded-md text-sm font-medium transition-colors dark:text-[#EDEDEC] dark:hover:text-[#6B46C1]">
                                        Support Center
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href="/faq"
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                    >
                                                        <div className="text-sm font-medium leading-none">FAQ</div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                            Frequently asked questions.
                                                        </p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href="/contact"
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                    >
                                                        <div className="text-sm font-medium leading-none">Contact Us</div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                            Get help and support.
                                                        </p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>

                    {/* Auth Links */}
                    <div className="flex items-center space-x-4">
                        {/* Hotline number added here */}
                        <span className="hidden md:flex items-center text-[#4C1D95] font-semibold text-sm px-3 py-2 rounded-md bg-purple-50">
                            <Phone className="w-4 h-4 mr-2" />
                            1 300 88 8287
                        </span>
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="bg-[#4C1D95] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#3730A3] transition-colors dark:bg-[#6B46C1] dark:hover:bg-[#553C9A]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="text-[#1b1b18] hover:text-[#4C1D95] px-3 py-2 rounded-md text-sm font-medium transition-colors dark:text-[#EDEDEC] dark:hover:text-[#6B46C1]"
                                >
                                    COUNTRY : MY
                                </Link>
                                <Link
                                    href="/policy-holder"
                                    className="bg-[#4C1D95] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#3730A3] transition-colors dark:bg-[#6B46C1] dark:hover:bg-[#553C9A]"
                                >
                                    Policy
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-[#1b1b18] hover:text-[#4C1D95] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4C1D95] dark:text-[#EDEDEC] dark:hover:text-[#6B46C1]"
                            aria-expanded={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
                <div className="px-4 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    <nav className="flex flex-col space-y-2">
                        <Link
                            href="/"
                            className="text-[#1b1b18] hover:text-[#4C1D95] px-4 py-3 rounded-md text-lg font-medium transition-colors dark:text-[#EDEDEC] dark:hover:text-[#6B46C1] block"
                        >
                            Home
                        </Link>
                        <Link
                            href="/plans"
                            className="text-[#1b1b18] hover:text-[#4C1D95] px-4 py-3 rounded-md text-lg font-medium transition-colors dark:text-[#EDEDEC] dark:hover:text-[#6B46C1] block"
                        >
                            Warranty Plans
                        </Link>
                        <Link
                            href="/about"
                            className="text-[#1b1b18] hover:text-[#4C1D95] px-4 py-3 rounded-md text-lg font-medium transition-colors dark:text-[#EDEDEC] dark:hover:text-[#6B46C1] block"
                        >
                            About Ezcare Warranty
                        </Link>
                        <Link
                            href="/career"
                            className="text-[#1b1b18] hover:text-[#4C1D95] px-4 py-3 rounded-md text-lg font-medium transition-colors dark:text-[#EDEDEC] dark:hover:text-[#6B46C1] block"
                        >
                            Career at Ezcare
                        </Link>
                        <Link
                            href="/goc"
                            className="text-[#1b1b18] hover:text-[#4C1D95] px-4 py-3 rounded-md text-lg font-medium transition-colors dark:text-[#EDEDEC] dark:hover:text-[#6B46C1] block"
                        >
                            Group of Companies
                        </Link>
                        <Link
                            href="/faq"
                            className="text-[#1b1b18] hover:text-[#4C1D95] px-4 py-3 rounded-md text-lg font-medium transition-colors dark:text-[#EDEDEC] dark:hover:text-[#6B46C1] block"
                        >
                            FAQ
                        </Link>
                        <Link
                            href="/contact"
                            className="text-[#1b1b18] hover:text-[#4C1D95] px-4 py-3 rounded-md text-lg font-medium transition-colors dark:text-[#EDEDEC] dark:hover:text-[#6B46C1] block"
                        >
                            Contact Us
                        </Link>
                        <a
                            href="tel:1300888287"
                            className="flex items-center justify-center bg-purple-50 text-[#4C1D95] px-4 py-3 rounded-md text-lg font-semibold hover:bg-purple-100 transition-colors block"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                             Hotline : 1 300 88 8287
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
