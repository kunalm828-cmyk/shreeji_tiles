export default function sitemap() {
  const baseUrl = 'https://shreejitile.com';
  
  const categories = [
    'bathroom-tiles-vadodara',
    'floor-tiles-vadodara',
    'kitchen-tiles-vadodara',
    'parking-tiles-vadodara',
    'luxury-tiles-vadodara',
    'sanitaryware-vadodara',
    'wall-tiles-vadodara',
    'vitrified-tiles-vadodara'
  ];

  const blogs = [
    'bathroom-tile-trends-2026',
    'floor-tile-trends-2026'
  ];

  const categoryUrls = categories.map(cat => ({
    url: `${baseUrl}/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const blogUrls = blogs.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...categoryUrls,
    ...blogUrls,
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
