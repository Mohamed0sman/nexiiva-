import React from 'react';

export function JsonLd({ locale }: { locale: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://nexiiva.com/#organization',
        name: 'Nexiiva',
        url: 'https://nexiiva.com',
        logo: 'https://nexiiva.com/assets/brand/logo-light.png',
        description:
          'High-fidelity Operator Training Simulators (OTS) for refineries, gas plants, and petrochemical sites.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'EG',
          addressLocality: 'Cairo',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'Mostafa.adel.esmaiel@gmail.com',
          telephone: '+201004131154',
          contactType: 'technical support and sales',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://nexiiva.com/#website',
        url: 'https://nexiiva.com',
        name: 'Nexiiva',
        publisher: {
          '@id': 'https://nexiiva.com/#organization',
        },
        inLanguage: [locale === 'ar' ? 'ar' : 'en'],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://nexiiva.com/#software',
        name: 'Nexiiva Operator Training Simulator (OTS)',
        operatingSystem: 'Windows 10, Windows 11, Linux',
        applicationCategory: 'BusinessApplication',
        offers: {
          '@type': 'Offer',
          price: '800',
          priceCurrency: 'USD',
          description: 'Initial Paid Pilot for One Process Unit',
        },
        description:
          'DCS-authentic process simulation software for industrial control room operator qualification and emergency response training.',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
