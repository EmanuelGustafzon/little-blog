const mongoose = require("mongoose");

const sortedListsSchema = new mongoose.Schema({
    list: {
        type: Array,
        required: true,
    },

    
})

module.exports = mongoose.model('sortedLists', sortedListsSchema)

