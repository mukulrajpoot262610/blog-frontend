import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useState } from 'react';

export default function ExploreSidePanel() {
  const router = useRouter();
  const query = router.query.search;
  const [key, setKey] = useState();

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

      <h2 className="mt-4 text-sm font-bold uppercase">Top BlogPost</h2>
    </div>
  );
}
