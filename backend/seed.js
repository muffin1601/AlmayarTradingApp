const mongoose = require("mongoose");
const productsData = require("./data/products");
require("dotenv").config(); // Load .env

const productSchema = new mongoose.Schema({
  name: String,
  origin: String,
  loadingPort: String,
  quantity: String,
  paymentTerms: String,
  specifications: String,
  packaging: String,
  deliveryTerms: String,
  shelfLife: String,
  certifications: String,
  otherConditions: String,
  image: String,
});

const Product = mongoose.model("Product", productSchema);

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "trading-app",
    });

    console.log("✅ Connected to MongoDB");

    await Product.deleteMany({});
    console.log("🗑️ Old products removed");

    await Product.insertMany(productsData);
    console.log("🌱 Products seeded successfully!");

    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  }
}

seedDB();
