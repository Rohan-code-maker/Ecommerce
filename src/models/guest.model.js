import mongoose,{Schema} from "mongoose";

const guestSchema = new Schema({
    userAgent:{
        type:String,
        required: true
    },
    ip:{
        type:String,
        required: true
    },
    token:{
        type: String,
        required: true,
        unique: true
    }
},{timestamps:true});

export const Guest = mongoose.model("Guest",guestSchema);