import React, { useEffect, useState } from 'react';
import { getLikedArticle } from '../../services/api';
import PostCard from '../card/postCard';

const AllBlogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await getLikedArticle();
        setPosts(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);

  return (
    <div>
      <hr />
      <h2 className="mt-6 mb-2 uppercase font-bold">
        Trending Stories (Sorted by Most Liked)
      </h2>
      <hr />
      <div className="grid grid-cols-2 gap-6">
        {posts?.length > 0 &&
          posts.map((e) => <PostCard key={e._id} data={e} />)}
      </div>
    </div>
  );
};

export default AllBlogs;
