import { MovieModel } from '../models/movie.model.js';

export const createMovie = async (req, res) => {
    const { title } = req.params;

    try {
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
    } catch (e) {
        return res.status(400).json(e);
    }
};

export const readAllMovies = async (req, res) => {
    const findResult = await MovieModel.find();
    return res.json(findResult);
};

export const updateRating = async (req, res) => {
    const {
        title,
        rating,
    } = req.body;
    try {
        const updateResult = await MovieModel.updateOne({ title }, { rating });
        return res.json(updateResult);
    } catch (e) {
        return res.status(400).json(e);
    }
};

export const updateComment = async (req, res) => {
    const {
        title,
        comment,
    } = req.body;
    try {
        const updateResult = await MovieModel.updateOne({ title }, { comment });
        return res.json(updateResult);
    } catch (e) {
        return res.status(400).json(e);
    }
};

export const deleteMovie = async (req, res) => {
    const { title } = req.params;

    try {
        const deleteResult = await MovieModel.deleteOne({ title });
        return res.json(deleteResult);
    } catch (e) {
        return res.status(400).json(e);
    }
};
