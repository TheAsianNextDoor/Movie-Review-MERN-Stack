import { errorWrapper } from '../apiUtils.js';
import { MovieModel } from '../models/movie.model.js';

export const createMovie = errorWrapper(async (req, res) => {
    const { title } = req.params;
    const findResult = await MovieModel.findOne({ title });

    if (findResult !== null) {
        return res.send('Movie already added');
    }

    const postResult = new MovieModel({
        title,
        comment: '',
        rating: 0,
    }).save();
    return res.json(postResult);
});

export const readAllMovies = errorWrapper(async (req, res) => {
    const findResult = await MovieModel.find();
    return res.json(findResult);
});

export const updateRating = errorWrapper(async (req, res) => {
    const {
        title,
        rating,
    } = req.body;
    const updateResult = await MovieModel.updateOne({ title }, { rating });
    return res.json(updateResult);
});

export const updateComment = errorWrapper(async (req, res) => {
    const {
        title,
        comment,
    } = req.body;
    const updateResult = await MovieModel.updateOne({ title }, { comment });
    return res.json(updateResult);
});

export const deleteMovies = errorWrapper(async (req, res) => {
    const { selectedItems } = req.body;
    const objectArray = selectedItems.map((title) => ({ title }));
    const deleteQuery = { $or: objectArray };

    const deleteResult = await MovieModel.deleteMany(deleteQuery);
    return res.json(deleteResult);
});
