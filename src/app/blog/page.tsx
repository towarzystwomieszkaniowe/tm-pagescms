import BlogHeader from './components/BlogHeader';
import PostGrid from './components/PostGrid';
import { getAllPosts } from '../../lib/api';

// Interfejs dla postów bloga
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

export default async function BlogPage() {
  // Pobieranie postów po stronie serwera
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);
  
  // Mapowanie danych z Pages CMS do formatu oczekiwanego przez komponenty
  const posts: BlogPost[] = allPosts.map(post => ({
    node: {
      id: post.slug,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || null,
      date: post.date || null,
      author: post.author?.name || null,
      imageUrl: post.coverImage || null
    }
  }));

  return (
    <main className="min-h-screen py-16 md:py-24 bg-[var(--background-base)]">
      <div className="container mx-auto px-4">
        <BlogHeader 
          title="Blog" 
          description="Najnowsze artykuły, porady i informacje z rynku nieruchomości" 
        />

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p>Brak artykułów do wyświetlenia. Zapraszamy wkrótce!</p>
          </div>
        ) : (
          <PostGrid posts={posts} />
        )}
      </div>
    </main>
  );
}