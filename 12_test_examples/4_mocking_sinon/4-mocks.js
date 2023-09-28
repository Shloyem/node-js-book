// mock - is mostly for verifying, and not only overriding.
// On overriding or wrapping with an object with a mock, expectations can be defined by expects,
// and after use make sure expectations happened with verify.
// mock has all stub abilities

const obj = {
  greet: () => 'hello!'
};
const mock = sinon.mock(obj);
mock.expects('greet').once().returns('hi!');
console.log(obj.greet()); // Outputs: 'hi!'
mock.verify(); // PASS