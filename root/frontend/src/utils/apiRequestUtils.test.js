import axios from 'axios';
import { expect } from 'chai';
import sinon from 'sinon';

import { defaultOkGetRequest } from '../testData/generalPostData.js';
import {
    deleteRequestAndVerifyOk,
    getRequestAndReturnData,
    handleRequestVerifyAndReturn,
    postRequestAndVerifyOk,
    putRequestAndVerifyOk,
    verifyStatusIsOk,
} from './apiRequestUtils.js';
import * as apiRequestUtils from './apiRequestUtils.js';

afterEach(() => {
    sinon.restore();
});

// London - Mockist - TDD

const requestArgs = [
    'arg1',
    2,
    'arg3',
];

describe(
    'verifyStatusIsOk',
    () => {
        it(
            'passes with 200 status',
            async () => {
                expect(() => verifyStatusIsOk(200)).to.not.throw();
            },
        );
        it(
            'throws with 500 status and default text',
            async () => {
                expect(() => verifyStatusIsOk(500)).to.throw('Status not 200');
            },
        );
        it(
            'throws with 500 status and custom text',
            async () => {
                expect(() => verifyStatusIsOk(500, 'custom')).to.throw('custom');
            },
        );
    },
);

describe(
    'handleRequestVerifyAndReturn',
    () => {
        it(
            'passes requestArgs to requestMethod',
            async () => {
                const requestMethodMock = sinon.mock();
                requestMethodMock.withExactArgs(...requestArgs);
                requestMethodMock.returns(() => defaultOkGetRequest);
                requestMethodMock.once();

                await handleRequestVerifyAndReturn(
                    requestMethodMock,
                    requestArgs,
                );
            },
        );

        it(
            'passes correct args to verifyMethod',
            async () => {
                const {
                    status,
                    statusText,
                } = defaultOkGetRequest;

                const fakeRequestMethod = sinon.fake.returns(defaultOkGetRequest);
                const verifyMethodMock = sinon.mock();
                verifyMethodMock.withExactArgs(status, statusText);

                await handleRequestVerifyAndReturn(
                    fakeRequestMethod,
                    [],
                    verifyMethodMock,
                );
            },
        );

        it(
            'returns data from request',
            async () => {
                const { data } = defaultOkGetRequest;
                const fakeRequestMethod = sinon.fake.returns(defaultOkGetRequest);

                const result = await handleRequestVerifyAndReturn(
                    fakeRequestMethod,
                    [],
                );

                expect(result).to.deep.equal(data);
            },
        );
    },
);

describe(
    'getRequestAndReturnData',
    () => {
        it(
            'passes args correctly to handleRequestVerifyAndReturn',
            async () => {
                const handleRequestVerifyAndReturnMock = sinon
                    .mock(apiRequestUtils).expects('handleRequestVerifyAndReturn');

                handleRequestVerifyAndReturnMock.withExactArgs(
                    axios.get,
                    requestArgs,
                    verifyStatusIsOk,
                );

                await getRequestAndReturnData(...requestArgs);
            },
        );
    },
);

describe(
    'postRequestAndVerifyOk',
    () => {
        it(
            'passes args correctly to handleRequestVerifyAndReturn',
            async () => {
                const handleRequestVerifyAndReturnMock = sinon
                    .mock(apiRequestUtils).expects('handleRequestVerifyAndReturn');

                handleRequestVerifyAndReturnMock.withExactArgs(
                    axios.post,
                    requestArgs,
                    verifyStatusIsOk,
                );

                await postRequestAndVerifyOk(...requestArgs);
            },
        );
    },
);

describe(
    'putRequestAndVerifyOk',
    () => {
        it(
            'passes args correctly to handleRequestVerifyAndReturn',
            async () => {
                const handleRequestVerifyAndReturnMock = sinon
                    .mock(apiRequestUtils).expects('handleRequestVerifyAndReturn');

                handleRequestVerifyAndReturnMock.withExactArgs(
                    axios.put,
                    requestArgs,
                    verifyStatusIsOk,
                );

                await putRequestAndVerifyOk(...requestArgs);
            },
        );
    },
);

describe(
    'deleteRequestAndVerifyOk',
    () => {
        it(
            'passes args correctly to handleRequestVerifyAndReturn',
            async () => {
                const handleRequestVerifyAndReturnMock = sinon
                    .mock(apiRequestUtils).expects('handleRequestVerifyAndReturn');

                handleRequestVerifyAndReturnMock.withExactArgs(
                    axios.delete,
                    requestArgs,
                    verifyStatusIsOk,
                );

                await deleteRequestAndVerifyOk(...requestArgs);
            },
        );
    },
);
