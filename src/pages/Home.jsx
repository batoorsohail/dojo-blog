import { useState } from "react"
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

  return (
    <section>
      <BlogList blogs={blogs} title={"All Blogs"} />
      <BlogList blogs={blogs.filter((blog) => blog.author === "Luffy")} title={"Luffy's Blogs"} />
    </section>
  )
}

export default Home