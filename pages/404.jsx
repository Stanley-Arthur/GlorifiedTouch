'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <h1 className="text-[10rem] font-extrabold tracking-widest mb-8 select-none">404</h1>
      <p className="text-2xl md:text-3xl mb-4 text-center max-w-lg">
        Sorry, the page you&apos;re looking for cannot be found.
      </p>
      <p className="mb-8 text-gray-400 text-center max-w-md">
        It might have been moved, deleted, or you may have mistyped the URL.
      </p>
      <Link
        href="/"
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition"
      >
        Go Back Home
      </Link>
    </main>
  );
}
