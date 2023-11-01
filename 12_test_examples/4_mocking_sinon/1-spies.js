// spy - adds the option to "spy" after a function call, how many times called, argument passed etc.
// run with node ".\12_test_examples\4_mocking_sinon\1-spies.js"
const sinon = require('sinon');

const func = (x) => x * 2;
const spy = sinon.spy(func);
[1, 2, 3].map(x => spy(x));
console.log(`call count - spy.callCount: ${spy.callCount}`); // Outputs: 3
console.log(`first call - argument spy.firstCall.args[0]: ${spy.firstCall.args[0]}`); // Outputs: 1
console.log(`first call returned value - spy.firstCall.returnValue: ${spy.firstCall.returnValue}`); // Outputs: 2
console.log(`third call argument by arrays/matrix - spy.args[2][0]: ${spy.args[2][0]}`); // Outputs: 3
