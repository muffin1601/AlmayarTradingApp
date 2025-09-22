const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    origin: { type: String, required: true },
    loadingPort: { type: String, required: true },
    quantity: { type: Number, required: true },
    paymentTerms: { type: String, required: true },

    specifications: {
      type: {
        type: String, 
        required: true,
      },
      oilContentMin: { type: Number, required: true },
      moistureContentMax: { type: Number, required: true },
      impuritiesMax: { type: Number, required: true },
      proteinContentMin: { type: Number, required: true },
      fiberContentApprox: { type: Number },
      color: { type: String },
    },

    packaging: {
      bagsKg: { type: Number },
      bagType: { type: String },
      bulkAvailable: { type: Boolean, default: false },
    },

    deliveryTerms: { type: String },
    shelfLifeMonths: { type: Number },
    certifications: [{ type: String }],
    otherConditions: { type: String },
    price: { type: Number },
    image: { type: String },
  },
  { timestamps: true }
);

// CommonJS export
module.exports = mongoose.models?.Product || mongoose.model("Product", ProductSchema);
