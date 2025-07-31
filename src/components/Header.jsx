import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Offering', path: '/offering' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'What we do?', path: '/services' },
    { name: 'Connect', path: '/connect' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <nav className="flex justify-between items-center w-full px-6 md:px-10 py-4 bg-[#faf4fa] text-black shadow-sm">
      {/* Brand */}
      <div>
        <h1 className="text-3xl font-bold text-[#5f2f91]">Lemici</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center text-base font-medium">
        {navLinks.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className={`transition rounded-md px-2 py-1 ${
              location.pathname === path
                ? 'bg-purple-200 text-purple-800 font-semibold'
                : 'hover:text-purple-700'
            }`}
          >
            {name}
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <div>
        <button className="px-6 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition duration-200">
          Get started
        </button>
      </div>
    </nav>
  );
}
