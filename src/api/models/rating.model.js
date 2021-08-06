import Mongoose from 'mongoose';

const ratingSchema = new Mongoose.Schema({
    name: String,
    key: String,
});

export const RatingModel = Mongoose.model('api_keys', ratingSchema);
