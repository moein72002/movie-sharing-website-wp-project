const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema(
    {
        writer: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        postId: {
            type: Schema.Types.ObjectId,
            ref: 'Movie'
        },
        responseTo: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            default: null
        },
        content: {
            type: String
        }

    }, {timestamps: true})


module.exports = mongoose.model('Comment', commentSchema);
