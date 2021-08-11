export const createMovieParamSchema = {
    type: 'object',
    properties: { title: { type: 'string' } },
    required: ['title'],
    additionalProperties: false,
};

export const updateRatingBodySchema = {
    type: 'object',
    properties: {
        title: { type: 'string' },
        rating: { type: 'number' },
    },
    required: [
        'title',
        'rating',
    ],
    additionalProperties: false,
};

export const updateCommentBodySchema = {
    type: 'object',
    properties: {
        title: { type: 'string' },
        comment: { type: 'string' },
    },
    required: [
        'title',
        'comment',
    ],
    additionalProperties: false,
};

export const deleteMoviesBodySchema = {
    type: 'object',
    properties: {
        selectedItems: {
            type: 'array',
            items: { type: 'string' },
        },
    },
    required: ['selectedItems'],
};
