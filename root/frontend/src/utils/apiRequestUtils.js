import axios from 'axios';

export const verifyStatusIsOk = (
    status,
    statusText = 'Status not 200',
) => {
    if (status !== 200) {
        throw new Error(statusText);
    }
};

export const getRequestAndReturnData = async (...rest) => {
    const {
        status,
        statusText,
        data,
    } = await axios.get(...rest);

    verifyStatusIsOk(status, statusText);

    return data;
};

export const postRequestAndVerifyOk = async (...rest) => {
    const {
        status,
        statusText,
    } = await axios.post(...rest);

    verifyStatusIsOk(status, statusText);
};

export const putRequestAndVerifyOk = async (...rest) => {
    const {
        status,
        statusText,
    } = await axios.put(...rest);

    verifyStatusIsOk(status, statusText);
};

export const deleteRequestAndVerifyOk = async (...rest) => {
    const {
        status,
        statusText,
    } = await axios.delete(...rest);

    verifyStatusIsOk(status, statusText);
};
