import { StatusCodes } from 'http-status-codes';

/**
 * Verifies that a status code was 200
 * @param  {} status
 * @param  {} [statusText]
 * @throws
 */
export const verifyStatusIsOk = (
    status,
    statusText = 'Status not 200',
) => {
    if (status !== StatusCodes.OK) {
        throw new Error(statusText);
    }
};

/**
 * Abstraction method for handling requests and verifying response status
 * @param {function} requestMethod The http request method
 * @param {any[]} requestArgs The arguments to be passed to the request method
 * @param {function} [verifyMethod] The method used to verify the response status
 * @returns {Promise<any[]>}
 */
export const handleRequestVerifyAndReturn = async (
    requestMethod,
    requestArgs,
    verifyMethod = () => {},
) => {
    const {
        status,
        statusText,
        data,
    } = await requestMethod(...requestArgs);

    verifyMethod(status, statusText);

    return data;
};
