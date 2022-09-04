import Link from 'next/link';
import React from 'react';

export default function ExploreSidePanel() {
  return (
    <div className="sticky p-8 bg-white rounded-lg top-24">
      <Link href="/create">
        <a className="w-full text-xs font-bold bg-blue-300 border rounded-full btn btn-ghost">
          Write your Own Blog
        </a>
      </Link>
      <input
        className="w-full mt-8 rounded-full input input-bordered"
        placeholder="Search"
      />

      <h2 className="mt-4 text-sm font-bold uppercase">Top BlogPost</h2>
    </div>
  );
}
