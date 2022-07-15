const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: 'You need to provide an email!',
        unique: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref:'User'
        }
    ],
},
// This code for schema uses virtuals, monggose model use getter function.
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    // Set id to false, Mongoose returns virtual.
    id: false
});

// this lines gets lenght of friends array
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

//create the user model using the UserSchema
const User = model('User', UserSchema);

module.exports = User;