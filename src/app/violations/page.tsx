import React from 'react';
import Image from 'next/image';

// Create an array of fake cartridge companies
const fakeCartridges = [
  { name: 'Batuto', image: '/images/fakes/batuto.png' },
  { name: 'BJ Ink Cartridge', image: '/images/fakes/bj_ink_cartridge.png' },
  { name: 'CG Chinger', image: '/images/fakes/cg_chinger.png' },
  { name: 'CMTOP', image: '/images/fakes/cmtop.png' },
  { name: 'Enonomink', image: '/images/fakes/enonomink.png' },
  { name: 'Eston', image: '/images/fakes/eston.png' },
  { name: 'Evinki', image: '/images/fakes/evinki.png' },
  { name: 'Foiset', image: '/images/fakes/foiset.png' },
  { name: 'Geshine', image: '/images/fakes/geshine.png' },
  { name: 'GPC Image', image: '/images/fakes/gpc_image.png' },
  { name: 'Greenbox', image: '/images/fakes/greenbox.png' },
  { name: 'Incwolf', image: '/images/fakes/incwolf.png' },
  { name: 'Inktopia', image: '/images/fakes/inktopia.png' },
  { name: 'Lextek', image: '/images/fakes/lextek.png' },
  { name: 'Sellyaha', image: '/images/fakes/sellyaha.png' },
  { name: 'V-Surink', image: '/images/fakes/v-surink.png' },
  { name: 'Yatunink', image: '/images/fakes/yatunink.png' },
].sort((a, b) => a.name.localeCompare(b.name));

const ViolationsPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Exposing Fakes
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
            Identifying ink and toner cartridge brands that falsely label their products as &quot;remanufactured&quot; or make misleading claims about their recyclability.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              Generic printer cartridges are new built products designed to be compatible with original equipment manufacturer (OEM) printers. These cartridges are not recycled by printer cartridge remanufacturers. If marketed as remanufactured or feature environmental claims—like the chasing arrows recycling logo—despite not meeting those standards, they will be listed here.
            </p>

            {/* Disclaimer Box */}
            <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Disclaimer</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The cartridges listed on this page have been reported and identified as making false claims about their products. Manufacturers or sellers of these brands may petition the CRPC to be removed from this list by completing a verification process to confirm that their products are genuinely remanufactured. The use of a recycling logo or any misleading claims about a product&apos;s recyclability may violate regulations enforced by the FTC, the EU&apos;s Unfair Commercial Practices Directive, or applicable state or provincial laws addressing false environmental claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Violations List Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Documented Violations
          </h2>
          <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-gray-600">
              Search functionality coming soon. We are developing a feature to help you easily find and verify cartridge brands.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fakeCartridges.map((fake) => (
              <div 
                key={fake.name}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={fake.image}
                    alt={`${fake.name} false labeling example`}
                    width={400}
                    height={300}
                    className="object-contain w-full h-full p-4"
                  />
                </div>
                <div className="p-4 border-t">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {fake.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ViolationsPage; 
