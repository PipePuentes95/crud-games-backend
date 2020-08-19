const moongose = require('mongoose');

const GameSchema = moongose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    category: {
        type: Array,
        require: true,
        trim: true
    },
    rating: {
        type: String,
        require: true,
        trim: true
    },
    imgURL: {
        type: String,
        require: true,
        trim: true
    },
    platform: {
        type: Array,
        require: true,
        trim: true
    }
});

module.exports = moongose.model('Game', GameSchema);