import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
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

  return (
    <div className="w-full grid gap-4 grid-cols-12 pt-20">
      <div className="col-span-8 h-full">
        <h1 className="my-6 font-bold text-4xl">{post?.title}</h1>
        <div className=" mx-auto mt-8">
          {post && <Output style={style} data={JSON.parse(post?.content)} />}
        </div>
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

          <div className="mt-8 flex items-center justify-center flex-col">
            <div classcName="w-24 rounded-full border-2 p-2">
              <img
                src="https://placeimg.com/192/192/people"
                className="rounded-full w-24"
              />
            </div>
            <h2 className="mt-3 font-bold text-xl">Mukul Rajpoot</h2>
            <h2 className="text-gray-400">414 followers</h2>

            <div className="flex items-center mt-3">
              <button className="text-xs font-bold border border-blue-300 btn btn-ghost hover:bg-blue-100 btn-sm rounded-full">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
