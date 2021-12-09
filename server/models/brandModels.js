const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BrandSchema = new Schema ({
    brand_id: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Brand', BrandSchema)