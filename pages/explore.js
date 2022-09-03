import React, { useEffect, useState } from 'react';
import PostCard from '../components/card/postCard';
import { getAllPost } from '../services/api';

const Explore = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await getAllPost();
        setPosts(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);

  return (
    <div className="w-full grid gap-4 grid-cols-12 pt-20">
      <div className="col-span-8 h-full">
        {posts.length > 0 &&
          posts.map((e) => <PostCard key={e._id} data={e} />)}
      </div>
      <div className="col-span-4 h-full">
        <div className="sticky top-24 bg-white p-8 rounded-lg">
          <button className="text-xs font-bold border bg-blue-300 btn btn-ghost w-full rounded-full">
            Write your Own Blog
          </button>
          <input
            className="w-full rounded-full input input-bordered mt-8"
            placeholder="Search"
          />

          <h2 className="mt-4 uppercase text-sm font-bold">Top BlogPost</h2>

          {/* <div className="mt-8 flex items-center justify-center flex-col">
                    <div classcName="w-24 rounded-full border-2 p-2">
                        <img src="https://placeimg.com/192/192/people" className='rounded-full w-24' />
                    </div>
                    <h2 className='mt-3 font-bold text-xl'>Mukul Rajpoot</h2>
                    <h2 className='text-gray-400'>414 followers</h2>

                    <div className='flex items-center mt-3'>
                        <button className='text-xs font-bold border border-blue-300 btn btn-ghost hover:bg-blue-100 btn-sm rounded-full'>Follow</button>
                    </div>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default Explore;
