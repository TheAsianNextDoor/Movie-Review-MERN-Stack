import Ajv from 'ajv';

import { getApiKeyParamSchema } from './apiKey.validations.js';
import {
    createMovieParamSchema,
    deleteMoviesBodySchema,
    updateCommentBodySchema,
    updateRatingBodySchema,
} from './movie.validations.js';

const ajv = new Ajv();

/**
 * Throws an error if the data does not match the provided schema
 * @param {any} data The Object to be validated
 * @param {Object} schema The schema to validate it against
 */
const validationWrapper = (data, schema) => {
    const validate = ajv.compile(schema);
    const isValid = validate(data);

    if (!isValid) {
        throw new Error(JSON.stringify(validate.errors, null, 4));
    }
};

/*
    API_KEY VALIDATIONS
*/
export const validateGetApiKeyParams = (data) => validationWrapper(data, getApiKeyParamSchema);

/*
    MOVIE VALIDATIONS
*/
export const validateCreateMovieParam = (data) => validationWrapper(data, createMovieParamSchema);
export const validateUpdateRatingBody = (data) => validationWrapper(data, updateRatingBodySchema);
export const validateUpdateCommentBody = (data) => validationWrapper(data, updateCommentBodySchema);
export const validateDeleteMoviesBody = (data) => validationWrapper(data, deleteMoviesBodySchema);
