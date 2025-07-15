// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import BlogManagement from "./pages/BlogManagement";
import { CreateBlog } from "./pages/CreateBlog";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/BlogManagement" element={<BlogManagement />} />
        <Route path="/CreateBlog" element={<CreateBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
