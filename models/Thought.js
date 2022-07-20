const { Schema, Types, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require("./Reaction.js");



const thoughtSchema  = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
    },
    creatAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    userName: {
        type: String,
        required: true
    },
    // associate reactions with thoughts & use ReactionSchema to validate data for a reaction
    reactions: [reactionSchema]
},
{
    toJSON: {
        getters: true,
        virtuals: true
    },
    id: false
}
);

// virtual to return amount of reactions to comment
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;