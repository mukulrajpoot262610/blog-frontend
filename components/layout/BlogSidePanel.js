import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useState } from 'react';

export default function BlogSidePanel({ author }) {
  const router = useRouter();
  const query = router.query.search;
  const [key, setKey] = useState();

  console.log(router.query);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?search=${key}`);
  };

  return (
    <div className="sticky p-8 bg-white rounded-lg top-24">
      <Link href="/create">
        <a className="w-full text-xs font-bold bg-blue-300 border rounded-full btn btn-ghost">
          Write your Own Blog
        </a>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="w-full rounded-full input input-bordered mt-8"
          placeholder="Search"
        />
      </form>

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
