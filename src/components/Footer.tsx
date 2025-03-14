import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - CRPC powered by RIA */}
          <div className="flex flex-col mb-4 md:mb-0 text-center md:text-left">
            <div className="text-white text-lg font-semibold">CRPC</div>
            <p className="text-gray-400">
              Powered by the RIA
            </p>
            <p className="text-gray-500 text-sm">
              Remanufacturing Industry Association
            </p>
          </div>

          {/* Right side - Copyright */}
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CRPC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
