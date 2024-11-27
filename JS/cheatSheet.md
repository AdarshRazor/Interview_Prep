# JS Concept

### 🔴 VAR, LET and CONST

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | `Function-scoped` | `Block-scoped` | `Block-scoped` |
| Redeclaration | Allowed | Not allowed within the same scope | `Not allowed` |
| Reassignment | Allowed | Allowed | `Not allowed` |
| Hoisting | Hoisted to the top of the function scope | Hoisted to the top of the block scope, but not initialized | Hoisted to the top of the block scope, but not initialized |
| Temporal Dead Zone (TDZ) | No | Exists before declaration | Exists before declaration |

```js
function scopeExample() {
    // Using var: function-scoped
    if (true) {
        var varVariable = "I'm a var variable";
    }
    console.log(varVariable); // Accessible here because var is function-scoped

    // Using let: block-scoped
    if (true) {
        let letVariable = "I'm a let variable";
        console.log(letVariable); // Accessible inside the block
    }
    // console.log(letVariable); // Uncommenting this line will cause an error because let is block-scoped

    // Using const: block-scoped
    if (true) {
        const constVariable = "I'm a const variable";
        console.log(constVariable); // Accessible inside the block
    }
    // console.log(constVariable); // Uncommenting this line will cause an error because const is block-scoped
}

scopeExample();
```

#### Reassignment:

> Let: can reassign a new value

> Const: cannot do that

`but in case of array declaratio we can modify the contents of the array. reassigning the entire value is not allowed.`

```js
function example() {
  var x = 1;
  let y = 2;
  const z = 3;

  if (true) {
    var x = 10; // Redefines x (function-scoped)
    let y = 20; // New y, block-scoped to the if block
    const z = 30; // New z, block-scoped to the if block
    console.log(x, y, z); // Output: 10, 20, 30
  }

  console.log(x, y, z); // Output: 10, 2, 3
}
```

<hr>

### 🔴 Split, Slice and Trim

* **Split**: Divides a string into an array based on a separator

* **Slice**: Extracts a portion of a string or array without modification

* **Trim**: Removes leading and trailing whitespace from a string

```javascript

// splitting a CSV
const csv = "name,age,city";
const data = csv.split(",");
console.log(data); // Output: ["name", "age", "city"]

// extracting substrings
const url = "https://example.com";
const domain = url.slice(8); // Remove "https://"
console.log(domain); // Output: "example.com"

//cleaning user input
const userInput = "   john.doe@example.com   ";
console.log(userInput.trim()); // Output: "john.doe@example.com"
```

<hr>

### 🔴 Primitive and Non-Primitive

| Primitive | Non-Primitive |
|---|---|
| Numbers | Object |
| Strings | Array |
| Booleans | Function |
| Undefined | Date |
| Null | RegExp |

| Feature | Primitive Data Types | Non-primitive Data Types |
|---|---|---|
| Types | Number, string, Boolean, undefined, null | Object, array, function, date, RegExp |
| Values | Can hold only a single value | Can hold multiple values and methods |
| Mutability | Immutable (cannot be changed) | Mutable (can be changed) |
| Complexity | Simple data types | Complex data types |

<hr>

### 🔴 Operators

* Arithmetic: +, -, *
* Assignment: =, +=(throw error when assign a var), =+(assign the number when used with no.), =-, -= 
* Comparison: >, <, >=, <=
* Logical: &&, ??, ||

<hr>

### 🔴 Condition

* If Else

* Ternary: condition ? value_if_true : value_if_false;

* Switch: 
```js
switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  default:
    // Code to execute if no case matches
}
```

<hr>

### 🔴 Loop 

* for: over a range or fixed number

* while: Looping until a condition is met

* do-while: Looping at least once

* for of: Iterating over iterable objects

* for in: Iterating over object keys

```js
//for
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}

//while
let count = 0;
while (count < 3) {
  console.log(count); // Output: 0, 1, 2
  count++;
}

//do-while
let num = 0;
do {
  console.log(num); // Output: 0 (executes once even if condition is false initially)
  num++;
} while (num < 0);


//for...of
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit); // Output: apple, banana, cherry
}

//for...in
const car = { brand: "Toyota", model: "Corolla", year: 2020 };
for (const key in car) {
  console.log(`${key}: ${car[key]}`); 
  // Output: 
  // brand: Toyota
  // model: Corolla
  // year: 2020
}
```

#### Best practice
* **for Loop:** Good for sequential iterations (e.g., incrementing i).
* **while Loop:** Good for looping based on a condition that may not involve a counter.
* **do-while Loop:** Ensures the block runs at least once, regardless of the condition.
* **for...of Loop:** Best for iterables like arrays or strings to access values directly.
* **for...in Loop:** Best for objects to access keys.

<hr>

### 🔴 Functions

* Named Function: A function with a specific name.

* Arrow Function: A concise way to define functions using arrow syntax.

* Anon Function: A function without a name.

* Callback Function: A function passed as an argument to another function.

* High-Order Function: A function that takes another function as an argument or returns a function.

```javascript
//named
function greet() { console.log("Hello!") }

//arrow
const greet = () => console.log("Hello!")

//anonymous
let greet = function() { console.log("Hello!") }

//callback
function greet() { console.log("Hello!") } 
outerFunction(greet);

//high-order
function add(x, y) { return x + y; } 
function applyOperation(callback, a, b) { return callback(a, b); }
```

```javascript
//high order example
function multiplier(factor) {
  // Returns a function
  return (number) => number * factor;
}

// Using the higher-order function
const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```

<hr>

### 🔴 Push, Pop, Shift, Unshift

![image](https://github.com/user-attachments/assets/9c5141f9-45c5-4141-ac8f-b0b567672edf)
