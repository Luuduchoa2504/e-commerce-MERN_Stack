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
        type: String,
        required:true
    },
    brand: {
        type: String,
        required:true
    },
    colors: {
        type: String,
        required:true
    }, 
    size: {
        type: String,
        required: true
    }
}, {
    timestamps:true//important
})

module.exports = mongoose.model('Products', productSchema)