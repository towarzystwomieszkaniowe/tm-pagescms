'use client';

import Link from 'next/link';

interface BackToLinkProps {
  className?: string;
}

export default function BackToLink({ className = '' }: BackToLinkProps) {
  return (
    <Link 
      href="/blog" 
      className={`inline-flex items-center text-[var(--button-primary)] hover:underline ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Wróć do bloga
    </Link>
  );
}