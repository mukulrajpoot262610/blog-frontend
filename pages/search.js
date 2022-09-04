import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Search = () => {
  const router = useRouter();
  const query = router.query.search;
  const [key, setKey] = useState();

  console.log(router.query);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?search=${key}`);
  };

  return (
    <div className="w-full grid gap-4 grid-cols-12 pt-24">
      <div className="col-span-8 h-full">
        {/* {posts.length > 0 &&
                    posts.map((e) => <PostCard key={e._id} data={e} />)} */}
        <h2 className="text-5xl font-bold">Results for {query}</h2>
      </div>
      <div className="col-span-4 h-full">
        <div className="sticky top-24 bg-white p-8 rounded-lg">
          <button className="text-xs font-bold border bg-blue-300 btn btn-ghost w-full rounded-full">
            Write your Own Blog
          </button>
          <form onSubmit={handleSubmit}>
            <input
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="w-full rounded-full input input-bordered mt-8"
              placeholder="Search"
            />
          </form>

          <h2 className="mt-4 uppercase text-sm font-bold">Top BlogPost</h2>
        </div>
      </div>
    </div>
  );
};

export default Search;
