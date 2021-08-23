import axios from 'axios';
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
exports.handleRequestVerifyAndReturn = async (
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

/**
 * Handles axios get request and verifies status is ok
 * @param  {*} ...requestArgs The args to pass to the http request
 * @returns {Promise<any[]>}
 */
export const getRequestAndReturnData = async (...requestArgs) => exports.handleRequestVerifyAndReturn(
    axios.get,
    requestArgs,
    verifyStatusIsOk,
);

/**
 * Handles axios post request and verifies status is ok
 * @param  {*} ...requestArgs The args to pass to the http request
 * @returns {Promise<any[]>}
 */
export const postRequestAndVerifyOk = async (...requestArgs) => exports.handleRequestVerifyAndReturn(
    axios.post,
    requestArgs,
    verifyStatusIsOk,
);

/**
 * Handles axios put request and verifies status is ok
 * @param  {*} ...requestArgs The args to pass to the http request
 * @returns {Promise<any[]>}
 */
export const putRequestAndVerifyOk = async (...requestArgs) => exports.handleRequestVerifyAndReturn(
    axios.put,
    requestArgs,
    verifyStatusIsOk,
);

/**
 * Handles axios delete request and verifies status is ok
 * @param  {*} ...requestArgs The args to pass to the http request
 * @returns {Promise<any[]>}
 */
export const deleteRequestAndVerifyOk = async (...requestArgs) => exports.handleRequestVerifyAndReturn(
    axios.delete,
    requestArgs,
    verifyStatusIsOk,
);
