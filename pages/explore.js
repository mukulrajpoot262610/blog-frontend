import React, { useEffect, useState } from 'react';
import PostCard from '../components/card/postCard';
import ExploreSidePanel from '../components/layout/ExploreSidePanel';
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
    <div className="grid w-full grid-cols-12 gap-4 pt-20">
      <div className="h-full col-span-8">
        {posts.length > 0 &&
          posts.map((e) => <PostCard key={e._id} data={e} />)}
      </div>
      <div className="h-full col-span-4">
        <ExploreSidePanel />
      </div>
    </div>
  );
};

export default Explore;
