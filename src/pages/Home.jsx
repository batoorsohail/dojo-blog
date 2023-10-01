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

  const [name, setName] = useState("James")

  const handleDelete = ((id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  })

  useEffect(() => {
    console.log("use effect ran")
    console.log(name)
  }, [name]);

  return (
    <section>
      <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />
      <button onClick={() => setName("Jack")}>Change name</button>
      <p>{name}</p>
    </section>
  )
}

export default Home