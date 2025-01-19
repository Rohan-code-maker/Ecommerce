import mongoose,{Schema} from 'mongoose'

const cartItemSchema = new Schema({
    cartId:{
        type:Schema.Types.ObjectId,
        ref:'ShoppingCart',
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    productVariantId:{
        type:Schema.Types.ObjectId,
        ref:'ProductVariant',
        required:true
    }
},{timestamps:true})

export const CartItem = mongoose.model('CartItem',cartItemSchema)