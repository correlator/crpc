import Image from 'next/image';

export const metadata = {
  title: 'Thank You for Choosing Certified Remanufactured! | CRPC',
  description: 'Thank you for supporting honest, sustainable printing with a certified remanufactured print cartridge.',
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 py-12 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full flex flex-col items-center">
        <Image
          src="/images/CRPC-Seal-Colored.jpg"
          alt="CRPC Certified Remanufactured Seal"
          width={180}
          height={180}
          className="mb-6"
        />
        <h1 className="text-3xl font-extrabold text-slate-800 text-center mb-4">
          Thank You for Choosing Certified Remanufactured!
        </h1>
        <p className="text-lg text-slate-700 text-center mb-6">
          You&apos;ve made a smart, honest, and sustainable choice by purchasing a <span className="font-semibold">CRPC Certified Remanufactured Print Cartridge</span>.
        </p>
        <div className="bg-slate-100 rounded-lg p-4 text-slate-700 text-center text-base mb-4">
          <p className="mb-2 font-semibold">Why it matters:</p>
          <ul className="list-disc list-inside text-left mx-auto max-w-xs text-slate-700">
            <li>Helps cut down on plastic waste</li>
            <li>Supports laws that say goodbye to single-use cartridges</li>
            <li>Champions the remanufacturing industry and the people keeping it alive</li>
            <li>Makes printing smarter, cleaner, and more sustainable—together</li>
          </ul>
        </div>
        <p className="text-sm text-slate-500 mt-2">Printed on recycled paper. Thank you for keeping things honest!</p>
        <a
          href="https://form.jotform.com/251688101746056"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 bg-slate-700 text-white font-semibold rounded-md shadow hover:bg-slate-800 transition"
        >
          Contact CRPC / Inquiry Form
        </a>
      </div>
    </div>
  );
} 
