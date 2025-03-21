import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostLayoutProps {
  title: string;
  date: string;
  authorName?: string;
  authorTitle?: string;
  authorImage?: string;
  coverImage?: string;
  children: React.ReactNode;
}

export default function BlogPostLayout({
  title,
  date,
  authorName = 'CRPC Research Team',
  authorTitle = 'Environmental Research Division',
  authorImage = '/images/crpc_badge.png',
  coverImage,
  children,
}: BlogPostLayoutProps) {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/blog" className="text-base font-medium text-indigo-400 hover:text-indigo-300">
            ← Back to Blog
          </Link>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            {date}
          </p>
        </div>
      </div>

      {/* Cover image */}
      {coverImage && (
        <div className="relative h-96 w-full">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Article content */}
      <article>
        {children}
        
        {/* Author section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-3xl mx-auto border-t border-gray-200 pt-8">
            <div className="flex items-center">
              {authorImage && (
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src={authorImage}
                    alt={authorName}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
              )}
              <div>
                <h3 className="text-lg font-bold text-gray-900">{authorName}</h3>
                {authorTitle && (
                  <p className="text-base text-gray-500">{authorTitle}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
} 
