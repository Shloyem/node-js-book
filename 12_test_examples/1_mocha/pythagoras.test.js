// steps:
// 1. npm install mocha
// 2. add
// "scripts": {
//    "test": "./node_modules/.bin/mocha *.test.js"
// 3. npm run test

const { subtractV1, subtractV2, add } = require('./pythagoras');
const assert = require('assert');

describe('pythagoras', () => {
  describe('subtract()', () => {
    it('should return the result of subtraction of two numbers', () => {
      let actual = subtractV1(3, 2);
      assert.strictEqual(actual, 1);
      actual = subtractV2(3, 2);
      assert.strictEqual(actual, 1);
    });
    it('should support string values', () => {
      let actual = subtractV1('3', '2');
      assert.strictEqual(actual, 1);
      // actual = subtractV2('3', '2');
      // assert.strictEqual(actual, 1); // Caught error!
    });
  });
  describe('add()', () => {
    it('should return the result of addition of two numbers', () => {
      const actual = add(1, 2);
      assert.strictEqual(actual, 3);
    });
  });
});