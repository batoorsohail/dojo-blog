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
      title: 'JavaScript Best Practice', body: 'lorem ipsum...', author: 'Mihwak', id: 3
    },
  ])

  return (
    <section>
      <BlogList blogs={blogs} />
    </section>
  )
}

export default Home