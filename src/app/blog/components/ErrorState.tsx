'use client';

import BackToLink from './BackToLink';

interface ErrorStateProps {
  message: string;
}

export default function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="text-center py-20">
      <h1 className="text-2xl font-bold text-[var(--text-black)] mb-4">
        {message}
      </h1>
      <BackToLink />
    </div>
  );
}