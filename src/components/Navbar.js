// src/components/Navbar.js
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/BlogManagement">Manage Blogs</Link>
    </nav>
  );
}

export default Navbar;
