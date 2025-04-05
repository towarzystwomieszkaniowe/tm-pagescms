import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// Ścieżka do katalogu z postami - zgodna z dokumentacją PagesCMS
const postsDirectory = join(process.cwd(), '_posts');

// Definicja typu Post zgodna ze strukturą w plikach markdown
export type Post = {
  slug: string;
  title: string;
  date: string;
  content?: string;
  excerpt?: string;
  coverImage?: string;
  coverImageUrl?: string;
  effectiveCoverImage?: string;
  author?: {
    name?: string;
    picture?: string;
  };
  ogImage?: {
    url?: string;
  };
  body?: string; // Dodane pole body dla zawartości HTML
  [key: string]: any;
};

export function getPostSlugs() {
  try {
    // Sprawdzamy, czy katalog istnieje przed próbą odczytu
    if (!fs.existsSync(postsDirectory)) {
      console.error(`Posts directory not found: ${postsDirectory}`);
      return [];
    }
    
    const slugs = fs.readdirSync(postsDirectory);
    console.log(`Found ${slugs.length} post files in ${postsDirectory}`);
    return slugs;
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

    // Konwersja zawartości Markdown na HTML (jeśli potrzebne)
    // W oryginalnym kodzie to było prawdopodobnie robione w innym miejscu

    const items: Partial<Post> = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = realSlug;
      }
      if (field === 'content') {
        items[field] = content;
      }
      if (field === 'body') {
        // Jeśli potrzebujesz przetworzonego HTML, możesz dodać tutaj konwersję
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
    
    // Handle the cover image logic - prefer URL if provided, otherwise use uploaded image
    if ((fields.includes('coverImage') || fields.includes('coverImageUrl') || fields.includes('effectiveCoverImage'))) {
      const coverImageUrl = data.coverImageUrl;
      const coverImage = data.coverImage;
      
      // Set the effective cover image based on what's available
      if (coverImageUrl && coverImageUrl.trim() !== '') {
        items.effectiveCoverImage = coverImageUrl;
      } else if (coverImage && coverImage.trim() !== '') {
        items.effectiveCoverImage = coverImage;
      } else {
        items.effectiveCoverImage = '/assets/blog/default/cover.jpg'; // Default image
      }
      
      // Include the original fields if requested
      if (fields.includes('coverImage')) {
        items.coverImage = data.coverImage;
      }
      if (fields.includes('coverImageUrl')) {
        items.coverImageUrl = data.coverImageUrl;
      }
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
  
  // Dodaj podstawowe pola, jeśli nie zostały określone
  const essentialFields = ['title', 'date', 'excerpt', 'coverImage', 'coverImageUrl'];
  essentialFields.forEach(field => {
    if (!fields.includes(field)) {
      fields.push(field);
    }
  });
  
  // Add effectiveCoverImage to fields if we're requesting either coverImage or coverImageUrl
  if ((fields.includes('coverImage') || fields.includes('coverImageUrl')) && 
      !fields.includes('effectiveCoverImage')) {
    fields.push('effectiveCoverImage');
  }
  
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post): post is Post => post !== null) // Type guard to filter out null posts
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  
  console.log(`Processed ${posts.length} posts`);
  return posts;
}