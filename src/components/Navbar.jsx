import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="px-40 py-5 flex justify-between items-center border-b">
    <h1 className="text-3xl font-bold text-red-500">Dojo Blog</h1>
    <ul className="flex justify-between items-center gap-10">
      <li>
        <Link to="/" className="text-lg hover:text-gray-500">Home</Link>
      </li>
      <li>
        <Link to="/create" className="text-lg hover:text-gray-500">New Blog</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
