import Link from 'next/link';
import React from 'react';

export default function BlogSidePanel({ author }) {
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

      <div className="flex flex-col items-center justify-center mt-8">
        <div classcName="w-24 rounded-full border-2 p-2">
          <img
            alt="blog"
            src={`${author?.cover || 'https://dummyimage.com/104x104'}`}
            className="w-24 h-24 rounded-full"
          />
        </div>
        <h2 className="mt-3 text-xl font-bold">{author?.name}</h2>
        <h2 className="text-gray-400">414 followers</h2>

        <div className="flex items-center mt-3">
          <button className="text-xs font-bold border border-blue-300 rounded-full btn btn-ghost hover:bg-blue-100 btn-sm">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
