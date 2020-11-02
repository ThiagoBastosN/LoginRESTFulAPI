const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//This is the way we want the model to look like.
const usersSchema = new Schema({
    name: String,
    password: String
}, {
    timestamps: true,
});

//Before saving into the database hash the password.
usersSchema.pre('save', async function(next)
{
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

module.exports = model('User', usersSchema);