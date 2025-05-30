"use client"
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export const Footer = () =>  {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-sm">

        {/* Logo & Intro */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">TalentBoard</h2>
          <p className="text-gray-400 mb-4">
            Build your dream freelance team — fast, flexible, and reliable.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5 hover:text-white" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5 hover:text-white" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5 hover:text-white" /></a>
            <a href="mailto:support@talentboard.com" aria-label="Email"><Mail className="w-5 h-5 hover:text-white" /></a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-white mb-3">Explore</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/features" className="hover:text-white">Features</Link></li>
            <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-white mb-3">Stay Updated</h3>
          <p className="text-gray-400 mb-4">Get the latest freelance news and tips straight to your inbox.</p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm font-medium text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TalentBoard. All rights reserved.
      </div>
    </footer>
  );
}
