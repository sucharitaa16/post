import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-blue-900 text-white">
      <Link to="/view">Posts</Link>
      <Link to="/">Create Post</Link>
    </nav>
  );
}

export default Navbar;