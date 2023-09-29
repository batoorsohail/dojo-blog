const Navbar = () => {
  return (
    <nav className="px-20 py-5 flex justify-between items-center border-b">
      <h1 className="text-3xl font-bold text-red-500">Dojo Blog</h1>
      <ul className="flex justify-between items-center gap-10">
        <li>
          <a href="/" className="text-lg hover:text-gray-500">Home</a>
        </li>
        <li>
          <a href="/newBlog" className="text-lg hover:text-gray-500">New Blog</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar