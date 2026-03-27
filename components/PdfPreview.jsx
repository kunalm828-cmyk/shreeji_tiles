"use client";
import { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Initialize the PDF.js web worker dynamically using a CDN to avoid Next.js module build issues
pdfjsLib.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

export default function PdfPreview({ pdfUrl, title }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Lazy load observer to only render PDF when it scrolls close to viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !pdfUrl) return;

    let isMounted = true;
    let renderTask = null;

    const renderPdf = async () => {
      try {
        setIsLoading(true);
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        
        if (!isMounted) return;

        // Render the first page
        const page = await pdf.getPage(1);
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        // A scale of 1.5 usually provides decent sharpness on typical cards
        const viewport = page.getViewport({ scale: 1.5 });
        
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        renderTask = page.render({
          canvasContext: context,
          viewport: viewport,
        });

        await renderTask.promise;
        
        if (isMounted) {
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Error rendering PDF preview:", err);
        if (isMounted) {
          setError(true);
          setIsLoading(false);
        }
      }
    };

    renderPdf();

    return () => {
      isMounted = false;
      if (renderTask) {
        // Suppress cancel errors to avoid dev console spam while fast scrolling
        renderTask.cancel().catch(() => {});
      }
    };
  }, [isVisible, pdfUrl]);

  return (
    <div 
      ref={containerRef} 
      className="pdf-preview-container" 
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100%', 
        minHeight: '250px', 
        backgroundColor: '#f1f5f9', 
        overflow: 'hidden' 
      }}
    >
      {isLoading && !error && (
        <div 
          className="skeleton-loader" 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(90deg, #e2e8f0 25%, #f8fafc 50%, #e2e8f0 75%)', 
            backgroundSize: '200% 100%', 
            animation: 'shimmer 1.5s infinite linear' 
          }}
        ></div>
      )}
      {error && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
          <span>Preview Unavailable</span>
        </div>
      )}
      <canvas 
        ref={canvasRef} 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          display: isLoading || error ? 'none' : 'block' 
        }} 
        aria-label={`PDF cover preview for ${title}`}
      />
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
