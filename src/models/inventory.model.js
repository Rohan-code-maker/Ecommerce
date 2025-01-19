import mongoose,{Schema} from "mongoose";

const inventorySchema = new Schema({
    produxtId:{
        type: Schema.Types.ObjectId, //reference to product model
        ref:"Product",
        required: true
    },
    supplierId:{
        type: Schema.Types.ObjectId, //reference to supplier model
        ref:"Supplier",
        required: true
    },
    quantity:{
        type: Number,
        required: true
    }
},{timestamps:true})

export const Inventory = mongoose.model("Inventory",inventorySchema)