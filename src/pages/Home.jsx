import BlogList from '../components/BlogList';
import useFetch from '../components/useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:3000/blogs');

  return (
    <section>
      {error && <p className="text-red-500 text-lg">{error}</p>}
      {isPending && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </section>
  );
};

export default Home;
