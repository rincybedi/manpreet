// Problem 1 : Currying add(1)(2)

function add(a) {
  return function (b) {
    return a + b;
  };
}

const res = add(1)(2);
console.log(res);

// Problem 2: add(1)(2)(3)(4)
function curry(fn) {
  return function curried(...args) {
    if (args.length == fn.length) {
      return fn.apply(this, args);
    }
    return function (...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

function sum(a, b, c) {
  return a + b + c;
}

function multiply(a, b, c) {
  return a * b * c;
}

const curriedAdd = curry(sum);
console.log(curriedAdd(1)(2)(3));

const curriedMult = curry(sum);
console.log(curriedMult(1)(2)(3));

// Problem 3
function memoize(fn) {
  const map = new Map();
  return function memoized(...args) {
    let key = JSON.stringify(args);
    if (map.has(key)) return map.get(key);
    const re = fn.apply(this, args);
    map.set(key, re);
    return re;
  };
}

function heavy(a) {
  return a * a * a;
}

const memoized = memoize(heavy);
console.log(memoized(200));
console.log(memoized(200));
console.log(memoized(200));

// Proble 4 this and arrow fn
const person = {
  name: "A",
  age: 1,
  print: function () {
    const age = 2;
    console.log(this.name + " " + this.age);
  },
};

person.print();

// Problem 5 : calc.add(10).mult(3).sub(2).add(22)

let calc = {
  a: 0,
  add: function (a) {
    this.a += a;
    return this;
  },
  mult: function (a) {
    this.a *= a;
    return this;
  },
};

const resl = calc.add(10).mult(3).add(2);
console.log(resl.a);

//flatten array [1,[2,[3,4]]]
function flatten(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(flatten(item));
    } else {
      return acc.concat(item);
    }
  }, []);
}

console.log(flatten([1, [2, [3, 4]]])); // Output: [1, 2, 3, 4]



const person1 ={
  name:'Abc',
  displayName(){
    this.x=10
    console.log('mnp', this.x, this.name) //undefined this-window
    console.log(window.x)
    console.log(document.x)
  }
}

person1.displayName()

// call apply bind
// debounce throttle - 
// custom hooks
// controlled ++
// const [inputVal, setInputVal]
{/* <input value={inputVal} onKeyDown={(e) => setInputVal(e.target.value)} /> */}
// Event

const obj = {
  a: [1, 5, 10, 15],
  b: [1, 3, 5, 7, 9],
  c: [1, 2, 3, 4, 5],
};

// Combine all arrays into one array
const combined = [...obj.a, ...obj.b, ...obj.c];

// Count occurrences of each number
const counts = combined.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

// Filter out numbers that appear more than once (duplicates)
const duplicates = Object.entries(counts)
  .filter(([num, count]) => count > 1)
  .map(([num, count]) => ({ number: Number(num), count }));

console.log(duplicates);

// shallow copy
const original = { name: 'Alice', details: { age: 25, city: 'New York' } };
const shallowCopy = { ...original };

console.log(shallowCopy.details === original.details); 
shallowCopy.details.age = 30;
shallowCopy.name = 'manpreet'
console.log(original); 

const myObj = Object.freeze({ key: 'value' });
myObj.key = 'newValue'; // This will not change the object
console.log(myObj);     // Output: { key: 'value' }
