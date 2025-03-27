# Core Python Concepts - Practice Questions

## Data Types & Structures

### Easy Questions
1. What is the difference between a list and a tuple in Python?
2. How do you create an empty dictionary in Python?
3. What will be the output of the following code?
   ```python
   s = "Hello, World!"
   print(s[7:12])
   ```

### Medium Questions
4. Explain the difference between `is` and `==` operators in Python with an example.
5. How would you remove duplicates from a list while preserving the original order?
6. What is the difference between a shallow copy and a deep copy of a list?
7. Write a Python function to merge two dictionaries.

### Hard Questions
8. Implement a function that finds the most frequent element in a list without using the `Counter` class.
9. Write a function to check if two strings are anagrams of each other, considering only alphanumeric characters and ignoring case.
10. Implement a custom data structure that combines the properties of a list and a set, allowing for O(1) lookups while maintaining insertion order.

## Control Structures

### Easy Questions
1. What is the difference between `break` and `continue` statements in Python loops?
2. Write a Python program to print all even numbers from 1 to 20 using a for loop.
3. What will be the output of the following code?
   ```python
   x = 5
   if x > 3:
       print("A")
   elif x > 7:
       print("B")
   else:
       print("C")
   ```

### Medium Questions
4. Write a Python program to print the first 10 numbers of the Fibonacci sequence using a while loop.
5. Explain the purpose of the `pass` statement in Python with an example.
6. Implement a nested loop to create a multiplication table for numbers 1 through 5.
7. Write a program that uses a for loop with an else clause to check if a number is prime.

### Hard Questions
8. Implement the FizzBuzz problem using list comprehension in a single line of code.
9. Write a program that simulates a simple ATM machine with options for checking balance, depositing, and withdrawing money using control structures.
10. Create a function that implements a binary search algorithm using loops instead of recursion.

## Functions & Scope

### Easy Questions
1. What is the difference between parameters and arguments in a function?
2. How do you define a function with default parameter values in Python?
3. What will be the output of the following code?
   ```python
   def greet(name):
       return f"Hello, {name}!"
   
   print(greet("Python"))
   ```

### Medium Questions
4. Explain the difference between local and global variables with an example.
5. How do you use `*args` and `**kwargs` in a function? Provide an example.
6. Write a recursive function to calculate the factorial of a number.
7. What is a lambda function? Write a lambda function to square a number and use it with the `map()` function.

### Hard Questions
8. Implement a decorator that measures and prints the execution time of a function.
9. Create a function that can accept any number of positional and keyword arguments, and returns a dictionary containing information about all the arguments passed.
10. Write a function that implements memoization to optimize the calculation of Fibonacci numbers.

## OOP: Classes and Objects

### Easy Questions
1. What are the four main principles of Object-Oriented Programming?
2. How do you define a class and create an instance of it in Python?
3. What is the purpose of the `__init__` method in a Python class?

### Medium Questions
4. Explain the concept of inheritance in Python with an example.
5. What is method overriding? Provide an example.
6. How do you implement encapsulation in Python using private attributes?
7. Explain the difference between class variables and instance variables with examples.

### Hard Questions
8. Implement a class hierarchy for a shape system with a base Shape class and derived classes like Circle, Rectangle, and Triangle, each with appropriate methods for calculating area and perimeter.
9. Create a class that implements a custom iterator that generates prime numbers up to a specified limit.
10. Design a class that implements the Singleton pattern, ensuring only one instance of the class can be created.

## Error Handling

### Easy Questions
1. What is the purpose of the `try-except` block in Python?
2. How do you catch multiple exceptions in a single except block?
3. What will be the output of the following code?
   ```python
   try:
       print(10/0)
   except ZeroDivisionError:
       print("Cannot divide by zero")
   ```

### Medium Questions
4. What is the difference between `except` and `finally` clauses in exception handling?
5. How do you create and raise custom exceptions in Python?
6. Write a program that handles both ValueError and TypeError exceptions when converting user input to an integer.
7. Explain the purpose of the `else` clause in a try-except block with an example.

### Hard Questions
8. Implement a context manager using the `__enter__` and `__exit__` methods that can be used with the `with` statement to handle file operations safely.
9. Create a decorator that wraps a function in a try-except block and logs any exceptions to a file with timestamp and traceback information.
10. Design an error handling system for a banking application that handles different types of exceptions (insufficient funds, invalid account, etc.) and provides appropriate user feedback.