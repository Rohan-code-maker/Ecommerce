import mongoose,{Schema} from "mongoose";

const refundSchema = new Schema({
    paymentId: {
        type: Schema.Types.ObjectId,
        ref: "Payment",
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    refundId: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
},{timestamps: true});

export const Refund = mongoose.model("Refund",refundSchema);