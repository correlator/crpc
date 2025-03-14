"use client";

import { useState } from 'react';

// Sample data for certified remanufacturers
const certifiedRemanufacturers = [
  {
    id: 1,
    name: 'Planet Green Recycle',
    location: 'Los Angeles, CA',
    website: 'https://www.planetgreenrecycle.com/',
    certificationDate: 'April 1, 2025',
    description: 'Remanufacturer of printer cartridges and toner cartridges since 2000.',
  },
  {
    id: 2,
    name: 'GreenPrint Remanufacturing',
    location: 'Portland, OR',
    website: 'https://www.greenprintremanufacturing.com',
    certificationDate: 'March 22, 2023',
    description: 'Full-service remanufacturer offering both inkjet and toner cartridges for all major brands.',
  },
  {
    id: 3,
    name: 'ReNew Imaging',
    location: 'Austin, TX',
    website: 'https://www.renewimaging.com',
    certificationDate: 'February 8, 2023',
    description: 'Specializing in high-yield cartridges for business environments with quality guarantees.',
  },
  {
    id: 4,
    name: 'CartridgeCycle',
    location: 'Denver, CO',
    website: 'https://www.cartridgecycle.com',
    certificationDate: 'April 5, 2023',
    description: 'Focused on environmentally responsible remanufacturing processes and zero-waste facilities.',
  },
  {
    id: 5,
    name: 'PrinterLife Remanufacturing',
    location: 'Atlanta, GA',
    website: 'https://www.printerliferemanufacturing.com',
    certificationDate: 'May 17, 2023',
    description: 'Specializing in cartridges for wide-format printers and specialty printing applications.',
  },
];

export default function CertifiedPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter companies based on search query
  const filteredCompanies = certifiedRemanufacturers.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Certified Remanufacturers
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100">
            Browse our directory of certified printer cartridge remanufacturers
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">About Our Certification</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            CRPC certification helps marketplaces comply with regulations and protects consumers from counterfeit products. Our certification ensures that remanufacturers meet strict standards for quality, environmental responsibility, and truthful labeling. All listed companies have undergone thorough verification of their processes, facilities, and recycling programs.
          </p>
        </div>

        {/* Search bar */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <div className="w-full max-w-md mx-auto">
            <label htmlFor="search" className="sr-only">Search companies</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search for companies"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Certification Process section */}
        <div className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Certification Process</h2>
          <p className="text-gray-700 mb-4">
            Our comprehensive certification process involves a detailed application and review that includes:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Site verification of how used OEM printer cartridges are obtained</li>
            <li>Site verification of remanufacturing production facility</li>
            <li>Verification of a recycling "Take Back Program" to help reduce used printer cartridges from ending up in landfills</li>
          </ul>
        </div>

        {/* Remanufacturers list */}
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredCompanies.map((company) => (
            <div key={company.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{company.name}</h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>{company.description}</p>
                </div>
                <div className="mt-3 text-sm">
                  <p className="text-gray-500">
                    <span className="font-medium text-gray-700">Location:</span> {company.location}
                  </p>
                  <p className="text-gray-500">
                    <span className="font-medium text-gray-700">Certified Since:</span> {company.certificationDate}
                  </p>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-500"
                  >
                    Visit Website
                    <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action for remanufacturers */}
        <div className="mt-12 bg-blue-50 rounded-lg overflow-hidden shadow">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Are you a remanufacturer?</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>If you're a printer cartridge remanufacturer interested in becoming CRPC certified, we'd love to hear from you.</p>
            </div>
            <div className="mt-5">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Apply for Certification
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
