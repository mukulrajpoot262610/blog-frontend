import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import Profile from '../components/profile';
import { getProfile } from '../services/api';

export default function ProfilePage() {
  const [data, setData] = useState(null);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) return;
    const fetchData = async () => {
      try {
        const { data } = await getProfile();
        setData(data?.data || {});
        console.log({ data });
      } catch (err) {
        console.log(err);
        toast.error(err?.response?.data?.msg);
      }
    };
    fetchData();
  }, [user]);

  return (
    <div className="pb-10 mt-20">
      <Profile data={data} />
    </div>
  );
}
