/**
 * Shreeji Tiles - Advanced Production Sitemap
 * Optimizing for Google Indexing & Local SEO Dominance in Vadodara
 */
export default function sitemap() {
  const baseUrl = 'https://shreejitile.com';
  
  // High-Intent Authority Categories
  const categories = [
    'bathroom-tiles-vadodara',
    'floor-tiles-vadodara',
    'kitchen-tiles-vadodara',
    'parking-tiles-vadodara',
    'luxury-tiles-vadodara',
    'sanitaryware-vadodara',
    'wall-tiles-vadodara',
    'vitrified-tiles-vadodara',
    'wooden-tiles-vadodara',
    'designer-tiles-vadodara',
    'modern-tiles-vadodara',
    'anti-skid-tiles-vadodara',
    'elevation-tiles-vadodara',
    'outdoor-tiles-vadodara',
    'living-room-tiles-vadodara',
    'bedroom-tiles-vadodara',
    'balcony-tiles-vadodara',
    'commercial-tiles-vadodara',
    'imported-tiles-vadodara',
    'italian-tiles-vadodara'
  ];

  // Topical Authority Blog Posts
  const blogs = [
    'bathroom-tile-trends-2026',
    'floor-tile-trends-2026',
    'best-bathroom-tiles-guide',
    'luxury-flooring-ideas',
    'modern-kitchen-tile-designs',
    'best-parking-tiles',
    'anti-skid-tiles-guide',
    'living-room-flooring-trends',
    'luxury-home-tile-ideas',
    'best-tiles-for-modern-homes',
    'premium-vitrified-tiles-guide',
    'bathroom-renovation-ideas',
    'latest-tile-design-trends'
  ];

  // 1. Map Category URLs (Priority: 0.9)
  const categoryUrls = categories.map(cat => ({
    url: `${baseUrl}/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 2. Map Blog URLs (Priority: 0.7)
  const blogUrls = blogs.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // 3. Main System URLs
  return [
    {
      url: baseUrl, // Homepage
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`, // Blog Listing
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...categoryUrls,
    ...blogUrls
  ];
}
