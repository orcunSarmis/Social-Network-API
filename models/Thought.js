const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const reactionSchema = new Schema (
    {
         // set custom id to avoid confusion with parent thought _id
         reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
         },
         reactionBody: {
            type: String,
            required: true,
            maxLength: 280

         },
         userName: {
            type: String,
            required: true
         },
         createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
         },
         toJSON: {
            getters: true
         }
    }
);

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
    reaction: [reactionSchema]
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