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
  title: '#1 Tiles Showroom in Vadodara | Premium Floor & Wall Tiles | Shreeji Tiles',
  description: 'Looking for the best tiles showroom in Vadodara? Shreeji Tiles offers premium vitrified floor tiles, designer wall tiles, and luxury sanitaryware. #1 choice for bathroom and kitchen tiles in Vadodara since 1998. Visit us near Pratap Nagar for Somany, Kajaria, and exclusive Sinox collections.',
  keywords: [
    'tiles vadodara', 'best tiles showroom in vadodara', 'tiles showroom vadodara', 
    'ceramic tiles vadodara', 'floor tiles vadodara', 'bathroom tiles vadodara', 
    'kitchen tiles vadodara', 'wall tiles vadodara', 'premium tiles vadodara', 
    'vitrified tiles vadodara', 'parking tiles vadodara', 'sanitaryware vadodara', 
    'bath fittings vadodara', 'luxury tiles showroom vadodara', 'designer tiles vadodara', 
    'modern tiles vadodara', 'home tiles showroom vadodara', 'tile dealer vadodara', 
    'best tile shop in vadodara', 'kajaria tiles vadodara', 'somany tiles vadodara',
    'tiles showroom near pratap nagar vadodara', 'tiles shop near dabhoi road vadodara',
    'top tile dealers in vadodara', 'wall tiles supplier vadodara', 'luxury tiles near me',
    'anti skid bathroom tiles', 'kitchen backsplash tiles', 'heavy duty parking tiles'
  ],
  authors: [{ name: 'Shreeji Tiles' }],
  creator: 'Shreeji Tiles',
  publisher: 'Shreeji Tiles',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Shreeji Tiles | Best Tiles Showroom in Vadodara',
    description: 'Explore the largest collection of premium tiles and sanitaryware in Vadodara. Quality you can trust for over 25 years.',
    url: 'https://shreejitile.com',
    siteName: 'Shreeji Tiles',
    images: [
      {
        url: '/utility/logo.png',
        width: 1200,
        height: 630,
        alt: 'Shreeji Tiles Vadodara - Best Tiles Showroom',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreeji Tiles | Premium Tiles Showroom in Vadodara',
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
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, Credit Card, UPI',
        areaServed: {
          '@type': 'City',
          name: 'Vadodara'
        },
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
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '482'
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
        '@type': 'BreadcrumbList',
        '@id': 'https://shreejitile.com/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://shreejitile.com'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Tiles Collection',
            'item': 'https://shreejitile.com/#products'
          }
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
              'text': 'Shreeji Tiles is the best tiles showroom in Vadodara, offering premium floor tiles, wall tiles, and luxury bath fittings. We are known for our quality and exclusive Sinox collection.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Do you have bathroom tiles in Vadodara?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, we have a massive collection of bathroom tiles in Vadodara, including glossy, matte, and anti-skid vitrified tiles starting from budget-friendly to luxury segments.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is there parking available at Shreeji Tiles?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, we have ample parking space available for customers visiting our showroom on Pratap Nagar Road, Vadodara.'
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
