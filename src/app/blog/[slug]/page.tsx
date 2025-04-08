import Image from 'next/image';
import { notFound } from 'next/navigation';
import BackToLink from '../components/BackToLink';
import { getPostBySlug } from '../../../lib/api';
import markdownToHtml from '../../../lib/markdownToHtml';

// Poprawna definicja typu PageProps zgodna z wymaganiami Next.js
type PageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;

  // Pobieranie posta po stronie serwera
  const postData = getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
    'excerpt',
    'ogImage'
  ]);

  if (!postData) {
    return notFound();
  }

  // Konwersja markdown na HTML
  const htmlContent = await markdownToHtml(postData.content || '');

  // Mapowanie danych do formatu oczekiwanego przez komponent
  const post = {
    id: postData.slug,
    title: postData.title,
    slug: postData.slug,
    excerpt: postData.excerpt || null,
    date: postData.date || new Date().toISOString(),
    author: postData.author?.name || 'Admin',
    imageUrl: postData.coverImage || null,
    body: htmlContent
  };

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