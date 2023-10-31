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
    sandbox.stub(fs, 'readFile').resolves('line1\nline2') // readFile returns a promise - so its resolves and not returns
    // act
    const actual = await getLineCount(null);
    // assert
    assert.strictEqual(actual, 2);
  });
});

describe('spy demo', () => {
  it('should use utf-8 for reading the file', async () => {
    // arrange
    const { promises: fs } = require('fs');
    const { getLineCount } = require('./line-count');
    const stub = sandbox.stub(fs,
      'readFile').resolves('line1\nline2')
    // act
    await getLineCount(null);
    // assert
    stub.calledOnceWithExactly(null, 'utf-8');
  });
});