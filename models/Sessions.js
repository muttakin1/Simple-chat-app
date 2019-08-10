var mongoose = require ('mongoose');

var SessionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Add your name"
    }
});

var Session= mongoose.model ('Session', SessionSchema);
module.exports = Session;