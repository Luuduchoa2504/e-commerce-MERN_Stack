const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SizeSchema = new Schema ({
    size_id: {
        type: Number,
        required: true
    },
    name: {
        type: Array,
        default:[S, M, L],
        required: true
    }
})