import mongoose,{Schema} from 'mongoose'

const customerSupportTicketSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    issue:{
        type:Text,
        required: true
    },
    status:{
        type:String,
        required: true
    }
},{timestamps:true})

export const CustomerSupportTicket = mongoose.model('CustomerSupportTicket', customerSupportTicketSchema)