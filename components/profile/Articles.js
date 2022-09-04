import React from 'react';
import PostCard from '../card/postCard';

export default function Articles({ articles }) {
  return (
    <div className="space-y-2">
      {articles.length > 0 &&
        articles.map((e) => <PostCard key={e._id} data={e} />)}
    </div>
  );
}
