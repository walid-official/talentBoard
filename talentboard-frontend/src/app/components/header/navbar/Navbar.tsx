"use client";
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-indigo-700">
            TalentBoard
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/about" className="text-gray-600 hover:text-indigo-700 transition">
              About
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-indigo-700 transition">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-indigo-700 transition">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-indigo-700 transition">
              Contact
            </Link>
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <Link href="/get-started">
              <button className="bg-indigo-700 text-white px-4 py-2 rounded-xl hover:bg-indigo-800 transition">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Icon (Optional for mobile nav toggle) */}
          <div className="md:hidden">
            {/* You can add a mobile menu toggle here later */}
            <button className="text-indigo-700 focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
