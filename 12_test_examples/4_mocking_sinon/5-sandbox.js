// Sandbox - since sinon overrides the original implementation there has to be a way to revert the object to its original
// state after test is finished, to prevent one test from affecting the others.
// It's therefore recommended to never use sinon directly, but first create a sandbox (createSandbox),
// and restore it after each test (in afterEach call for restore)
const sinon = require('sinon');

const sandbox = sinon.createSandbox();

const obj = {
  func: () => 1,
};
sandbox.stub(obj, 'func').returns(42);
console.log(obj.func()); // Outputs: 42
sandbox.restore();
console.log(obj.func()); // Outputs: 1