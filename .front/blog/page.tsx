'use client';

import { useState, useEffect } from 'react';
import BlogHeader from './components/BlogHeader';
import PostGrid from './components/PostGrid';
import LoadingSpinner from './components/LoadingSpinner';
import EmptyState from './components/EmptyState';

// Interfejs dla postów bloga
// Zmień nazwę interfejsu na tę samą, co w PostGrid.tsx
interface BlogPost {
  node: {
    id: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    date?: string | null;
    author?: string | null;
    imageUrl?: string | null;
  };
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Tutaj będzie kod do pobierania postów z nowego źródła danych
        // Na razie ustawiamy przykładowe dane
        const mockPosts = [
          {
            node: {
              id: '1',
              title: 'Przykładowy post 1',
              slug: 'przykladowy-post-1',
              excerpt: 'To jest przykładowy post po usunięciu Tina CMS',
              date: new Date().toISOString(),
              author: 'Admin',
              imageUrl: '/images/hero.webp'
            }
          },
          {
            node: {
              id: '2',
              title: 'Przykładowy post 2',
              slug: 'przykladowy-post-2',
              excerpt: 'To jest drugi przykładowy post po usunięciu Tina CMS',
              date: new Date().toISOString(),
              author: 'Admin',
              imageUrl: '/images/faq.webp'
            }
          }
        ];
        
        setPosts(mockPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen py-16 md:py-24 bg-[var(--background-base)]">
      <div className="container mx-auto px-4">
        <BlogHeader 
          title="Blog" 
          description="Najnowsze artykuły, porady i informacje z rynku nieruchomości" 
        />

        {loading ? (
          <LoadingSpinner />
        ) : posts.length === 0 ? (
          <EmptyState message="Brak artykułów do wyświetlenia. Zapraszamy wkrótce!" />
        ) : (
          <PostGrid posts={posts} />
        )}
      </div>
    </main>
  );
}