const nock = require('nock');

beforeAll(() => {
    nock.disableNetConnect();
});
