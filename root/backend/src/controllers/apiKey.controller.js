import { errorWrapper } from '../apiUtils.js';
import { ApiKeyModel } from '../models/apiKey.model.js';
import { validateGetApiKeyParams } from '../validations/validations.js';

export const getApiKey = errorWrapper(async (req, res) => {
    validateGetApiKeyParams(req.params);

    const { name } = req.params;
    const result = await ApiKeyModel.find({ name });
    return res.json(result);
});
