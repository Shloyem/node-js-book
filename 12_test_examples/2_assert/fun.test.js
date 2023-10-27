const assert = require('assert');

describe('assert.ok()', () => {
  it('will pass', () => {
    let actual = 'truthy';
    assert.ok(actual);
    assert.strictEqual('foo', 'foo');
    assert.notStrictEqual('foo', 'bar');
    assert.notStrictEqual(1, '1');
    assert.notStrictEqual({ name: 'foo' }, { name: 'foo' }); // Values have same structure but are not reference-equal
    assert.deepStrictEqual({ name: 'foo' }, { name: 'foo' }); // Checks object's values recursively 
  });
  it('will fail', () => {
    // const actual = null; // falsy
    // assert.ok(actual);
  });
  it('will throw', () => {
    assert.throws(() => greet(666));
  });
});

function greet(name) {
  if (typeof name !== 'string') {
    throw new Error('name should be a string');
  }
  return `Hello ${name}`;
}