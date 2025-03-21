import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PressReleaseLayoutProps {
  title: string;
  date: string;
  contactName?: string;
  contactTitle?: string;
  contactEmail?: string;
  contactPhone?: string;
  coverImage?: string;
  children: React.ReactNode;
}

export default function PressReleaseLayout({
  title,
  date,
  contactName = 'Scott Hoch',
  contactTitle = 'Founder & Executive Director',
  contactEmail = 'scott@thecrpc.com',
  contactPhone,
  coverImage,
  children,
}: PressReleaseLayoutProps) {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/press" className="text-base font-medium text-indigo-400 hover:text-indigo-300">
            ← Back to Press Releases
          </Link>
          <p className="mt-4 text-sm font-medium text-gray-300">
            FOR IMMEDIATE RELEASE: {date}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
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
        
        {/* Contact section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-3xl mx-auto border-t border-gray-200 pt-8">
            <h3 className="text-lg font-bold text-gray-900">Contact:</h3>
            <dl className="mt-2 text-base text-gray-700">
              {contactName && (
                <dd className="mb-1">{contactName}</dd>
              )}
              {contactTitle && (
                <dd className="mb-1">{contactTitle}</dd>
              )}
              {contactEmail && (
                <dd className="mb-1">{contactEmail}</dd>
              )}
              {contactPhone && (
                <dd>{contactPhone}</dd>
              )}
            </dl>
          </div>
        </div>
      </article>
    </div>
  );
} 
