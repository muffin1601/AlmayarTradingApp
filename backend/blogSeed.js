
const mongoose = require("mongoose");
const Blog = require("./models/Blog");
const { blogs } = require("./data/blogs"); 
require("dotenv").config();


const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/tradingDB";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

const seedBlogs = async () => {
  try {
 
    await Blog.deleteMany({});
    console.log("Existing blogs removed");

  
    await Blog.insertMany(blogs);
    console.log("Blogs seeded successfully");

    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
};

seedBlogs();
