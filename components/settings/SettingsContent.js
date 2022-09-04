import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../redux/authSlice';
import { updateAvatar, updatePassword } from '../../services/api';
import uploadPic from '../../utils/uploadPic';

export default function SettingsContent() {
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [image, setImage] = useState();
  const [media, setMedia] = useState();
  const [imageLoading, setImageLoading] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const changePassword = async (data) => {
    setLoading(true);

    try {
      await updatePassword(data);
      toast.success('Password changed');
    } catch (err) {
      // console.log(err);
      toast.error(err?.response?.data?.msg);
    } finally {
      setOldPassword('');
      setNewPassword('');
      setLoading(false);
    }
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    if (!image) {
      return toast.error('Please add a image');
    }
    setImageLoading(true);

    try {
      const { data } = await updateAvatar({
        id: user._id,
        url: await uploadPic(media),
      });

      dispatch(setAuth(data));
      toast.success('Image uploaded. Continue Editing');
      setImageLoading(false);
    } catch (err) {
      console.log(err);
      setImageLoading(false);
      toast.error('Error in Upload');
    }
  };

  const captureImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setMedia(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
    };
  };

  return (
    <>
      <section className="col-span-12 lg:col-span-9 text-base-content place-content-center">
        <div className="w-full p-8 space-y-8 bg-blue-50 rounded-xl">
          <section className="space-y-1">
            <h2 className="text-sm font-bold uppercase text-accent">
              Change Password
            </h2>
            <form onSubmit={handleSubmit(changePassword)} className="space-y-2">
              <div className="space-y-1">
                <label htmlFor="" className="text-sm text-accent">
                  Password
                </label>
                <br />
                <input
                  type="text"
                  value={oldPassword}
                  {...register('oldPassword', {
                    required: true,
                  })}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="input input-bordered"
                  placeholder="old password"
                />
                <br />
                <label className="">
                  {errors.oldPassword ? (
                    <span className="text-red-500 label-text-alt">
                      Old password is required!
                    </span>
                  ) : (
                    <span className="label-text-alt"></span>
                  )}
                </label>
              </div>
              <div className="space-y-1">
                <label htmlFor="" className="text-sm text-accent">
                  New Password
                </label>
                <br />
                <input
                  type="text"
                  {...register('newPassword', {
                    required: true,
                  })}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="input input-bordered"
                  placeholder="new password"
                />
                <br />
                <label className="">
                  {errors.newPassword ? (
                    <span className="text-red-500 label-text-alt">
                      New password is required!
                    </span>
                  ) : (
                    <span className="label-text-alt"></span>
                  )}
                </label>
              </div>
              <button
                type="submit"
                className={`btn ${
                  loading
                    ? 'btn-disabled'
                    : 'bg-blue-500 hover:bg-blue-400 border-0'
                }`}
              >
                {loading ? 'Updating' : 'Update Password'}
              </button>

              <section className="space-y-2">
                <h2 className="block text-xs font-bold text-blue-500 uppercase">
                  Change Avatar
                </h2>
                <label className="flex flex-col items-center w-full p-1 border rounded-lg cursor-pointer lg:w-1/2 text-blue border-blue">
                  {image ? (
                    <img
                      src={image}
                      alt=""
                      className="rounded-lg aspect-w-1 max-w-xs"
                    />
                  ) : (
                    <div className="flex flex-col items-center m-4">
                      <span className="text-5xl">+</span>
                      <span className="text-xs">Select a file</span>
                    </div>
                  )}
                  <input
                    type="file"
                    onChange={captureImage}
                    className="hidden"
                  />
                </label>
                <button
                  onClick={uploadImage}
                  className={`${
                    imageLoading ? 'loading' : ''
                  } btn bg-blue-500 hover:bg-blue-400 border-0 w-fit mt-4`}
                >
                  Upload
                </button>
              </section>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}
