import Image from 'next/image';

const IndustrySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Industry Impact</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Destruction of the Remanufacturing Industry
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            False labeling has led to significant damage to the legitimate printer cartridge remanufacturing industry.
          </p>
        </div>

        <div className="mt-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <div className="h-96 rounded-lg overflow-hidden">
                      {/* Cartridge waste image */}
                      <Image
                        src="/crpc/images/cartridges.png"
                        alt="Printer cartridge waste"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <span className="ml-2">Discarded printer cartridges contributing to environmental waste</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                  The printer cartridge remanufacturing industry has been severely impacted by the proliferation of falsely labeled products.
                </p>
              </div>
              <div className="mt-5 prose prose-blue text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <ul className="space-y-4">
                  <li>
                    <strong>Job Losses:</strong> Thousands of jobs have been lost as legitimate remanufacturers struggle to compete with falsely labeled products.
                  </li>
                  <li>
                    <strong>Business Closures:</strong> Many established remanufacturing businesses have been forced to close due to unfair competition.
                  </li>
                  <li>
                    <strong>Market Share Decline:</strong> The market share of genuine remanufactured cartridges has declined significantly.
                  </li>
                  <li>
                    <strong>Innovation Stifling:</strong> Reduced profits have limited investment in research and development for better remanufacturing processes.
                  </li>
                  <li>
                    <strong>Supply Chain Disruption:</strong> The entire remanufacturing supply chain has been disrupted, affecting collectors, processors, and distributors.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection; 
