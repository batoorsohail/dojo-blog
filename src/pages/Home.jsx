import { useState, useEffect } from "react"
import BlogList from "../components/BlogList"

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = ((id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  })

  useEffect(() => {
    fetch('http://localhost:3000/blogs')
      .then(res => {
        if (!res.ok) {
          throw Error ('Could not fetch the data for that resource')
        }
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      })
  }, []);

  return (
    <section>
      {error && <p className="text-red-500 text-lg">{error}</p>}
      {isPending && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />}
    </section>
  )
}

export default Home