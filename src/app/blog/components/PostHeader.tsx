'use client';

interface PostHeaderProps {
  title: string;
  date: string;
  author: string;
  excerpt?: string;
}

export default function PostHeader({ title, date, author, excerpt }: PostHeaderProps) {
  const formattedDate = new Date(date).toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="mb-8">
      <h1 
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-black)] mb-4"
        itemProp="headline"
      >
        {title}
      </h1>
      <div className="flex items-center text-[var(--text-light-gray)] mb-4">
        <time dateTime={date} itemProp="datePublished">
          {formattedDate}
        </time>
        <span className="mx-2">•</span>
        <span itemProp="author">{author}</span>
      </div>
      {excerpt && (
        <p className="text-xl text-[var(--text-gray)] italic" itemProp="description">
          {excerpt}
        </p>
      )}
    </header>
  );
}