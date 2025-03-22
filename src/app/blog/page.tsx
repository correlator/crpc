import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Blog - CRPC',
  description: 'Latest articles, research, and news from the Certified Remanufactured Printer Cartridge program.',
};

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'truth-in-labeling',
    title: 'CRPC to Bring Truth-in-Labeling to Remanufactured Products',
    description: 'The CRPC launches new certification program to combat false labeling and counterfeit products in the printer cartridge industry.',
    date: 'March 21, 2024',
    image: '/images/crpc_badge.png',
  },
  {
    slug: 'co2_per_cartridge',
    title: 'The Environmental Benefits of Remanufacturing Print Cartridges',
    description: 'Discover how choosing remanufactured toner cartridges can significantly reduce CO2 emissions and oil consumption.',
    date: 'March 17, 2024',
    image: '/images/cartridge_waste.png',
  },
  // You can add more blog posts here as they're created
];

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Blog
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
            Latest insights from the CRPC
          </p>
        </div>
      </div>

      {/* Blog listing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex-shrink-0">
                {post.image && (
                  <div className="h-48 w-full relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {post.date}
                  </p>
                  <div className="block mt-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
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
