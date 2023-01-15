const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
})

module.exports = mongoose.model('Product', productSchema)

