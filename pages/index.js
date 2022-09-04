import AllBlogs from '../components/sections/all';
import HashnodeArticle from '../components/sections/hackathon';
import Header from '../components/sections/header';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <HashnodeArticle />
      <AllBlogs />
    </div>
  );
}
