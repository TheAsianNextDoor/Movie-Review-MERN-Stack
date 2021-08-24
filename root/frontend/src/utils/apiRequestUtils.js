import axios from 'axios';

import {
    handleRequestVerifyAndReturn,
    verifyStatusIsOk,
} from './apiRequestUtilHelpers.js';

/**
 * Handles axios get request and verifies status is ok
 * @param  {*} ...requestArgs The args to pass to the http request
 * @returns {Promise<any[]>}
 */
export const getRequestAndReturnData = async (...requestArgs) => handleRequestVerifyAndReturn(
    axios.get,
    requestArgs,
    verifyStatusIsOk,
);

/**
 * Handles axios post request and verifies status is ok
 * @param  {*} ...requestArgs The args to pass to the http request
 * @returns {Promise<any[]>}
 */
export const postRequestAndVerifyOk = async (...requestArgs) => handleRequestVerifyAndReturn(
    axios.post,
    requestArgs,
    verifyStatusIsOk,
);

/**
 * Handles axios put request and verifies status is ok
 * @param  {*} ...requestArgs The args to pass to the http request
 * @returns {Promise<any[]>}
 */
export const putRequestAndVerifyOk = async (...requestArgs) => handleRequestVerifyAndReturn(
    axios.put,
    requestArgs,
    verifyStatusIsOk,
);

/**
 * Handles axios delete request and verifies status is ok
 * @param  {*} ...requestArgs The args to pass to the http request
 * @returns {Promise<any[]>}
 */
export const deleteRequestAndVerifyOk = async (...requestArgs) => handleRequestVerifyAndReturn(
    axios.delete,
    requestArgs,
    verifyStatusIsOk,
);
