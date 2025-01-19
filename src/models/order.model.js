import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    totalAmount: {
      type: Number,
      required: true,
    },
    shippingAddressId: {
      type: Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered"],
      default: "Pending",
    },
    paymentMethodId: {
      type: Schema.Types.ObjectId,
      ref: "PaymentMethod",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    cancellationReason: {
      type: String,
    },
    statusHistory: [
      {
        status: {
          type: String,
          required: true,
        },
        date:{
            type: Date,
            required: true,
        }
      },
    ],
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
