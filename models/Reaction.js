const { Schema, Types, model } = require('mongoose');
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
         }
         },
         {
         toJSON: {
            getters: true
         },
         id:false
        
    }
);

module.exports = reactionSchema;