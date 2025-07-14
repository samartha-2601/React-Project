// src/pages/Blogs.js
import { Link } from "react-router-dom";
import "./Blogs.css";

const blogData = [
  {
    id: 1,
    title: "Blog One",
    author: "Author A",
    preview: "This is the first blog...",
    image: "/images/logo.jpg",
    content: "Full content for blog one.",
  },
  {
    id: 2,
    title: "Blog Two",
    author: "Author B",
    preview: "This is the second blog...",
    image: "/images/logo.jpg",
    content: "Full content for blog two.",
  },
  {
    id: 3,
    title: "Blog Three",
    author: "Author C",
    preview: "This is the third blog...",
    image: "/images/logo.jpg",
    content: "Full content for blog three.",
  },
];

function Blogs() {
  return (
    <div className="blogs">
      {blogData.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <img src={blog.image} alt={blog.title} />
          <h3>{blog.title}</h3>
          <p>{blog.author}</p>
          <p>{blog.preview}</p>
          <Link to={`/blog/${blog.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
