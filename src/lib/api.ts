import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// Path to the posts directory
const postsDirectory = join(process.cwd(), '_posts');

// Define Post type to match the structure in Pages CMS
export type Post = {
  slug: string;
  title: string;
  date: string;
  content?: string;
  excerpt?: string;
  coverImage?: string;
  author?: {
    name?: string;
    picture?: string;
  };
  ogImage?: {
    url?: string;
  };
  [key: string]: any;
};

export function getPostSlugs() {
  try {
    return fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

export function getPostBySlug(slug: string, fields: string[] = []): Post | null {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    console.error(`Post file not found: ${fullPath}`);
    return null;
  }
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const items: Partial<Post> = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = realSlug;
      }
      if (field === 'content') {
        items[field] = content;
      }

      if (typeof data[field] !== 'undefined') {
        items[field] = data[field];
      }
    });

    // Always include slug if not already included
    if (!items.slug) {
      items.slug = realSlug;
    }

    return items as Post;
  } catch (error) {
    console.error(`Error processing post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(fields: string[] = []): Post[] {
  const slugs = getPostSlugs();
  console.log('Found post slugs:', slugs);
  
  // Always include slug in the fields
  if (!fields.includes('slug')) {
    fields.push('slug');
  }
  
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post): post is Post => post !== null) // Type guard to filter out null posts
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  
  console.log(`Processed ${posts.length} posts`);
  return posts;
}