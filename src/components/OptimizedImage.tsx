import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
}

/**
 * OptimizedImage Component
 * Implements lazy loading with Intersection Observer for better performance
 * - Defers image loading until element is near viewport
 * - Shows subtle transition when image loads
 * - Reduces initial page load time
 */
export function OptimizedImage({
  src,
  alt,
  className = '',
  onLoad,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    // Use Intersection Observer to detect when image enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start loading image when it's 50px away from viewport
          setImageSrc(src);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '50px' }
    );

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc || ''}
      alt={alt}
      className={className}
      loading="lazy"
      onLoad={() => {
        setIsLoaded(true);
        onLoad?.();
      }}
      style={{
        opacity: isLoaded ? 1 : 0.6,
        transition: 'opacity 0.3s ease-in-out',
      }}
      referrerPolicy="no-referrer"
    />
  );
}
