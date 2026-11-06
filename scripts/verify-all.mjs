import http from 'http';

const BASE_URL = 'http://localhost:3000';

const routes = [
  '/',
  '/en',
  '/ar',
  '/en/platform',
  '/ar/platform',
  '/en/solutions',
  '/ar/solutions',
  '/en/industries',
  '/ar/industries',
  '/en/pilot',
  '/ar/pilot',
  '/en/about',
  '/ar/about',
  '/en/insights',
  '/ar/insights',
  '/en/insights/why-operators-need-to-see-the-worst-day-before-it-happens',
  '/ar/insights/why-operators-need-to-see-the-worst-day-before-it-happens',
  '/en/insights/what-an-ots-actually-trains-and-what-it-doesnt',
  '/ar/insights/what-an-ots-actually-trains-and-what-it-doesnt',
  '/en/insights/offline-first-simulators-for-secure-plants',
  '/ar/insights/offline-first-simulators-for-secure-plants',
  '/en/contact',
  '/ar/contact',
  '/en/investors',
  '/ar/investors',
  '/en/legal/privacy',
  '/ar/legal/privacy',
  '/en/legal/terms',
  '/ar/legal/terms',
  '/robots.txt',
  '/sitemap.xml',
  '/assets/brand/logo-light.png',
  '/assets/brand/logo-dark.png',
  '/assets/brand/logo-wide-light.png',
  '/assets/photos/hero-control-room.jpg',
  '/assets/photos/operator-control-room.jpg',
  '/assets/screens/cdu-atm-column-pfd.png',
  '/assets/screens/preheat-train-pfd.png',
  '/assets/screens/instructor-console.png',
  '/assets/team/mostafa-adel.jpg',
  '/assets/team/mohamed-osman.jpg',
];

async function checkUrl(path) {
  return new Promise((resolve) => {
    http.get(`${BASE_URL}${path}`, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        resolve({
          path,
          statusCode: res.statusCode,
          headers: res.headers,
          body,
        });
      });
    }).on('error', (err) => {
      resolve({ path, error: err.message });
    });
  });
}

async function run() {
  console.log('--- Starting Nexiiva Comprehensive Route & Asset Verification ---');
  let passed = 0;
  let failed = 0;

  for (const path of routes) {
    const res = await checkUrl(path);
    const isRedirect = path === '/' && res.statusCode === 307;
    const isOk = res.statusCode === 200 || isRedirect;

    if (isOk) {
      console.log(`✓ [${res.statusCode}] ${path}`);
      passed++;
    } else {
      console.error(`✗ [${res.statusCode || 'ERROR'}] ${path}: ${res.error || ''}`);
      failed++;
    }

    // Specific tag checks for HTML pages
    if (path === '/ar') {
      if (!res.body.includes('dir="rtl"') || !res.body.includes('lang="ar"')) {
        console.error('✗ /ar is missing dir="rtl" or lang="ar" attribute!');
        failed++;
      } else {
        console.log('  ↳ Verified Arabic RTL attributes: dir="rtl" lang="ar"');
      }
    }

    if (path === '/en') {
      if (!res.body.includes('dir="ltr"') || !res.body.includes('lang="en"')) {
        console.error('✗ /en is missing dir="ltr" or lang="en" attribute!');
        failed++;
      } else {
        console.log('  ↳ Verified English LTR attributes: dir="ltr" lang="en"');
      }
    }
  }

  console.log('---------------------------------------------------------------');
  console.log(`Results: ${passed} passed, ${failed} failed`);

  if (failed > 0) {
    process.exit(1);
  }
}

run();
