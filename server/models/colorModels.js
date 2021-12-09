const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ColorSchema = new Schema( {
    color_id: {
        type: Number,
        required: true
    },
    name: {
        type: Array,
        default: [],
        required: true
    }
})