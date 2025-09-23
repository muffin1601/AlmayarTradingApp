const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  slug: {
    type: String,
    unique: true,
  },
  excerpt: {
    type: String,
  },
  description: {
    type: String, // full content of the blog
  },
  image: {
    type: String,
  },
  author: {
    type: String,
  },
  date: {
    type: Date,
  },
  categories: {
    type: [String], // array of categories
  },
  tags: {
    type: [String], // array of tags
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
