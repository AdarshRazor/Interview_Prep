# 🔥Advanced Python - Practice Questions

## List, Dictionary, and Set Comprehensions

### Easy Questions
1. What is a list comprehension and how does it differ from a traditional for loop?
2. How would you create a list of squares for numbers from 1 to 10 using list comprehension?
3. What will be the output of the following code?
   ```python
   numbers = [1, 2, 3, 4, 5]
   squared = [x**2 for x in numbers if x % 2 == 0]
   print(squared)
   ```

### Medium Questions
4. Explain the difference between list comprehension and generator expression with examples.
5. How would you create a dictionary mapping numbers to their cubes for numbers from 1 to 5 using dictionary comprehension?
6. Write a nested list comprehension to flatten a 2D list into a 1D list.
7. Create a set comprehension that generates all possible pairs of numbers from two lists.

### Hard Questions
8. Write a comprehension that generates a dictionary where keys are words from a sentence and values are lists of their positions in the sentence.
9. Create a nested dictionary comprehension that groups words by their length and first letter.
10. Implement a matrix transposition (rows become columns and vice versa) using list comprehension.

## Iterators & Generators

### Easy Questions
1. What is the difference between an iterator and an iterable in Python?
2. How do you create a simple iterator class in Python?
3. What will be the output of the following code?
   ```python
   def simple_generator():
       yield 1
       yield 2
       yield 3
   
   gen = simple_generator()
   print(next(gen))
   print(next(gen))
   ```

### Medium Questions
4. Explain the purpose of the `yield` keyword in Python generators with an example.
5. How would you implement a generator function that produces Fibonacci numbers?
6. Write a generator function that reads a large file line by line efficiently.
7. Implement an iterator class that produces prime numbers up to a given limit.

### Hard Questions
8. Create a generator that implements a sliding window over a sequence with configurable window size and step.
9. Implement a generator that performs a breadth-first traversal of a tree structure.
10. Write a coroutine (generator-based) that can be used for processing a stream of data with backpressure handling.

## Lambda Functions

### Easy Questions
1. What is a lambda function in Python and how does it differ from a regular function?
2. How would you use a lambda function to sort a list of tuples by the second element?
3. What will be the output of the following code?
   ```python
   add = lambda x, y: x + y
   print(add(3, 5))
   ```

### Medium Questions
4. Explain how lambda functions can be used with higher-order functions like `map()`, `filter()`, and `reduce()`.
5. Write a lambda function that checks if a number is prime.
6. How would you use a lambda function to sort a list of strings by their last character?
7. Create a lambda function that returns another lambda function for calculating powers of a number.

### Hard Questions
8. Implement a simple calculator that uses lambda functions to perform different operations based on user input.
9. Create a system of lambda functions that implement function composition (where the output of one function becomes the input of another).
10. Write a lambda-based solution for the map-reduce pattern to count word frequencies in a list of sentences.

## Higher-order Functions

### Easy Questions
1. What are higher-order functions in Python?
2. How would you use the `map()` function to convert a list of strings to integers?
3. What will be the output of the following code?
   ```python
   numbers = [1, 2, 3, 4, 5]
   result = list(filter(lambda x: x % 2 == 0, numbers))
   print(result)
   ```

### Medium Questions
4. Explain the difference between `map()`, `filter()`, and `reduce()` functions with examples.
5. How would you implement a function that applies multiple transformations to data in sequence using higher-order functions?
6. Write a function that uses `reduce()` to find the maximum value in a list without using the built-in `max()` function.
7. Create a function that returns another function for filtering elements based on multiple criteria.

### Hard Questions
8. Implement a function that composes an arbitrary number of functions, where each function takes a single argument.
9. Create a higher-order function that implements memoization for any given function.
10. Write a higher-order function that implements a simple MapReduce framework for parallel processing of data.

## Decorators & Closures

### Easy Questions
1. What is a closure in Python and how does it work?
2. How would you create a simple decorator that prints the function name before and after execution?
3. What will be the output of the following code?
   ```python
   def outer_function(x):
       def inner_function(y):
           return x + y
       return inner_function
   
   closure = outer_function(10)
   print(closure(5))
   ```

### Medium Questions
4. Explain the concept of decorator chaining with an example.
5. How would you create a decorator that measures the execution time of a function?
6. Write a decorator that limits the rate at which a function can be called (e.g., not more than once per second).
7. Implement a decorator that adds logging capabilities to a function, recording arguments, return values, and exceptions.

### Hard Questions
8. Create a decorator that implements retry logic with exponential backoff for functions that might fail temporarily.
9. Implement a caching decorator that allows for configurable cache expiration times.
10. Write a decorator that transforms a synchronous function into an asynchronous one that runs in a separate thread.

## Context Managers

### Easy Questions
1. What is a context manager in Python and what problem does it solve?
2. How do you create a simple context manager using the `with` statement?
3. What will be the output of the following code?
   ```python
   with open('example.txt', 'w') as f:
       f.write('Hello, World!')
   print('File closed:', f.closed)
   ```

### Medium Questions
4. Explain the difference between implementing a context manager using a class with `__enter__` and `__exit__` methods versus using the `contextlib.contextmanager` decorator.
5. How would you create a context manager for managing database connections?
6. Write a context manager that suppresses specific exceptions and logs them.
7. Implement a context manager that temporarily changes the working directory.

### Hard Questions
8. Create a context manager that provides transactional behavior for a set of operations, with the ability to commit or rollback changes.
9. Implement a context manager for managing a pool of resources (like connections or threads) with proper allocation and cleanup.
10. Write a nested context manager system that manages both file I/O and exception handling with proper cleanup in all cases.

## Multithreading & Multiprocessing

### Easy Questions
1. What is the difference between multithreading and multiprocessing in Python?
2. How would you create and start a new thread in Python?
3. What will be the output of the following code?
   ```python
   import threading
   
   def print_numbers():
       for i in range(3):
           print(i)
   
   thread = threading.Thread(target=print_numbers)
   thread.start()
   print('Main thread')
   ```

### Medium Questions
4. Explain the Global Interpreter Lock (GIL) in Python and its impact on multithreaded programs.
5. How would you use a thread pool to execute multiple tasks concurrently?
6. Write a program that uses multiprocessing to calculate the sum of squares for a large list of numbers.
7. Implement a producer-consumer pattern using threads and a thread-safe queue.

### Hard Questions
8. Create a system that combines multithreading and multiprocessing for a data processing pipeline with optimal performance.
9. Implement a thread-safe singleton pattern that works correctly in a multithreaded environment.
10. Write a program that uses process pools and inter-process communication to implement a distributed map-reduce operation.