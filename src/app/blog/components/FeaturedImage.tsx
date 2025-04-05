'use client';

import Image from 'next/image';

interface FeaturedImageProps {
  imageUrl: string;
  alt: string;
}

export default function FeaturedImage({ imageUrl, alt }: FeaturedImageProps) {
  return (
    <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}