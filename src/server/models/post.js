const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true},
    type: { type: String, required: true },
    author: {type: String, required: true},
    upvotes: {type: Number, default: 0},
    createdAt: { type: Date, required: true, default: Date.now }
});

var Post = mongoose.model('post', postSchema);

export default Post;
