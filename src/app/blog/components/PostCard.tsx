'use client';

import Link from 'next/link';
import Image from 'next/image';

interface PostCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    author: string;
    imageUrl?: string;
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`} 
      key={post.id}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-48 w-full bg-[var(--background-secondary)]">
        {post.imageUrl ? (
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[var(--text-light-gray)]">
              Brak zdjęcia
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-[var(--text-light-gray)] mb-3">
          <span>{new Date(post.date).toLocaleDateString('pl-PL')}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        <h2 className="text-xl font-semibold text-[var(--text-black)] mb-2 group-hover:text-[var(--button-primary)] transition-colors">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="text-[var(--text-gray)] line-clamp-3">
            {post.excerpt}
          </p>
        )}
        <div className="mt-4 text-[var(--button-primary)] font-medium flex items-center">
          Czytaj więcej
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}