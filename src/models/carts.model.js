import { Schema, model } from 'mongoose';

const cartSchema = new Schema({
    products: {
        type: Array,
        required: true,
        default: [],
    },
    isActive:{
        type:Boolean,
        default:true
    }
})
		


export default model('carts', cartSchema);