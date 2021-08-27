const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
    listTitle: {
        type: String,
        require: true,
    },
    words: {
        type: Array,
        default: [],
    }
});

const List = mongoose.model('list', ListSchema);

module.exports = List;