import express from 'express';

import {
    createMovie,
    deleteMovie,
    readAllMovies,
    updateComment,
    updateRating,
} from '../controllers/movie.controller.js';

export const movieRouter = express.Router();

movieRouter.post('/create/:title', createMovie);
movieRouter.get('/read/all', readAllMovies);
movieRouter.put('/updateRating', updateRating);
movieRouter.put('/updateComment', updateComment);
movieRouter.delete('/delete/:title', deleteMovie);
