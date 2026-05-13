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
    'tiles in vadodara', 'best tiles in vadodara', 'top tiles showroom in vadodara', 
    'premium tiles showroom vadodara', 'tiles showroom near me', 'best tile shop in vadodara', 
    'ceramic tiles vadodara', 'vitrified tiles vadodara', 'luxury tiles vadodara', 
    'designer tiles vadodara', 'modern tiles vadodara', 'wall tiles vadodara', 
    'floor tiles vadodara', 'kitchen tiles vadodara', 'bathroom tiles vadodara', 
    'parking tiles vadodara', 'elevation tiles vadodara', 'sanitaryware vadodara', 
    'bath fittings vadodara', 'premium sanitaryware showroom vadodara', 
    'luxury bathroom fittings vadodara', 'modern bathroom tiles vadodara', 
    'anti skid bathroom tiles', 'bathroom floor tiles vadodara', 'washroom tiles vadodara', 
    'luxury bathroom tiles', 'digital bathroom tiles', 'matte finish bathroom tiles', 
    'high gloss bathroom tiles', 'modern kitchen tiles', 'kitchen backsplash tiles', 
    'kitchen wall tiles', 'modular kitchen tiles vadodara', 'designer kitchen tiles', 
    'stain resistant kitchen tiles', 'living room floor tiles', 'bedroom wall tiles', 
    'premium floor tiles', 'marble finish vitrified tiles', 'double charge vitrified tiles', 
    '800x800 vitrified tiles', '600x600 floor tiles', 'wooden finish tiles', 
    'wood plank tiles', 'porcelain wood tiles', 'heavy duty parking tiles', 
    'outdoor parking tiles', 'commercial parking tiles', 'industrial floor tiles', 
    'commercial flooring tiles', 'office flooring tiles', 'hotel bathroom tiles', 
    'restaurant floor tiles', 'luxury home flooring', 'premium ceramic collection', 
    'imported tiles vadodara', 'italian tiles vadodara', 'large format tiles', 
    '3d elevation tiles', 'latest tiles design', 'modern tile design 2026', 
    'luxury home tiles', 'best quality floor tiles', 'durable floor tiles', 
    'scratch resistant tiles', 'high strength parking tiles', 'premium wall tiles', 
    'TV unit background tiles', 'staircase tiles', 'balcony outdoor tiles', 
    'villa flooring tiles', 'bungalow parking tiles', 'tile dealer vadodara', 
    'tile supplier vadodara', 'tile distributor vadodara', 'best tile dealer near me', 
    'tiles shop near pratap nagar', 'tiles near dabhoi road', 'tiles showroom akota', 
    'tiles showroom alkapuri', 'tiles showroom manjalpur', 'tiles showroom gotri', 
    'tiles showroom karelibaug', 'tiles showroom waghodia', 'tiles showroom nizampura', 
    'tiles showroom harni', 'tiles showroom vasna road', 'best tiles showroom in pratap nagar', 
    'premium tiles near me', 'luxury tiles near me', 'best ceramic showroom in vadodara', 
    'best bathroom tiles showroom in vadodara', 'best floor tiles dealer in vadodara', 
    'best kitchen tiles in vadodara', 'best parking tiles in vadodara', 'affordable luxury tiles', 
    'budget friendly tiles vadodara', 'home renovation tiles', 'interior designer tiles', 
    'modern home tiles', 'premium interior tiles', 'luxury interior flooring', 
    'new home tile designs', 'best tiles for modern homes', 'best tiles for bungalow', 
    'best tiles for office flooring', 'best anti skid floor tiles', 'best vitrified tiles showroom', 
    'top tile brands in vadodara', 'kajaria tiles dealer vadodara', 'somany tiles dealer vadodara', 
    'asian tiles showroom vadodara', 'premium tile collection', 'exclusive tiles showroom', 
    'top rated tile showroom', 'trusted tiles dealer vadodara', 'where to buy premium tiles in vadodara', 
    'which is the best tiles showroom near me', 'best bathroom tiles shop near me', 
    'top floor tiles dealer in gujarat', 'best sanitaryware shop in vadodara', 
    'where to buy luxury floor tiles', 'premium bath fittings showroom', 
    'best showroom for tiles and sanitaryware',
    'flooring solutions vadodara', 'premium flooring showroom vadodara', 'luxury flooring tiles', 
    'ceramic wall tiles vadodara', 'digital wall tiles', 'living room vitrified tiles', 
    'premium glossy tiles', 'matte finish floor tiles', 'rustic wall tiles', 
    'stone finish tiles', 'granite finish vitrified tiles', 'marble look ceramic tiles', 
    'concrete finish tiles', 'wood texture wall tiles', 'designer elevation tiles', 
    'outdoor wall cladding tiles', 'exterior wall tiles', 'premium facade tiles', 
    'parking paving tiles', 'terrace outdoor tiles', 'balcony anti skid tiles', 
    'swimming pool tiles vadodara', 'spa bathroom tiles', 'hotel luxury bathroom tiles', 
    'commercial vitrified tiles', 'industrial ceramic flooring', 'warehouse floor tiles', 
    'showroom floor tiles', 'mall flooring tiles', 'office reception flooring', 
    'premium interior flooring', 'modern home flooring ideas', 'minimalist tile designs', 
    'luxury villa tiles', 'duplex home flooring', 'apartment flooring tiles', 
    'bungalow interior tiles', 'architect choice tiles', 'interior designer recommended tiles', 
    'premium imported ceramic tiles', 'Spanish tiles vadodara', 'Italian marble tiles', 
    'high durability vitrified tiles', 'germ resistant tiles', 'easy clean bathroom tiles', 
    'water resistant wall tiles', 'high traffic floor tiles', 'premium porcelain tiles', 
    'full body vitrified tiles', 'nano polished vitrified tiles', 'double charge porcelain tiles', 
    'seamless flooring tiles', 'large slab tiles', 'slim tiles collection', 
    'premium matte porcelain tiles', 'designer ceramic collection', 'elegant bathroom tile ideas', 
    'modern washroom wall tiles', 'luxury kitchen backsplash', 'premium modular kitchen tiles', 
    'kitchen floor ceramic tiles', 'premium sink area tiles', 'restaurant kitchen wall tiles', 
    'cafe interior flooring', 'luxury office flooring solutions', 'best tiles for luxury homes', 
    'latest ceramic tile trends', 'trending bathroom tile designs', 'modern elevation design tiles', 
    'best outdoor flooring tiles', 'weather resistant tiles', 'UV resistant outdoor tiles', 
    'premium terrace flooring', 'best anti skid outdoor tiles', 'heavy duty outdoor flooring', 
    'luxury staircase tile design', 'grand entrance flooring tiles', 'hotel lobby flooring tiles', 
    'premium reception area tiles', 'modern TV wall tiles', 'bedroom feature wall tiles', 
    'luxury living room wall tiles', 'premium pooja room tiles', 'designer balcony wall tiles', 
    'premium parking floor tiles', 'premium garage flooring tiles', 'best tiles for commercial space', 
    'best flooring for shops', 'premium retail showroom flooring', 'tile showroom open now', 
    'best rated tile dealer', 'famous tiles showroom vadodara', 'trusted ceramic dealer gujarat', 
    'best imported tiles showroom', 'exclusive tile gallery vadodara', 'premium bathware showroom', 
    'luxury sanitaryware collection', 'designer wash basin showroom', 'modern bathroom accessories vadodara', 
    'premium faucet showroom', 'luxury shower fittings vadodara', 'complete bathroom solutions', 
    'home interior material showroom', 'construction material showroom vadodara', 'premium home renovation showroom', 
    'best interior products showroom', 'top home decor tiles', 'architectural surface solutions', 
    'modern ceramic surfaces', 'premium home design materials', 'best tiles for luxury interiors', 
    'premium wall decor tiles', 'luxury ceramic concepts', 'best tile collection in gujarat', 
    'gujarat premium tile dealer', 'top ceramic showroom gujarat', 'best floor tile shop near me', 
    'nearest premium tile showroom', 'best home tiles near me', 'affordable ceramic tiles near me', 
    'best bathroom showroom near me', 'premium floor tiles near me', 'designer wall tiles near me', 
    'latest tile showroom near me', 'modern flooring near me', 'luxury tile collection near me'
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
        areaServed: [
          'Vadodara', 'Pratap Nagar', 'Dabhoi Road', 'Waghodia', 'Manjalpur', 
          'Akota', 'Alkapuri', 'Karelibaug', 'Gotri', 'Harni', 'Fatehgunj', 
          'Nizampura', 'Vasna', 'Sayajigunj', 'Gujarat'
        ],
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
