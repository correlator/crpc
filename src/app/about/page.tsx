export const metadata = {
  title: 'About CRPC - Certified Remanufactured Printer Cartridges',
  description: 'Learn about the CRPC initiative and how it helps identify genuine remanufactured printer cartridges.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            About CRPC
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
            It&apos;s not a Certified Remanufactured Printer Cartridge without the CRPC
          </p>
        </div>
      </div>

      {/* What is CRPC section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-900">
            <h2 className="text-gray-900 text-3xl font-bold text-center mb-8">What is CRPC?</h2>
            <p className="text-gray-900">
              The Certified Remanufactured Printer Cartridge (CRPC) is a badge and identification process designed to distinguish genuine remanufactured printer cartridges in the marketplace. This initiative helps consumers, resellers, distributors, online marketplaces, and government authorities easily identify printer cartridges that are truly remanufactured from generic single-use cartridges.
            </p>
          </div>
        </div>
      </div>

      {/* Mission section with light gray background */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-900">
            <h2 className="text-gray-900 text-3xl font-bold text-center mb-8">Our Mission</h2>
            <p className="text-gray-900">
              The CRPC is a truth-in-labeling initiative created to combat the false labeling of generic single-use printer cartridges as remanufactured or recyclable products. While not an enforcement body, the CRPC serves as a valuable tool to:
            </p>
            <ul className="text-gray-900 list-disc pl-5">
              <li>Support plastic waste reduction initiatives</li>
              <li>Promote legislation to eliminate single-use printer cartridges</li>
              <li>Help restore, support, and protect the printer cartridge remanufacturing industry</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Objectives section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-900">
            <h2 className="text-gray-900 text-3xl font-bold text-center mb-8">Our Objectives</h2>
            <p className="text-gray-900">
              The overall objective of the CRPC is to establish itself in local, state, and federal statutes, effectively banning generic single-use cartridges. We aim to make the CRPC an instrument for:
            </p>
            <ul className="text-gray-900 list-disc pl-5">
              <li>Governing authorities to enforce regulations</li>
              <li>Marketplaces to differentiate between aftermarket cartridges</li>
              <li>Eliminating single-use printer cartridge waste</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certification Process section with light gray background */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-900">
            <h2 className="text-gray-900 text-3xl font-bold text-center mb-8">The Certification Process</h2>
            <p className="text-gray-900">
              To receive CRPC certification, remanufacturers must demonstrate that their products are genuinely remanufactured from used cartridges:
            </p>
            <ul className="text-gray-900 list-disc pl-5">
              <li>Site verification of of how OEM cartridges are obtained</li>
              <li>Site verification of Refmanufacturing production facility</li>
              <li>Verification of a recycling &quot;Take Back Program&quot; to help reduce used printer cartridges in landfills</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-900">
            <h2 className="text-gray-900 text-3xl font-bold text-center mb-8">Benefits of CRPC</h2>
            <p className="text-gray-900">
              The CRPC badge provides numerous benefits to various stakeholders:
            </p>
            <ul className="text-gray-900 list-disc pl-5">
              <li><strong>For Consumers:</strong> Confidence in purchasing genuine remanufactured products</li>
              <li><strong>For Remanufacturers:</strong> Recognition for legitimate practices and differentiation from falsely labeled products</li>
              <li><strong>For Retailers:</strong> Clear identification of genuine remanufactured products for inventory</li>
              <li><strong>For Policymakers:</strong> A standard to reference in legislation and regulations</li>
              <li><strong>For the Environment:</strong> Reduction in plastic waste and resource consumption</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Founder Bio section with industrial blue background */}
      <div className="bg-slate-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg mx-auto">
            <h2 className="text-white text-3xl font-bold text-center mb-8">Leadership</h2>
            <div className="flex flex-col items-center space-y-12">
              <div className="w-full">
                <h3 className="text-white text-2xl font-bold">Scott Hoch</h3>
                <p className="text-gray-300 font-semibold">Founder &amp; Managing Member</p>
                <p className="text-gray-200 mt-4"> Scott Hoch brings a unique blend of scientific insight and hands-on innovation to CRPC. With a Master&apos;s degree in Experimental Physics from Yale University, Scott has spent over 13 years as a CTO and technology leader, developing everything from IoT-enabled factory systems to AI-driven coffee machines. His journey into the print cartridge remanufacturing space began with a deep dive into its operational inefficiencies and lack of transparency—challenges he felt compelled to address. Scott also led the development of early blockchain-based pilots for supply chain traceability, helping to create new levels of accountability. Passionate about sustainability and local industry, he remains focused on building solutions that support a circular economy and a resilient workforce for future generations. </p>
                <br></br>
                <h3 className="text-white text-2xl font-bold">Joseph Bradley</h3>
                <p className="text-gray-300 font-semibold">Founder &amp; Managing Member</p>

<p className="text-gray-200 mt-4"> Joseph Bradley brings decades of diverse business experience to CRPC. He has launched and scaled manufacturing operations in the building materials sector, held executive roles in technology firms, and founded successful ventures in advertising and media production. Joseph holds an MBA from the University of Southern California (USC), where he honed his expertise in competitive strategy and operational systems. He played a key role in integrating blockchain technology into supply chains, where he first met Scott. Joseph is a strong believer in fair competition and sees efficient, trusted supply chains as essential to ethical commerce. At CRPC, he is focused on developing rigorous qualification and monitoring standards to help remanufactured products earn—and keep—customer trust. </p> 
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information section */}
      <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-700">
            <h2 className="text-gray-900 text-2xl font-bold text-center mb-6">Contact Us</h2>
            <div className="text-center space-y-4">
              <p className="text-lg">
                For questions about the certification process, please contact:
              </p>
              <div className="space-y-2">
                <p>
                  <a href="mailto:scott@thecrpc.com" className="text-slate-700 hover:text-slate-900">
                    scott@thecrpc.com
                  </a>
                </p>
                <p>
                  <a href="mailto:joseph@thecrpc.com" className="text-slate-700 hover:text-slate-900">
                    joseph@thecrpc.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
