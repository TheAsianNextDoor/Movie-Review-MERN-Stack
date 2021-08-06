import express from 'express';

import {
    createRating,
    deleteRating,
    readRating,
    updateRating,
} from '../controllers/rating.controller.js';

export const ratingRouter = express.Router();

ratingRouter.post('/create', createRating);
ratingRouter.get('/read', readRating);
ratingRouter.put('/update', updateRating);
ratingRouter.delete('/delete', deleteRating);
