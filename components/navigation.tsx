 'use client';

    import { useState } from 'react';
    import Link from 'next/link';
    import { Menu, X } from 'lucide-react';

    export default function Navigation() {
      const [isOpen, setIsOpen] = useState(false);

      const navItems = [
        { name: 'Home', href: '/#home' },
        { name: 'About', href: '/#about' },
        { name: 'Services', href: '/#services' },
        { name: 'Portfolio', href: '/#portfolio' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/#contact' },
      ];

      return (
        <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="#" className="flex items-center gap-2">
                <div>
                  <p className="text-sm font-semibold">Adonis Constructions Ug</p>
                  <p className="text-xs opacity-75">Civil Engineering</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium hover:opacity-75 transition-opacity"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/#contact"
                className="hidden md:inline-block px-6 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-lg
  hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:opacity-75 transition-opacity"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="md:hidden pb-4 border-t border-primary-foreground border-opacity-10">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium hover:opacity-75 transition-opacity"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/#contact"
                  className="block mx-4 mt-3 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-lg
  hover:opacity-90 transition-opacity text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            )}
          </div>
        </nav>
      );
    }
