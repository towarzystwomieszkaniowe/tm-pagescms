'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorState from '../components/ErrorState';
import BackToLink from '../components/BackToLink';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Tymczasowe rozwiązanie z mockowymi danymi
        const mockPosts = [
          {
            node: {
              id: '1',
              title: 'Przykładowy post 1',
              slug: 'przykladowy-post-1',
              excerpt: 'To jest przykładowy post po usunięciu Tina CMS',
              date: new Date().toISOString(),
              author: 'Admin',
              imageUrl: '/images/hero.webp',
              body: '<p>To jest pełna treść przykładowego posta 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p><p>Drugi paragraf treści posta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>'
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
              imageUrl: '/images/faq.webp',
              body: '<p>To jest pełna treść przykładowego posta 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p><p>Drugi paragraf treści posta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>'
            }
          }
        ];
        
        // Znajdź post o odpowiednim slugu
        const foundPost = mockPosts.find(post => post.node.slug === slug);
        
        if (foundPost) {
          setPost(foundPost.node);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen py-16 md:py-24 bg-[var(--background-base)]">
        <div className="container mx-auto px-4">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen py-16 md:py-24 bg-[var(--background-base)]">
        <div className="container mx-auto px-4">
          <ErrorState message={error || 'Post not found'} />
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="min-h-screen py-16 md:py-24 bg-[var(--background-base)]">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/BlogPosting">
          {/* Back to blog link */}
          <div className="mb-8">
            <BackToLink />
          </div>

          {/* Featured image */}
          {post.imageUrl && (
            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Post header */}
          <header className="mb-8">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-black)] mb-4"
              itemProp="headline"
            >
              {post.title}
            </h1>
            <div className="flex items-center text-[var(--text-light-gray)] mb-4">
              <time dateTime={post.date} itemProp="datePublished">
                {formattedDate}
              </time>
              <span className="mx-2">•</span>
              <span itemProp="author">{post.author}</span>
            </div>
            {post.excerpt && (
              <p className="text-xl text-[var(--text-gray)] italic" itemProp="description">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Post content */}
          <div 
            className="prose prose-lg max-w-none text-[var(--text-gray)]" 
            itemProp="articleBody"
          >
            {post.body && (
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
            )}
            {!post.body && post.excerpt && (
              <div>
                <h2 className="text-2xl font-bold mb-4">To jest treść</h2>
                <p>{post.excerpt}</p>
              </div>
            )}
          </div>

          {/* Post footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <BackToLink />
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
}