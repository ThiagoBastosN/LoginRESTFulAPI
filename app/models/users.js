const { Schema, model } = require('mongoose');

//This is the way we want the model to look like.
const usersSchema = new Schema({
    name: String,
    password: String
}, {
    timestamps: true,
});


module.exports = model('User', usersSchema); //This compiles our schema into an actual model