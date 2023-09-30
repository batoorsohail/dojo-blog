const BlogList = ({blogs, title, handleDelete}) => {
  return (
    <section className="flex flex-col justify-center items-center mt-20 gap-5 m-10">
      <h2 className="text-3xl font-bold">{title}</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="px-5 py-3 w-2/3 border-b-white hover:shadow-lg">
          <h2 className="text-red-500 font-bold text-2xl font-mono">{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)} className="px-2 py-1 bg-red-400 text-white">Delete Blog</button>
        </div>
      ))}
    </section>
  )
}

export default BlogList