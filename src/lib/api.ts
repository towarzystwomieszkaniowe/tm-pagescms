import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// Zmiana ścieżki na _posts, gdzie aktualnie znajdują się Twoje posty
const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  try {
    return fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    console.error(`Post file not found: ${fullPath}`);
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string | any;
  };

  const items: Items = {};

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

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  console.log('Found post slugs:', slugs); // Dodajemy log dla debugowania
  
  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug, fields);
      if (!post) {
        console.error(`Failed to get post for slug: ${slug}`);
      }
      return post;
    })
    .filter((post) => post !== null) // Filter out null posts
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  
  console.log(`Processed ${posts.length} posts`); // Dodajemy log dla debugowania
  return posts;
}