function subtractV1(x1, x2) {
  return x1 - x2;
}

function add(a, b) {
  return a + b;
}
function subtractV2(a, b) {
  return add(a, -b);
}

module.exports = { subtractV1, subtractV2, add }