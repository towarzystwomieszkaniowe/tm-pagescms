'use client';

interface EmptyStateProps {
  message: string;
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="text-center py-20">
      <p className="text-xl text-[var(--text-gray)]">
        {message}
      </p>
    </div>
  );
}