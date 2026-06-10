import { Montserrat, Poppins } from 'next/font/google';
import './globals.css';
import ScrollReveal from '../components/ScrollReveal';


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://shreejitile.com'),
  title: {
    default: 'Shreeji Tiles | #1 Tiles Showroom in Vadodara | Premium Collections',
    template: '%s | Shreeji Tiles Vadodara'
  },
  description: 'Discover the finest collection of vitrified floor tiles, luxury bathroom designs, and modern kitchen wall tiles in Vadodara. Trusted by architects and homeowners since 1998 for premium quality and exclusive designs. Visit our showroom near Pratap Nagar.',
  keywords: [
    'tiles vadodara', 'best tiles showroom in vadodara', 'luxury tiles vadodara',
    'premium floor tiles', 'bathroom tiles showroom vadodara', 'kitchen backsplash tiles',
    'vitrified tiles vadodara', 'sanitaryware dealers in vadodara', 'modern home flooring',
    'designer wall tiles', 'anti skid bathroom tiles', 'heavy duty parking tiles'
  ],
  authors: [{ name: 'Shreeji Tiles' }],
  creator: 'Shreeji Tiles',
  publisher: 'Shreeji Tiles',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Shreeji Tiles | Luxury Tiles & Sanitaryware Showroom in Vadodara',
    description: 'Transform your space with Vadodara\'s most exclusive tile collection. From Italian designs to high-strength vitrified tiles.',
    url: 'https://shreejitile.com',
    siteName: 'Shreeji Tiles',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreeji Tiles Vadodara',
    description: 'Premium Tiles & Sanitaryware for Modern Homes in Vadodara.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://shreejitile.com/#organization',
        name: 'Shreeji Tiles',
        url: 'https://shreejitile.com',
        logo: 'https://shreejitile.com/logo.png',
        sameAs: [
          'https://www.facebook.com/shreejitiles',
          'https://www.instagram.com/shreejitiles'
        ]
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://shreejitile.com/#localbusiness',
        name: 'Shreeji Tiles',
        image: 'https://shreejitile.com/showroom.jpg',
        '@id': 'https://shreejitile.com',
        url: 'https://shreejitile.com',
        telephone: '+91-9825161066',
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'B/H, Samruddhi Complex, Shed No. 10 Anand Estate, Dabhoi, Pratap Nagar Rd, opp. Yamuna Mill Road',
          addressLocality: 'Vadodara',
          addressRegion: 'Gujarat',
          postalCode: '390004',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 22.2878,
          longitude: 73.2185
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
          ],
          opens: '09:00',
          closes: '20:00'
        },
        areaServed: [
          { '@type': 'City', name: 'Vadodara' },
          { '@type': 'City', name: 'Gujarat' },
          { '@type': 'Neighborhood', name: 'Akota' },
          { '@type': 'Neighborhood', name: 'Alkapuri' },
          { '@type': 'Neighborhood', name: 'Manjalpur' },
          { '@type': 'Neighborhood', name: 'Gotri' },
          { '@type': 'Neighborhood', name: 'Karelibaug' }
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <ScrollReveal />
        <main>{children}</main>
      </body>
    </html>
  );
}
