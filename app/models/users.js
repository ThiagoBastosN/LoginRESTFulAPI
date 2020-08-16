const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//This is the way we want the model to look like.
const usersSchema = new Schema({
    name: String,
    password: String
}, {
    timestamps: true,
});

usersSchema.pre('save', async function(next)
{
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

module.exports = model('User', usersSchema); //This compiles our schema into an actual model