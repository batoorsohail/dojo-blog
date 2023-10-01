import { useState, useEffect } from "react"
import BlogList from "../components/BlogList"

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  const handleDelete = ((id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  })

  useEffect(() => {
    fetch('http://localhost:3000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
  }, []);

  return (
    <section>
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />}
    </section>
  )
}

export default Home