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
  console.log('Rendering BlogPage component');
  
  // Pobieranie postów po stronie serwera
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'coverImageUrl',
    'excerpt',
  ]);
  
  console.log('Retrieved posts:', allPosts.length);
  
  // Mapowanie danych z Pages CMS do formatu oczekiwanego przez komponenty
  const posts: BlogPost[] = allPosts
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .map(post => {
      console.log('Processing post:', post.slug);
      return {
        node: {
          id: post.slug,
          title: post.title || 'Untitled',
          slug: post.slug,
          excerpt: post.excerpt || null,
          date: post.date || new Date().toISOString(),
          author: post.author?.name || 'Admin',
          imageUrl: post.effectiveCoverImage || null
        }
      };
    });

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
            <p className="mt-4 text-sm text-gray-500">
              Sprawdź czy folder _posts zawiera pliki markdown z postami.
            </p>
          </div>
        ) : (
          <PostGrid posts={posts} />
        )}
      </div>
    </main>
  );
}