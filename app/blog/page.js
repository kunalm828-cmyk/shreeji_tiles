import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BlogCard from '../../components/BlogCard';

export const metadata = {
  title: 'Blog & Tile Inspiration Guide | Shreeji Tiles Vadodara',
  description: 'Expert tips on choosing the best tiles for your home. Read our latest guides on bathroom renovation, flooring trends, and interior design inspirations in Vadodara.',
  keywords: ['tiles blog vadodara', 'bathroom renovation ideas', 'flooring trends 2026', 'kitchen tile designs'],
};

const blogs = [
    {
        title: 'Best Bathroom Tile Trends for Modern Homes in 2026',
        excerpt: 'Discover the latest trends in bathroom tile design, from anti-skid floor solutions to luxury digital wall patterns.',
        date: 'May 12, 2026',
        slug: 'bathroom-tile-trends-2026',
        image: '/blog-bathroom.jpg'
    },
    {
        title: 'Top Floor Tile Trends: Vitrified vs Marble Finish',
        excerpt: 'Comparing durability and aesthetics of vitrified tiles against traditional marble for your living room floor.',
        date: 'May 10, 2026',
        slug: 'floor-tile-trends-2026',
        image: '/blog-floor.jpg'
    },
    {
        title: 'How to Choose the Perfect Kitchen Backsplash',
        excerpt: 'A complete guide to selecting stain-resistant and stylish tiles for your modular kitchen in Vadodara.',
        date: 'May 05, 2026',
        slug: 'kitchen-backsplash-guide',
        image: '/blog-kitchen.jpg'
    }
];

const BlogListingPage = () => {
    return (
        <>
            <Navbar />
            <div className="blog-hero" style={{ padding: '100px 0', background: '#f8f9fa', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem' }}>Expert Tile Guides & Inspiration</h1>
                    <p style={{ color: '#666', maxWidth: '600px', margin: '20px auto' }}>Sharing 25+ years of experience to help you make the right choice for your home.</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                        {blogs.map((blog, idx) => (
                            <BlogCard key={idx} {...blog} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default BlogListingPage;
