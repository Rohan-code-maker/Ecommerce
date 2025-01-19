import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
        required: true,
        index:true
    },
    description:{
        type:String,
        required: true,
        index:true
    },
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required:true
    },
    garmentType:{
        type: String,
        required: true
    },
    care:{
        type: String,
        required: true
    },
    specification:[
        {
            key:{
                type: String,
                required: true
            },
            value:{
                type: String,
                required: true
            }
        }
    ],
    uploadedBy:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},{timestamps:true})

export const Product = mongoose.model("Product",productSchema)