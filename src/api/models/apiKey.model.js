import Mongoose from 'mongoose';

const ApiKeySchema = new Mongoose.Schema({
    name: String,
    key: String,
});

export const ApiKeyModel = Mongoose.model('api_keys', ApiKeySchema);
