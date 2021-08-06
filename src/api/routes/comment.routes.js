import express from 'express';

import {
    createComment,
    deleteComment,
    readComment,
    updateComment,
} from '../controllers/comment.controller.js';

export const commentRouter = express.Router();

commentRouter.post('/create', createComment);
commentRouter.get('/read', readComment);
commentRouter.put('/update', updateComment);
commentRouter.delete('/delete', deleteComment);
