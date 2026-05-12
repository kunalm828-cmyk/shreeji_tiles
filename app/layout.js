import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800', '900'],
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
  title: 'Shreeji Tiles | #1 Tiles Showroom in Vadodara | Premium Floor & Wall Tiles',
  description: 'Looking for the best tiles showroom in Vadodara? Shreeji Tiles offers premium ceramic tiles, floor tiles, luxury bath fittings, and sanitaryware. 25+ years of excellence in Vadodara, Gujarat. Visit us for kitchen & bathroom makeovers.',
  keywords: [
    'tiles vadodara', 
    'tiles showroom vadodara', 
    'bathroom tiles vadodara', 
    'floor tiles vadodara', 
    'ceramic tiles vadodara', 
    'kitchen tiles vadodara', 
    'sanitaryware vadodara',
    'bath fittings vadodara',
    'best tiles shop in vadodara',
    'Shreeji Tiles Vadodara'
  ],
  authors: [{ name: 'Shreeji Tiles' }],
  creator: 'Shreeji Tiles',
  publisher: 'Shreeji Tiles',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Shreeji Tiles | Best Tiles Showroom in Vadodara',
    description: 'Explore a wide range of premium tiles and bath fittings at Shreeji Tiles, Vadodara. Over 25 years of quality and trust.',
    url: 'https://shreejitile.com',
    siteName: 'Shreeji Tiles',
    images: [
      {
        url: '/utility/logo.png',
        width: 1200,
        height: 630,
        alt: 'Shreeji Tiles Vadodara Showroom',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreeji Tiles | Premium Tiles & Sanitaryware in Vadodara',
    description: 'Transform your home with premium tiles from the top-rated showroom in Vadodara.',
    images: ['/utility/logo.png'],
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
  verification: {
    google: 'igx1cSR1yv1C7Mm6wyMKCOj8wRKeSyrkruWZ8ETB9EU',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HomeGoodsStore',
        '@id': 'https://shreejitile.com/#organization',
        name: 'Shreeji Tiles',
        image: 'https://shreejitile.com/utility/logo.png',
        url: 'https://shreejitile.com',
        telephone: '+919898713167',
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'B/H, Samruddhi Complex, Shed No. 10 Anand Estate, Dabhoi, Pratap Nagar Rd, opp. Yamuna Mill Road',
          addressLocality: 'Vadodara',
          addressRegion: 'GJ',
          postalCode: '390004',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '22.2823199',
          longitude: '73.2174973'
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '10:00',
            closes: '20:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '11:00',
            closes: '13:00'
          }
        ],
        sameAs: [
          'https://www.facebook.com/shreeji.tiles.3',
          'https://www.instagram.com/shreeji_tiles'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://shreejitile.com/#website',
        url: 'https://shreejitile.com',
        name: 'Shreeji Tiles',
        description: 'Premium Tiles and Sanitaryware Showroom in Vadodara',
        publisher: { '@id': 'https://shreejitile.com/#organization' }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Which is the best tiles showroom in Vadodara?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Shreeji Tiles is one of the top-rated tiles showrooms in Vadodara, offering a wide range of premium floor tiles, wall tiles, and sanitaryware for over 25 years.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Do you provide bathroom and kitchen tiles in Vadodara?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, we specialize in high-quality bathroom and kitchen tiles, including ceramic, porcelain, and vitrified options at our Vadodara showroom.'
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${poppins.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
