const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema ({
    product_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    name:{
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: Number,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    images: {
        type: Object,
        required:true
    },
    category: {
        type: Number,
        required:true
    },
    brand: {
        type: Number,
        required:true
    },
    colors: {
        type: Array,
        default: [],
        required:true
    }, 
    size: {
        type: Array,
        default: [S, M, L],
        required: true
    }
}, {
    timestamps:true//important
})

module.exports = mongoose.model('Products', productSchema)