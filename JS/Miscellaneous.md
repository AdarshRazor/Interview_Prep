## Stand in Line - (Print using stringify) ❗

```js
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
    //remove 1 from the arrray and return it.
}

var arr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(arr));
//output Before: [1,2,3,4,5]
console.log("Before: " + arr);
//output Before: 1,2,3,4,5
console.log(nextInLine(arr, 6));
console.log("After: " + JSON.stringify(arr));
//output After: [2,3,4,5,6]
```

## Testing Objects for Properties - (hasOwnProperty) ❗

```js
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj("gift")); // "pony"
console.log(checkObj("random")); // "Not Found"
```

## Difference between For and ForEach Statement

## Prevent Object Mutation - Object.freeze()

```js
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  
  Object.freeze(MATH_CONSTANTS); // This will prevent any changes to the object.
  
  try {
    MATH_CONSTANTS.PI = 99; // This will throw an error in strict mode.
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI); // 3.14
```

## Use the Rest Parameter with Function Parameters ❗

```js
const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(1, 2)); // 3
```

## Use the Spread Operator with Function Parameters ❗

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

let arr2;
(function() {
  arr2 = arr1; // This will keep the value of arr2 and arr 1 same.
  arr2 = [...arr1];
  arr1[0] = 'potato';
})();

console.log(arr2); // ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
```

## Use Destructuring Assignment with the Rest Operator ❗

```js
const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {
  "use strict";
  const [a, b, ...arr] = list;
  return arr;
}

const arr = removeFirstTwo(source);
console.log(arr); // [3,4,5,6,7,8,9,10]
console.log(source); // [1,2,3,4,5,6,7,8,9,10]
```

## Use Destructuring Assignment to Pass an Object as a Function's Parameters - Use in **{ API call }** ❗

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = (function() {

  return function half(stats) {
    return (stats.max + stats.min) / 2.0;

  return function half({max, min}) {
    return (max + min) / 2.0;
  };
})();

console.log(stats); // { max: 56.78, standard_deviation: 4.34, median: 34.54, mode: 23.87, min: -0.75, average: 35.85 }
console.log(half(stats)); // 28.925
```

## Template Literals - Create Strings ❗

```js
const person = {
  name: "Adarsh Anand",
  age: 22
};

const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;

console.log(greeting); // Hello, my name is Adarsh Anand! I am 22 years old.

---

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
  "use strict";
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray); 
// [ '<li class="text-warning">no-var</li>', '<li class="text-warning">var-on-top</li>', '<li class="text-warning">linebreak</li>' ]
```

## Write consise object literal declarations using simple fields ❗

```js
const createPerson = (name, age, gender) => {

  return {
    name: name,
    age: age,
    gender: gender
  };

};

const createPerson1 = (name, age, gender) => ({name, age, gender});

console.log(createPerson1("Adarsh Anand",22,"male"));
// {name: 'Adarsh Anand', age: 22, gender: 'male'}
```