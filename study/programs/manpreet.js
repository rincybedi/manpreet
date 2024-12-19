function sum(a){
  return function (b) {
    if (b == null) return a;
    return sum(a + b);
  };
};

const x = sum(2)
const z = x(3)

console.log(sum(2)(3)(4)());
