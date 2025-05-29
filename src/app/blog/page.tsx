import Link from 'next/link';

export const metadata = {
  title: 'CRPC Blog - Insights on Printer Cartridge Remanufacturing',
  description: 'Read the latest news, insights, and articles from CRPC on printer cartridge remanufacturing, sustainability, and industry best practices.',
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
    slug: 'ebay-remanufactured-cartridge-adventure',
    title: 'The Murky Waters of "Remanufactured" Cartridges: An eBay Adventure',
    description: 'A firsthand account of purchasing "remanufactured" printer cartridges on eBay and the misleading labeling encountered.',
    date: 'October 26, 2023',
    image: '/images/printer_says_no.jpg',
  },
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

const BlogIndexPage = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            CRPC Blog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Insights, news, and updates on genuine printer cartridge remanufacturing.
          </p>
        </div>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.slug} className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-slate-700">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500 mb-3">{post.date}</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {post.description}
              </p>
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center font-semibold text-slate-700 hover:text-slate-900">
                Read more &rarr;
              </Link>
            </article>
          ))}
          {blogPosts.length === 0 && (
            <p className="text-center text-gray-500">No blog posts yet. Check back soon!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogIndexPage; 
