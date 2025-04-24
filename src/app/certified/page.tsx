"use client";

import { useState } from 'react';

// Sample data for certified remanufacturers
const certifiedRemanufacturers = [
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
  // Add the coming soon flag
  const comingSoon = true;

  // Filter companies based on search query
  const filteredCompanies = certifiedRemanufacturers.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Certified Remanufacturers
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
            Browse our list of verified printer cartridge remanufacturers
          </p>
        </div>
      </div>

      {/* About Our Certification section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-700">
            <h2 className="text-gray-900 text-3xl font-bold text-center mb-6">About Our Certification</h2>
            <p>
              CRPC certification helps marketplaces comply with regulations and protects consumers from counterfeit products. All listed companies have undergone thorough verification of their processes, facilities, and recycling programs. When you choose a CRPC certified remanufacturer, you&apos;re supporting businesses that meet the highest standards in the industry.
            </p>
          </div>
        </div>
      </div>

      {/* Certification Process section */}
      <div className="bg-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-700">
            <h2 className="text-gray-900 text-2xl font-bold text-center mb-6">Certification Process</h2>
            <div className="text-center mb-8">
              <a
                href="https://form.jotform.com/250728046535155"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-700 hover:bg-slate-800 md:py-4 md:text-lg md:px-10"
              >
                Apply Here
              </a>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Application and Verification</h3>
                <p>
                  The certification process begins with an application describing your remanufacturing business. A CRPC member will review your application, verify the information provided, and schedule a time for site verification.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Site Verification and Certification</h3>
                <p>
                  A deposit is required before the site verification. A CRPC member will visit your remanufacturing facility to confirm your remanufacturing processes. Upon successful verification, you&apos;ll complete your payment to receive your certification, badge, and unique badge number.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">Post-Certification</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Display the CRPC badge on your packaging to distinguish your products as certified remanufactured printer cartridges</li>
                  <li>The CRPC actively monitors online and physical marketplaces, purchasing cartridges marketed as remanufactured</li>
                  <li>The CRPC may send cartridges to your facility for inspection to verify if they are single-use or remanufactured</li>
                  <li>The CRPC may ask if you sold products to distributors using your badge number</li>
                  <li>Findings from monitoring and inspections will be posted on the CRPC website and reported to relevant marketplaces and governing bodies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional rendering based on comingSoon flag */}
      {comingSoon ? (
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-slate-100 py-16 px-6 rounded-lg shadow-md border-2 border-slate-300">
                <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Certified Companies Coming Soon</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  We are currently in the process of vetting and certifying qualified remanufacturers. 
                  Check back soon to find certified companies committed to quality and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Search and list section - only shown when comingSoon is false */
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex justify-center">
              <div className="w-full max-w-lg">
                <label htmlFor="search" className="sr-only">Search for companies</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                    placeholder="Search for companies"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <ul className="divide-y divide-gray-200">
                {filteredCompanies.length > 0 ? (
                  filteredCompanies.map((company, index) => (
                    <li key={index} className="px-6 py-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{company.name}</h3>
                          <p className="mt-1 text-sm text-gray-500">{company.location}</p>
                        </div>
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                        >
                          Visit Website
                        </a>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="px-6 py-5 text-center text-gray-500">
                    No companies found matching your search criteria.
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
