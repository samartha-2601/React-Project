import React, { useState } from "react";
import "./CreateBlog.css";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    image: null,
    body: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can handle the form submission logic here.
  };

  return (
    <div className="create-blog-container">
      <h2>Create New Blog</h2>
      <form onSubmit={handleSubmit} className="create-blog-form">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <input type="file" name="image" onChange={handleChange} required />
        <textarea
          name="body"
          placeholder="Blog Body"
          value={formData.body}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export { CreateBlog };
