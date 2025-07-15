import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BlogManagement.css";

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "First Blog" },
    { id: 2, title: "Second Blog" },
    { id: 3, title: "React Tips" },
  ]);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="blog-management-container">
      <button className="create-button" onClick={() => navigate("/CreateBlog")}>
        Create New Blog
      </button>
      <h2>Existing Blogs</h2>
      <table className="blogs-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.title}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete Blog
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogManagement;
