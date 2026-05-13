"use client";
import React from 'react';
import Link from 'next/link';

const BlogCard = ({ title, excerpt, date, slug, image }) => {
    return (
        <div className="blog-card" style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease' }}>
            <div style={{ height: '200px', background: `url(${image}) center/cover` }}></div>
            <div style={{ padding: '25px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--primary-color)', fontWeight: '600' }}>{date}</span>
                <h3 style={{ margin: '10px 0', fontSize: '1.3rem' }}>{title}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px' }}>{excerpt}</p>
                <Link href={`/blog/${slug}`} style={{ fontWeight: '600', color: '#333', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    Read More <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
            <style jsx>{`
                .blog-card:hover { transform: translateY(-5px); }
            `}</style>
        </div>
    );
};

export default BlogCard;
