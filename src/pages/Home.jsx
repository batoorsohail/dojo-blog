import { useState, useEffect } from "react"
import BlogList from "../components/BlogList"

const Home = () => {
  
  const [blogs, setBlogs] = useState([
    {
      title: 'My First Blog', body: 'lorem ipsum...', author: 'Luffy', id: 1
    },
    {
      title: 'Web Dev Tools', body: 'lorem ipsum...', author: 'Zorro', id: 2
    },
    {
      title: 'King of Pirates', body: 'lorem ipsum...', author: 'Luffy', id: 3
    },
  ])

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
        console.log(data)
      })
  }, []);

  return (
    <section>
      <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />
    </section>
  )
}

export default Home