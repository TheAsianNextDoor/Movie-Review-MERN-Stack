import { ApiKeyModel } from '../models/apiKey.model.js';

export const getApiKey = async (req, res) => {
    const { name } = req.params;

    try {
        const result = await ApiKeyModel.find({ name });
        return res.json(result);
    } catch (e) {
        return res.status(400).json(e);
    }
};
