import {
    buildAxiosGetResponse,
    buildAxiosPostResponse,
} from '../utils/dataBuilderUtils.js';

export const goodDataPayload = 'good data payload';
export const successStatus = 200;
export const successText = 'successful';

export const badDataPayload = 'bad data payload';
export const failureStatus = 500;
export const failureText = 'failure';

export const defaultOkGetRequest = buildAxiosGetResponse({
    data: goodDataPayload,
    status: successStatus,
    statusText: successText,
});

export const defaultBadGetRequest = buildAxiosGetResponse({
    data: badDataPayload,
    status: failureStatus,
    statusText: failureText,
});

export const defaultOKPostRequest = buildAxiosPostResponse({
    data: goodDataPayload,
    status: successStatus,
    statusText: successText,
});

export const defaultBadPostRequest = buildAxiosPostResponse({
    data: badDataPayload,
    status: failureStatus,
    statusText: failureText,
});
