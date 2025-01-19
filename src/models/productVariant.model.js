import mongoose, { Schema } from "mongoose";

const productVariantSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    size: {
      type: String,
      required: [true, "Size is Required"],
      enum: ["S", "M", "L", "XL", "XXL"],
    },
    fit: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: [true, "Color is Required"],
    },
    mrp: {
      type: Number,
      required: [true, "Price is Required"],
      min: [0, "Price must be a Positive Number"],
    },
    stockQuantity: {
      type: Number,
      required: [true, "Stock Quantity is Required"],
      min: [0, "Quantity must be a Positive Number"],
    },
  },
  { timestamps: true }
);

export const ProductVariant = mongoose.model(
  "ProductVariant",
  productVariantSchema
);
