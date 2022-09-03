import AllBlogs from '../components/sections/all';
import Header from '../components/sections/header';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <AllBlogs />
    </div>
  );
}
