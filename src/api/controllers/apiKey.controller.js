import { errorWrapper } from '../apiUtils.js';
import { ApiKeyModel } from '../models/apiKey.model.js';

export const getApiKey = errorWrapper(async (req, res) => {
    const { name } = req.params;
    const result = await ApiKeyModel.find({ name });
    return res.json(result);
});
