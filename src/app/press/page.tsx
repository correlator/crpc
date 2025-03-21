import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Press Releases - CRPC',
  description: 'Official press releases from the Certified Remanufactured Printer Cartridge program.',
};

interface PressRelease {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
}

const pressReleases: PressRelease[] = [
  {
    slug: 'truth-in-labeling',
    title: 'The Certified Remanufactured Printer Cartridges (CRPC) to Bring Truth-in-Labeling to Remanufactured Products',
    description: 'The CRPC launches new certification program to combat false labeling and counterfeit products in the printer cartridge industry.',
    date: 'March 21, 2024',
    image: '/images/crpc_badge.png',
  },
  // Add more press releases here as they are created
];

export default function PressPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Press Releases
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
            Official announcements from the CRPC
          </p>
        </div>
      </div>

      {/* Press releases listing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {pressReleases.map((release) => (
            <Link 
              href={`/press/${release.slug}`} 
              key={release.slug}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex-shrink-0">
                {release.image && (
                  <div className="h-48 w-full relative">
                    <Image
                      src={release.image}
                      alt={release.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {release.date}
                  </p>
                  <div className="block mt-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {release.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {release.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                    Read more →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 
