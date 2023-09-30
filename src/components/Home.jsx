import { useState } from "react"

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
    <section className="flex flex-col items-center mt-20 gap-10">
      {blogs.map((blog) => (
        <div key={blog.id} className="px-5 py-3 w-2/3 border-b-white hover:shadow-lg">
          <h2 className="text-red-500 font-bold text-2xl font-mono">{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </section>
  )
}

export default Home