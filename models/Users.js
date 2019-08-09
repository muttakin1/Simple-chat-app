var mongoose = require ('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is required"
    }
});

var User= mongoose.model ('User', userSchema);
module.exports = User;
