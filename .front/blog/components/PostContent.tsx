'use client';

interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <div 
      className="prose prose-lg max-w-none text-[var(--text-gray)]" 
      itemProp="articleBody"
    >
      {content && (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  );
}