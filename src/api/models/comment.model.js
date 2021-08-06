import Mongoose from 'mongoose';

const commentsSchema = new Mongoose.Schema({
    name: String,
    key: String,
});

export const commentModel = Mongoose.model('comments', commentsSchema);
