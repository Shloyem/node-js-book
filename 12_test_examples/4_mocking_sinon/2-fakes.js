// fake - with fake you can create a "fake" method with a set behaviour,
// and define if the fake method returns/resolves/rejects/throws.
// Each fake is also a spy
const sinon = require('sinon');

const fake = sinon.fake.returns(42);
console.log(fake()); // Outputs: 42
console.log(`call count: ${fake.callCount}`); // Outputs: 1
console.log(fake.firstCall.returnValue); // Outputs: 42

for (let index = 0; index < 100; index++) {
  fake();
}
console.log(`call count after 100 more calls: ${fake.callCount}`); // Outputs: 101
