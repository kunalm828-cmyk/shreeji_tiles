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
  metadataBase: new URL('https://shreejitiles.com'),
  title: 'Shreeji Tiles | Premium Tiles, Sanitaryware & Bath Fittings in Vadodara',
  description: 'Transform your space with Shreeji Tiles. Explore our wide range of premium tiles, modern wall series, luxury bath fittings, and sanitaryware in Vadodara, Gujarat. Over 25 years of crafting elegant spaces.',
  keywords: ['tiles in Vadodara', 'sanitaryware', 'bath fittings', 'premium tiles', 'kitchen makeover', 'bathroom renovation', 'Grestek tiles', 'MarbleX', 'Shreeji Tiles', 'floor tiles'],
  authors: [{ name: 'Shreeji Tiles' }],
  creator: 'Shreeji Tiles',
  publisher: 'Shreeji Tiles',
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Shreeji Tiles | Premium Tiles & Bath Fittings',
    description: 'Transform your space with Shreeji Tiles. Over 25 years of crafting elegant spaces in Vadodara.',
    url: 'https://shreejitiles.com',
    siteName: 'Shreeji Tiles',
    images: [
      {
        url: '/utility/logo.png',
        width: 1200,
        height: 630,
        alt: 'Shreeji Tiles Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreeji Tiles | Premium Tiles in Vadodara',
    description: 'Transform your space with Shreeji Tiles. We offer premium tiles and sanitaryware.',
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
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HomeGoodsStore',
        name: 'Shreeji Tiles',
        image: 'https://shreejitiles.com/utility/logo.png',
        '@id': 'https://shreejitiles.com',
        url: 'https://shreejitiles.com',
        telephone: '+919898713167',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'B/H, Samruddhi Complex, Shed No. 10 Anand Estate, Dabhoi, Pratap Nagar Rd, opp. Yamuna Mill Road',
          addressLocality: 'Vadodara',
          addressRegion: 'GJ',
          postalCode: '390004',
          addressCountry: 'IN'
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
          'https://www.facebook.com/shreeji.tiles.3?mibextid=wwXIfr&rdid=BrIWvDZIbuv9mV0D',
          'https://www.instagram.com/shreeji_tiles?igsh=c296cnVlamltYTBl'
        ]
      },
      {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Product',
              name: 'Premium Ceramic Tiles Vadodara',
              image: 'https://shreejitiles.com/utility/logo.png',
              description: 'High quality ceramic and porcelain floor tiles available in Vadodara showroom.',
              brand: { '@type': 'Brand', name: 'Shreeji Tiles' },
              offers: {
                '@type': 'Offer',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
                areaServed: 'Vadodara'
              }
            }
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Product',
              name: 'Luxury Bath Fittings & Sanitaryware Vadodara',
              image: 'https://shreejitiles.com/utility/logo.png',
              description: 'Top-rated sanitaryware and bath fitting supplier in Gujarat.',
              brand: { '@type': 'Brand', name: 'Shreeji Tiles' },
              offers: {
                '@type': 'Offer',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
                areaServed: 'Vadodara'
              }
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
