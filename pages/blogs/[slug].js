import { formatDistance } from 'date-fns';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BlogSidePanel from '../../components/layout/BlogSidePanel';
import { getSinglePost } from '../../services/api';
let Output = dynamic(() => import('editorjs-react-renderer'), { ssr: false });

const Blog = () => {
  const [post, setPost] = useState();

  const router = useRouter();
  const slug = router.query.slug;

  const style = {
    header: {
      h1: {
        fontSize: '2.4rem',
        fontWeight: '600',
        marginBottom: '0.5rem',
      },
      h2: {
        fontSize: '2.2rem',
        marginBottom: '0.5rem',
      },
      h3: {
        fontSize: '2rem',
        marginBottom: '0.5rem',
      },
      h4: {
        fontSize: '1.8rem',
        marginBottom: '0.5rem',
      },
      h5: {
        fontSize: '1.5rem',
        marginBottom: '0.5rem',
      },
      h6: {
        fontSize: '1.2rem',
        marginBottom: '0.5rem',
      },
    },
    paragraph: {
      fontSize: '1.1rem',
      margin: '1rem 0px',
    },
    list: {
      listItem: {
        fontSize: '1.1rem',
        marginLeft: '1rem',
        listStyle: 'disc',
      },
    },
    image: {
      img: {},
      figure: {
        backgroundColor: 'black',
      },
      figcaption: {
        display: 'none',
      },
    },
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await getSinglePost(slug);
        setPost(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, [slug]);

  console.log(post);

  const date =
    (post?.createdAt &&
      formatDistance(new Date(Date.now()), new Date(post?.createdAt))) ||
    'N/A';

  return (
    <div className="grid w-full grid-cols-12 gap-4 pt-20">
      <div className="h-full col-span-8 pt-4">
        <div className="aspect-h-9 aspect-w-16">
          <img
            alt="blog"
            src={`${post?.cover || 'https://dummyimage.com/104x104'}`}
            className="block h-full rounded-xl"
          />
        </div>
        <h1 className="my-6 text-4xl font-bold">{post?.title}</h1>
        {post?.subtitle && (
          <p className="text-lg font-light">{post.subtitle}</p>
        )}
        <p className="text-gray-400 text-xs font-light tracking-widest mt-0.5">
          {date}
          {' ago'}
        </p>
        <div className="mx-auto mt-8 ">
          {post && <Output style={style} data={JSON.parse(post?.content)} />}
        </div>
      </div>
      <div className="h-full col-span-4">
        <BlogSidePanel author={post?.author} />
      </div>
    </div>
  );
};

export default Blog;
