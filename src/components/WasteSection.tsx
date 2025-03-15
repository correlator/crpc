const WasteSection = () => {
  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-slate-600 font-semibold tracking-wide uppercase">Environmental Impact</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Printer Cartridge Waste Issue
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Single-use printer cartridges contribute significantly to plastic waste and environmental pollution.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-slate-700 rounded-md p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-lg font-medium text-gray-900">
                      Landfill Waste
                    </dt>
                    <dd className="mt-2 text-base text-gray-600">
                      Hundreds of Millions of printer cartridges end up in landfills annually, taking hundreds of years to decompose.
                    </dd>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-slate-700 rounded-md p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-lg font-medium text-gray-900">
                      Resource Depletion
                    </dt>
                    <dd className="mt-2 text-base text-gray-600">
                      Manufacturing new cartridges consumes significant resources, including oil, minerals, and water.
                    </dd>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-slate-700 rounded-md p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-lg font-medium text-gray-900">
                      Solution: Remanufacturing
                    </dt>
                    <dd className="mt-2 text-base text-gray-600">
                      Remanufacturing cartridges reduces waste by up to 90% and uses significantly fewer resources than producing new ones.
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Environmental Impact Statistics</h3>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="bg-slate-200 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6 text-center">
                    <dt className="text-sm font-medium text-gray-600 truncate">Cartridges Discarded Annually</dt>
                    <dd className="mt-1 text-3xl font-semibold text-slate-700">375M+</dd>
                  </div>
                </div>

                <div className="bg-slate-200 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6 text-center">
                    <dt className="text-sm font-medium text-gray-600 truncate">Years to Decompose</dt>
                    <dd className="mt-1 text-3xl font-semibold text-slate-700">450+</dd>
                  </div>
                </div>

                <div className="bg-slate-200 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6 text-center">
                    <dt className="text-sm font-medium text-gray-600 truncate">Oil Saved Per Cartridge</dt>
                    <dd className="mt-1 text-3xl font-semibold text-slate-700">3.5L</dd>
                  </div>
                </div>

                <div className="bg-slate-200 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6 text-center">
                    <dt className="text-sm font-medium text-gray-600 truncate">CO₂ Reduction</dt>
                    <dd className="mt-1 text-3xl font-semibold text-slate-700">40%</dd>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasteSection; 
