// src/pages/BlogDetail.js
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./BlogDetail.css";

const blogData = [
  {
    id: 1,
    title: "Blog One",
    author: "Author A",
    image: "/images/logo.jpg",
    content: "Full content for blog one.",
  },
  {
    id: 2,
    title: "Blog Two",
    author: "Author B",
    image: "/images/logo.jpg",
    content: "Full content for blog two.",
  },
  {
    id: 3,
    title: "Blog Three",
    author: "Author C",
    image: "/images/logo.jpg",
    content: "Full content for blog three.",
  },
];

function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  };

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="blog-detail">
      <h2>{blog.title}</h2>
      <p>By {blog.author}</p>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.content}</p>

      <div className="comments-section">
        <h3>Comments</h3>
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add your comment..."
          ></textarea>
          <button type="submit">Post Comment</button>
        </form>
        <div className="comment-list">
          {comments.map((comment, index) => (
            <p key={index} className="comment-item">
              {comment}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
