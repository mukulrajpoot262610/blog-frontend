import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PostCard from '../components/card/postCard';
import { seacrh } from '../services/api';

const Search = () => {
  const router = useRouter();
  const query = router.query.search;
  const [key, setKey] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await seacrh({ title: query });
        setPosts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?search=${key}`);
  };

  return (
    <div className="w-full grid gap-4 grid-cols-12 pt-24">
      <div className="col-span-8 h-full">
        <h2 className="text-5xl font-bold">Results for {query}</h2>
        {posts.length > 0 &&
          posts.map((e) => <PostCard key={e._id} data={e} />)}
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
