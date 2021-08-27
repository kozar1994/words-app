const mongoose = require('mongoose')

const WordSchema = new mongoose.Schema({
    word_en: {
        type: String,
        require: true,
    },
    word_ua: {
        type: String,
    }
});

const Word = mongoose.model('word', WordSchema);

module.exports = Word;