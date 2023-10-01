import { useState, useEffect } from "react"
import BlogList from "../components/BlogList"

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const handleDelete = ((id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  })

  useEffect(() => {
    fetch('http://localhost:3000/blogss')
      .then(res => {
        if (!res.ok) {
          throw Error ('Could not fetch the data for that resource')
        }
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <section>
      {isPending && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />}
    </section>
  )
}

export default Home