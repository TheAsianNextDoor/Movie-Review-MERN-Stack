import express from 'express';

import { getApiKey } from '../controllers/apiKey.controller.js';

export const apiKeyRouter = express.Router();

apiKeyRouter.get('/:name', getApiKey);
