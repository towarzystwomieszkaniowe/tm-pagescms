'use client';

interface BlogHeaderProps {
  title: string;
  description: string;
}

export default function BlogHeader({ title, description }: BlogHeaderProps) {
  return (
    <header className="mb-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-black)] mb-4">
        {title}
      </h1>
      <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
      <p className="text-lg text-[var(--text-gray)] max-w-2xl mx-auto">
        {description}
      </p>
    </header>
  );
}