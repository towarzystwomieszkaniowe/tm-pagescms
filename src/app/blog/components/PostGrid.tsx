'use client';

import PostCard from './PostCard';

// Zmiana nazwy interfejsu, aby uniknąć konfliktu
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

interface PostGridProps {
  posts: BlogPost[];
}

export default function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard 
          key={post.node.id} 
          post={{
            id: post.node.id,
            title: post.node.title,
            slug: post.node.slug,
            excerpt: post.node.excerpt || '',  // Zapewniamy, że excerpt jest zawsze stringiem
            date: post.node.date || '',        // Zapewniamy, że date jest zawsze stringiem
            author: post.node.author || '',    // Zapewniamy, że author jest zawsze stringiem
            imageUrl: post.node.imageUrl || undefined  // Przekształcamy null na undefined
          }} 
        />
      ))}
    </div>
  );
}