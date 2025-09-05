/** @format */

import ClientPage from './ClientPage';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title:
    'Premier Legal Services | Ralph Nwosu & Co Law Firm | Expert Legal Representation',
  description:
    'Experience exceptional legal representation with Ralph Nwosu & Co. Specializing in corporate law, personal injury, family law, and estate planning. Trusted legal experts serving clients with personalized attention and proven results.',
  keywords:
    'law firm, legal services, corporate law, personal injury lawyer, family law attorney, estate planning, legal representation, Sterling Associates, expert lawyers, legal consultation, litigation services',
  openGraph: {
    title: 'Premier Legal Services | Ralph Nwosu & Co Law Firm',
    description:
      'Experience exceptional legal representation with Sterling & Associates. Expert lawyers providing personalized legal solutions across multiple practice areas.',
    url: 'https://sterlingassociates.com',
    siteName: 'Ralph Nwosu & Co',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ralph Nwosu & Co Law Firm - Premier legal services with experienced attorneys',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premier Legal Services | Ralph Nwosu & Co Law Firm',
    description:
      'Experience exceptional legal representation with Ralph Nwosu & Co.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://sterlingassociates.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <Script
        id='schema-org-graph'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'Ralph Nwosu & Co',
            description:
              'Experience exceptional legal representation with Ralph Nwosu & Co. Expert lawyers providing personalized legal solutions across corporate law, personal injury, family law, and estate planning.',
            url: 'https://sterlingassociates.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Downtown',
              addressRegion: 'Metropolitan Area',
              postalCode: '10001',
              addressCountry: 'US',
              streetAddress: '500 Legal Plaza, Suite 2000',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '40.7589',
              longitude: '-73.9851',
            },
            telephone: '555-LAW-FIRM',
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
              ],
              opens: '08:00',
              closes: '18:00',
            },
            image: 'https://sterlingassociates.com/images/law-firm.jpg',
            priceRange: '$$$',
            amenityFeature: [
              'Corporate Law Expertise',
              'Personal Injury Representation',
              'Family Law Services',
              'Estate Planning',
              '24/7 Emergency Consultation',
            ],
            availableLanguage: 'English',
          }),
        }}
      />
      <ClientPage />
    </>
  );
}
