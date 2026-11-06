import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexiiva.com';
  const locales = ['en', 'ar'];
  const routes = [
    '',
    '/platform',
    '/solutions',
    '/industries',
    '/pilot',
    '/about',
    '/insights',
    '/insights/why-operators-need-to-see-the-worst-day-before-it-happens',
    '/insights/what-an-ots-actually-trains-and-what-it-doesnt',
    '/insights/offline-first-simulators-for-secure-plants',
    '/contact',
    '/investors',
    '/legal/privacy',
    '/legal/terms',
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route.startsWith('/pilot') ? 0.9 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            ar: `${baseUrl}/ar${route}`,
          },
        },
      });
    }
  }

  return entries;
}
