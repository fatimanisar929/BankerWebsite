import React from "react";
import "./Blog.css";
import img1 from "../assets/10011.jpg";
import img2 from "../assets/10016.jpg";
import img3 from "../assets/10013.jpg";

const blogs = [
  {
    image: img1, // replace with your image paths
    title: "A Basic Guide to Starting a Franchise in the Philippines",
    author: "Ham Brook",
    date: "Jan 18, 2019",
    category: "News",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
  },
  {
    image: img2,
    title: "A Basic Guide to Starting a Franchise in the Philippines",
    author: "James Phelps",
    date: "Jan 18, 2019",
    category: "News",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
  },
  {
    image: img3,
    title: "A Basic Guide to Starting a Franchise in the Philippines",
    author: "James Phelps",
    date: "Jan 18, 2019",
    category: "News",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
  },
];

const Blog = () => {
  const handleClick = (e) => {
    e.preventDefault();

    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="blog-section">
      <div className="heading">
        <h1>Our Blog</h1>
      </div>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card " key={index}>
            <img src={blog.image} alt="Blog" />
            <h3>{blog.title}</h3>
            <p className="meta " onClick={handleClick}>
              <span>{blog.author}</span> &nbsp;·&nbsp; {blog.date} &nbsp;·&nbsp;
              <span className="news">{blog.category}</span>
            </p>
            <p className="content">{blog.content}</p>
            <p className="read-more" onClick={handleClick}>
              {" "}
              Continue Reading...
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
