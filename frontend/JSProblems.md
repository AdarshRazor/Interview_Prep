# 🚀 Advanced JavaScript Interview Problems (LeetCode Style)

## 1. Two Sum
**Problem:** Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

**Explanation:** Classic hash map problem to test array traversal and object usage.

```js
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) return [map[complement], i];
    map[nums[i]] = i;
  }
}
```

---

## 2. Deep Clone an Object
**Problem:** Write a function to deep clone a JavaScript object (no circular refs).

**Explanation:** Tests recursion and object/array handling.

```js
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const clone = {};
  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}
```

---

## 3. Implement a Promise.all
**Problem:** Write a function `myPromiseAll` that works like `Promise.all`.

**Explanation:** Tests async/Promise fundamentals.

```js
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [], completed = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p).then(val => {
        results[i] = val;
        completed++;
        if (completed === promises.length) resolve(results);
      }, reject);
    });
  });
}
```

---

## 4. LRU Cache (Class)
**Problem:** Design a class for an LRU (Least Recently Used) cache.

**Explanation:** Tests Map, class syntax, and algorithmic thinking.

```js
class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }
  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}
```

---

## 5. Debounce Function
**Problem:** Implement a debounce function.

**Explanation:** Tests closures and timer logic.

```js
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

---

## 6. Flatten Nested Array
**Problem:** Write a function to flatten a nested array.

**Explanation:** Recursion and array methods.

```js
function flatten(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}
```

---

## 7. Event Emitter (Pub/Sub)
**Problem:** Implement a simple EventEmitter class.

**Explanation:** Object, array, and function management.

```js
class EventEmitter {
  constructor() { this.events = {}; }
  on(event, listener) {
    (this.events[event] = this.events[event] || []).push(listener);
  }
  emit(event, ...args) {
    (this.events[event] || []).forEach(fn => fn(...args));
  }
  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(fn => fn !== listener);
  }
}
```

---

## 8. Currying Function
**Problem:** Implement a curry function.

**Explanation:** Tests closures and argument handling.

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    return (...next) => curried.apply(this, args.concat(next));
  };
}
```

---

## 9. Tricky: What will this log?
**Problem:** What will the following code output and why?

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

**Explanation:** Logs `3` three times. `var` is function-scoped, so by the time the callbacks run, `i` is 3.

---

## 10. Prototype Inheritance
**Problem:** How do you set up inheritance between two constructor functions in ES5?

**Explanation:** Tests understanding of prototypes.

```js
function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { return `${this.name} makes a noise`; };

function Dog(name) { Animal.call(this, name); }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() { return `${this.name} barks`; };
```
