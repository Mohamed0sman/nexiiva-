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
        name: 'Nexiiva Industrial Digital Twin Platform',
        operatingSystem: 'Windows 10, Windows 11, Linux',
        applicationCategory: 'BusinessApplication',
        description:
          'High-fidelity dynamic process digital twins and 1:1 DCS console emulation for energy and petrochemical facilities.',
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
