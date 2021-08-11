export const getApiKeyParamSchema = {
    type: 'object',
    properties: { name: { type: 'string' } },
    required: ['name'],
    additionalProperties: false,
};
