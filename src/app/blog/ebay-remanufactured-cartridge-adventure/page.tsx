import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'The Murky Waters of "Remanufactured" Cartridges: An eBay Adventure',
  description: 'A firsthand account of purchasing "remanufactured" printer cartridges on eBay and the misleading labeling encountered.',
};

const EbayAdventurePost = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg lg:prose-xl mx-auto text-gray-700">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-center mb-12">
            The Murky Waters of &quot;Remanufactured&quot; Cartridges: An eBay Adventure
          </h1>

          <p className="lead">
            I wanted to do the right thing for the environment and save some money. So, I turned to eBay to order the cheapest remanufactured printer cartridges they had. What I received, however, was a lesson in misleading labeling and the very problem the CRPC is working to solve.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">The First Purchase: Hope and Disappointment</h2>
          <p>
            First I purchased a $19 set of <strong>67XL Ink Cartridges for HP printers</strong> (Deskjet 2700e, 2755e, 2800e, 4155e, Envy 6000, 6055e). I bought these from the seller <Link href="https://www.ebay.com/str/greenskylifestyle?_trksid=p4429486.m3561.l161211" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900">greensky-lifestyle</Link> via this <Link href="https://www.ebay.com/itm/196517749552?var=496296112621" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900">eBay listing</Link> (archived <Link href="https://archive.ph/sYeJ2" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900">here</Link>).
          </p>
          <p>
            While some user comments on the listing mentioned &quot;remanufactured,&quot; one can never be too sure if such comments are genuine. The cartridges arrived with no original box, but the container they came in did state &quot;remanufactured.&quot; This initially seemed promising.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">A Familiar Foe: The Third Purchase</h3>
          <p>
            Adding to the complexity, I purchased what appeared to be the same <strong>67XL Ink Cartridges for HP printers</strong> (Deskjet 2700, 2755e, 4100e, 4155e, Envy 6000, 6452e) from a different seller also for $19 <Link href="https://www.ebay.com/str/uhelpmate?_trksid=p4429486.m3561.l161211" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900">UhelpMate</Link>, via this <Link href="https://www.ebay.com/itm/405780574713?var=676073274065" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900">eBay listing</Link> (archived <Link href="https://archive.ph/YdPmM" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900">here</Link>).
          </p>
          <p>
            Interestingly, the product received from UhelpMate was identical in appearance and packaging (or lack thereof) to the one from greensky-lifestyle. This discovery raises further questions about the supply chain and the true origin of these cartridges being marketed by different sellers under the guise of &quot;remanufactured.&quot;
          </p>

          {/* Image Gallery for SkyHelp/GreenSky */}
          <div className="my-8">
            <h4 className="text-lg font-medium mb-4">Images of the GreenSky/UhelpMate Cartridges:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative h-64 border border-gray-200 rounded overflow-hidden">
                <Image 
                  src="/images/ebay-remanufactured-cartridge-adventure/sky_help0.png" 
                  alt="GreenSky/UhelpMate cartridge packaging" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="relative h-64 border border-gray-200 rounded overflow-hidden">
                <Image 
                  src="/images/ebay-remanufactured-cartridge-adventure/sky_help1.png" 
                  alt="GreenSky/UhelpMate cartridge detail" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="relative h-64 border border-gray-200 rounded overflow-hidden">
                <Image 
                  src="/images/ebay-remanufactured-cartridge-adventure/sky_help2.png" 
                  alt="GreenSky/UhelpMate cartridge detail" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="relative h-64 border border-gray-200 rounded overflow-hidden">
                <Image 
                  src="/images/ebay-remanufactured-cartridge-adventure/sky_help3.png" 
                  alt="GreenSky/UhelpMate cartridge detail" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="relative h-64 border border-gray-200 rounded overflow-hidden">
                <Image 
                  src="/images/ebay-remanufactured-cartridge-adventure/sky_help4.png" 
                  alt="GreenSky/UhelpMate cartridge detail" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="relative h-64 border border-gray-200 rounded overflow-hidden">
                <Image 
                  src="/images/ebay-remanufactured-cartridge-adventure/sky_help5.png" 
                  alt="GreenSky/UhelpMate cartridge detail" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Note the &quot;remanufactured&quot; label on the packaging, but no other indications of remanufacturing.</p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">The Second Purchase: More Confusion</h2>
          <p>
            Undeterred, I made a second purchase: <strong>2PK 67XL Ink Cartridges for HP printers</strong> (Deskjet 2855e, 2755e, 2700e, 4155e). This time, the seller was <Link href="https://www.ebay.com/str/spuerink?_trksid=p4429486.m3561.l161211" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900">super-ink</Link>, through this <Link href="https://www.ebay.com/itm/316586214600" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900">eBay listing</Link> (archived <Link href="https://archive.ph/iF6qJ" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900">here</Link>).
          </p>
          <p>
            The experience with this order was even more perplexing. The cartridges arrived in a box, and this box also claimed the contents were &quot;remanufactured.&quot; However, upon inspecting the cartridges themselves, there was no indication or labeling to suggest they were remanufactured.
          </p>

          {/* Image Gallery for Super Ink */}
          <div className="my-8">
            <h4 className="text-lg font-medium mb-4">Images of the Super-Ink Cartridges:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative h-64 border border-gray-200 rounded overflow-hidden">
                <Image 
                  src="/images/ebay-remanufactured-cartridge-adventure/super_ink0.png" 
                  alt="Super-Ink cartridge packaging" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="relative h-64 border border-gray-200 rounded overflow-hidden">
                <Image 
                  src="/images/ebay-remanufactured-cartridge-adventure/super_ink1.png" 
                  alt="Super-Ink cartridge detail" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="relative h-64 border border-gray-200 rounded overflow-hidden">
                <Image 
                  src="/images/ebay-remanufactured-cartridge-adventure/super_ink2.png" 
                  alt="Super-Ink cartridge detail" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="relative h-64 border border-gray-200 rounded overflow-hidden">
                <Image 
                  src="/images/ebay-remanufactured-cartridge-adventure/super_ink3.png" 
                  alt="Super-Ink cartridge detail" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="relative h-64 border border-gray-200 rounded overflow-hidden">
                <Image 
                  src="/images/ebay-remanufactured-cartridge-adventure/super_ink4.png" 
                  alt="Super-Ink cartridge detail" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">The box claims these cartridges are &quot;remanufactured,&quot; but there&apos;s no evidence to support this on the cartridges themselves.</p>
          </div>

          <div className="my-12 p-6 bg-slate-50 border border-slate-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Awaiting Expert Verification</h3>
            <p className="text-slate-700">
              To get to the bottom of this, we&apos;ve sent these cartridges to one of our CRPC certified remanufacturers for a professional evaluation. We will report their findings as soon as we have them. This step is crucial in determining the true nature of these products.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">The Bigger Picture: A Common Struggle</h2>
          <p>
            My attempt to make an environmentally conscious and budget-friendly purchase highlights a significant issue. I wanted to support recycling and reuse, but due to potentially false or misleading labeling, I may have inadvertently purchased single-use cartridges.
          </p>
          <p>
            This isn&apos;t just an individual consumer problem. Procurement officers in businesses and government agencies across the country face this dilemma daily. They are tasked with making sustainable choices, often with tight budgets, and are susceptible to the same misleading practices.
          </p>
          <p>
            This is precisely the challenge the <strong>Certified Remanufactured Printer Cartridge (CRPC)</strong> program is designed to address. We are shining a spotlight on the supply chain for remanufactured cartridges, ensuring consumers who are truly supporting sustainable practices are not falling victim to false labeling.
          </p>

          <div className="mt-12 text-center">
            <Link href="/certified" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-slate-700 hover:bg-slate-800">
              Learn More About CRPC Certification
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbayAdventurePost; 
