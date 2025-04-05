'use client';

import BackToLink from './BackToLink';

export default function PostFooter() {
  return (
    <footer className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex justify-between items-center">
        <BackToLink />
      </div>
    </footer>
  );
}