'use client';

import Link from 'next/link';
import { useState } from 'react';
import PrimaryButton from '../shared/primary-button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact-us', label: 'Contact' },
  ];

  const calendlyLink = `https://outlook.office365.com/book/TheCodeSquad1@thecodesquad.onmicrosoft.com/`;
  return (
    <nav className="bg-white shadow-md rounded-2xl md:rounded-full w-[80%] md:w-[90%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}

          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-lg md:text-xl font-bold text-primary flex items-center gap-4"
            >
              <Image
                src="/icons/logo.svg"
                alt="logo"
                className=""
                height={50}
                width={50}
              />
              TheCodeSquad
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md bg-gradient-to-br from-primary to-secondary text-white hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center text-sm lg:text-base font-semibold">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-gray-600 hover:text-gray-900 ${
                  pathname === href ? 'text-tertiary' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Free Trial Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <PrimaryButton href={calendlyLink} target>Book a meeting</PrimaryButton>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden text-center">
            <div className="px-2 pt-4 pb-8 text-base space-y-7 sm:px-3 font-semibold">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`block text-gray-600 hover:text-gray-900 ${
                    pathname === href ? 'text-tertiary' : ''
                  }`}
                >
                  {label}
                </Link>
              ))}

              <div className="mt-2">
                <PrimaryButton href={calendlyLink} target>
                  Book a meeting
                </PrimaryButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
