import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { HiOutlineEye, HiOutlinePhotograph } from 'react-icons/hi';
import { RiFootballLine } from 'react-icons/ri';
import { TbPencil } from 'react-icons/tb';
import slugify from 'slugify';
import { createPost } from '../services/api';
import uploadPic from '../utils/uploadPic';
const CustomEditor = dynamic(
  () => import('../components/editor/CustomEditor'),
  {
    ssr: false,
  }
);
let Output = dynamic(() => import('editorjs-react-renderer'), { ssr: false });

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const [url, setUrl] = useState('');
  const [image, setImage] = useState();
  const [imageLoading, setImageLoading] = useState(false);

  const captureImage = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
    };

    try {
      const uploadedPic = await uploadPic(file);
      setUrl(uploadedPic);
      toast.success('Image uploaded. Continue editing!');
      setImageLoading(false);
    } catch (err) {
      setImageLoading(false);
      toast.error('Error in Upload');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      return toast.error('Please add a title');
    }

    if (!content) {
      return toast.error('Please add some content');
    }

    setLoading(true);

    const slug = slugify(title);

    try {
      const { data } = await createPost({ title, content, slug, cover: url });
      toast.success('Posted Successfully');
      console.log(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="relative pt-24 min-h-screen w-9/12 mx-auto">
      <div className="flex gap-4 items-center">
        <label className="flex flex-col items-center p-1 rounded-lg cursor-pointer text-blue border-blue">
          {image ? (
            <img src={image} alt="preview" className="rounded-lg" />
          ) : (
            <div className="text-xs font-bold border border-blue-300 btn btn-ghost hover:bg-blue-50 btn-sm flex items-center gap-1">
              <HiOutlinePhotograph className="text-md" /> Add Cover
            </div>
          )}
          <input type="file" onChange={captureImage} className="hidden" />
        </label>
      </div>
      <div className="w-full my-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Article title..."
          className="text-5xl w-full outline-none"
        />
      </div>
      <div className="sticky top-20">
        <hr />
        <div className="py-2 flex items-center">
          <button
            className={`text-xs ${
              preview ? '' : 'bg-blue-100'
            } font-bold border btn btn-ghost hover:bg-blue-50 btn-sm flex items-center gap-1`}
            onClick={() => setPreview(false)}
          >
            <TbPencil className="text-md" /> Write
          </button>
          <button
            className={`text-xs ${
              preview ? 'bg-blue-100' : ''
            } font-bold border btn btn-ghost hover:bg-blue-50 btn-sm flex items-center gap-1`}
            onClick={() => setPreview(true)}
          >
            <HiOutlineEye className="text-md" /> Preview
          </button>
          <button
            className={`text-xs font-bold border btn btn-ghost hover:bg-blue-50 btn-sm flex items-center gap-1`}
          >
            <RiFootballLine className="text-md" /> Editor Guide
          </button>
        </div>

        <hr />
      </div>
      <div
        className={`${preview ? 'hidden' : 'block'} mx-auto w-11/12 lg:w-9/12`}
      >
        <CustomEditor setContent={setContent} content={content} />
      </div>

      <div
        className={`${
          preview ? 'block' : 'hidden'
        }  overflow-auto mt-4 mx-auto`}
      >
        <h1 className="text-5xl font-bold my-5">{title}</h1>
        <hr />
        <div className=" mx-auto mt-8">
          {content && <Output style={style} data={JSON.parse(content)} />}
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className={`${loading ? 'loading' : ''} btn btn-success`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
