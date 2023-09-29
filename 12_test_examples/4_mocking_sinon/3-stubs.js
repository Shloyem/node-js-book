// run with "node .\12_test_examples\4_mocking_sinon\3-stubs.js"

// stub - allows returning different values according to the arguments and called amount.
const sinon = require('sinon');

const stub = sinon.stub();
stub.withArgs('foo').returns('bar');
stub.withArgs('heyyy').returns('hoooo');
console.log(stub()); // Outputs: undefined
console.log(stub('foo')); // Outputs: 'bar'
console.log(stub('heyyy')); // Outputs: 'hoooo'

const stubForCallsAmount = sinon.stub();

for (let index = 0; index < 20; index++) {
  stubForCallsAmount.onCall(index).returns(index + 1);
  console.log(`Call #${index + 1} returned: ${stubForCallsAmount()}`);
}

// stub allows to override a method inside an object, useful for overriding external modules dependencies
const obj = {
  greet: () => 'hello!'
};
const stubMethodOveride = sinon.stub(obj, 'greet');
stub.onFirstCall().returns('hi!');
stub.onSecondCall().returns('howdy!');
console.log(obj.greet()); // Outputs: 'hi!'
console.log(obj.greet()); // Outputs: 'howdy!'

