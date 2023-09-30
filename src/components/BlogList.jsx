const BlogList = ({blogs}) => {
  return (
    <section className="flex flex-col justify-center items-center mt-20 gap-10">
      {blogs.map((blog) => (
        <div key={blog.id} className="px-5 py-3 w-2/3 border-b-white hover:shadow-lg">
          <h2 className="text-red-500 font-bold text-2xl font-mono">{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </section>
  )
}

export default BlogList