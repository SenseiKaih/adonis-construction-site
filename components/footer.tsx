"use client";

import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#" className="flex items-center gap-2">
              <div className="w-12 h-10 rounded-lg overflow-hidden bg-secondary flex items-center justify-center">
                <img src="/gulaale-logo.png" alt="Gulaale logo" className="h-8 object-contain" />
              </div>
              <span className="font-bold text-lg">Gulaale Adonia</span>
            </Link>
            <p className="text-primary-foreground text-opacity-75 text-sm">
              Professional civil engineering and construction solutions serving Uganda since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-secondary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-secondary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-secondary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  Road Works
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  Drainage Works
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  Building Construction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  Property Consultancy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  Survey Works
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5 text-secondary-foreground" />
                <a href="tel:+256769408406" className="hover:text-secondary transition-colors">
                  +256769408406
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5 text-secondary-foreground" />
                <a href="tel:+256700195911" className="hover:text-secondary transition-colors">
                  +256700195911
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5 text-secondary-foreground" />
                <a href="mailto:gulaalehumphreadonia256@gmail.com" className="hover:text-secondary transition-colors">
                  gulaalehumphreadonia256@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-secondary-foreground" />
                <span>Jinja, Uganda</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground border-opacity-10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-sm text-primary-foreground text-opacity-75">
              © {currentYear} Gulaale Adonia Civil Engineering. All rights reserved.
            </p>
            <div className="flex justify-start md:justify-end gap-4 text-sm text-primary-foreground text-opacity-75">
              <a href="#" className="hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
