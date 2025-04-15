import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-800 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="pt-10 sm:pt-16 lg:pt-8 xl:pt-16">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Certified Remanufactured</span>
                <span className="block text-gray-300">Printer Cartridges</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                The CRPC badge helps consumers, resellers, distributors, online marketplaces, and government authorities easily identify genuine remanufactured printer cartridges.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://form.jotform.com/250728046535155"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                   Get Certified
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="/certified"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 md:py-4 md:text-lg md:px-10"
                  >
                    View Certified Remanufacturers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-slate-700 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
          {/* CRPC Badge Image */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/images/crpc_badge.png"
              alt="CRPC Certification Badge"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
