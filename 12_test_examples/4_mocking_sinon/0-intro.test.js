const sinon = require('sinon');
const assert = require('assert');
const sandbox = sinon.createSandbox();

afterEach(() => {
  sandbox.restore();
});

describe('stub demo', () => {
  it('should return correct line count', async () => {
    // arrange
    const { promises: fs } = require('fs');
    const { getLineCount } = require('./line-count');
    sandbox.stub(fs, 'readFile').resolves('line1\nline2')
    // act
    const actual = await getLineCount(null);
    // assert
    assert.strictEqual(actual, 2);
  });
});