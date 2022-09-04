import Router from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { updateProfile } from '../../services/api';

export default function Edit({ profile }) {
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState(profile?.about || '');
  const [linkedin, setLinkedin] = useState(profile?.linkedin || '');
  const [github, setGithub] = useState(profile?.github || '');

  const { handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    if (!user) return;
    setLoading(true);
    try {
      await updateProfile({ ...data, about });
      toast.success('profile updated');
      // Router.reload();
    } catch (err) {
      toast.error(err?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 custom-overlay">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-xs font-bold text-blue-500 uppercase">
            about
          </label>
          <textarea
            className="w-full h-40 resize-none bg-base-200 textarea"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block text-xs font-bold text-blue-500 uppercase">
            github username
          </label>
          <input
            type="text"
            {...register('github')}
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            className="w-full input input-bordered"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-xs font-bold text-blue-500 uppercase">
            linkedin username
          </label>
          <input
            type="text"
            {...register('linkedin')}
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="w-full input input-bordered"
          />
        </div>
        {/* <div className="space-y-2">
            <label className="block text-xs font-bold text-blue-500 uppercase">
              hashnode username
            </label>
            <input
              type="text"
              {...register('hashnode')}
              value={hashnode}
              onChange={(e) => setHashnode(e.target.hashnode)}
              className="w-full input input-bordered"
            />
          </div> */}
        <div className="flex justify-end">
          <button className="btn btn-primary">
            {loading ? 'updating' : 'update'}
          </button>
        </div>
      </form>
    </div>
  );
}
