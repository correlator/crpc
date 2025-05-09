import Image from 'next/image';

const ProblemSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-slate-600 font-semibold tracking-wide uppercase">The Challenge</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The Problem with False Labeling
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Generic single-use cartridges are often falsely labeled as remanufactured or recyclable products.
          </p>
        </div>

        {/* False labeling images and explanation */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                <div className="grid grid-cols-1 gap-4">
                  <div className="h-64 sm:h-72 lg:h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/images/false_labeling.png"
                      alt="False labeling on inkjet cartridge"
                      width={600}
                      height={400}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="h-64 sm:h-72 lg:h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/images/false_label_tonor.png"
                      alt="False labeling on toner cartridge"
                      width={600}
                      height={400}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-0">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Deceptive Packaging</h3>
              <p className="text-gray-600 mb-4">
                These images show counterfeit &quot;remanufactured&quot; cartridges, including both inkjet and toner types, which are actually generic, single-use products falsely labeled as remanufactured.
              </p>
              <p className="text-gray-600 mb-4">
                Note the misleading symbols, including crossed-out trash cans (suggesting proper disposal) and recycling symbols, even though the products are not recyclable and lack instructions for proper recycling.
              </p>
              <p className="text-gray-600">
                This deceptive design misleads consumers into believing they are purchasing genuine remanufactured and recyclable products, when in fact they are buying single-use items that contribute to environmental waste.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-700 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Consumer Confusion</h3>
                <p className="mt-2 text-base text-gray-600">
                  Consumers are misled by false labeling, making it difficult to identify genuine remanufactured cartridges.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-700 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Market Distortion</h3>
                <p className="mt-2 text-base text-gray-600">
                  False labeling creates unfair competition and distorts the market for genuine remanufactured products.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-700 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Environmental Impact</h3>
                <p className="mt-2 text-base text-gray-600">
                  Single-use cartridges falsely labeled as recyclable contribute to increased plastic waste and environmental damage.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-700 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Regulatory Challenges</h3>
                <p className="mt-2 text-base text-gray-600">
                  Lack of clear standards makes it difficult for authorities to enforce regulations against false labeling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 
