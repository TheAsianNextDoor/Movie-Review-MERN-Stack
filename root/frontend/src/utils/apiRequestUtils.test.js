import axios from 'axios';
import { expect } from 'chai';
import sinon from 'sinon';

import {
    defaultOkGetRequest,
    goodDataPayload,
} from '../testData/generalPostData.js';
import {
    getRequestAndReturnData,
    verifyStatusIsOk,
} from './apiRequestUtils.js';

afterEach(() => {
    sinon.restore();
});

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

it(
    'getRequestAndReturnData passes through args',
    async () => {
        const stub = sinon.stub(axios, 'get').callsFake(() => defaultOkGetRequest);
        const data = await getRequestAndReturnData('arg1', 'arg2', 'arg3');

        sinon.assert.calledWithExactly(stub, 'arg1', 'arg2', 'arg3');
        expect(data).to.deep.equal(goodDataPayload);
    },
);
