import mongoose,{Schema} from "mongoose";

const shippingOptionSchema = new Schema({
    optionName: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    deliveryTime: {
        type: String,
        required: true,
    },
},{timestamps:true});

export const ShippingOption = mongoose.model("ShippingOption",shippingOptionSchema);