import Mongoose from 'mongoose';

const movieSchema = new Mongoose.Schema({
    title: String,
    comment: String,
    rating: Number,
});

export const MovieModel = Mongoose.model('movies', movieSchema);
