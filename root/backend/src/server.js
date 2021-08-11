import cors from 'cors';
import dotEnv from 'dotenv-flow';
import express from 'express';
import Mongoose from 'mongoose';

import { apiKeyRouter } from './routes/apiKey.routes.js';
import { movieRouter } from './routes/movie.routes.js';

dotEnv.config();

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
} = process.env;

const dbURI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}\
@cluster0.hwzvk.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

Mongoose.connect(
    dbURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
);

const app = express();
const port = 5000;

const corsConfig = {
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
};

app.use([
    cors(corsConfig),
    express.json(),
]);

app.use('/apiKey', apiKeyRouter);
app.use('/movie', movieRouter);

app.listen(port, () => console.log(`Connected on port ${port}`));
