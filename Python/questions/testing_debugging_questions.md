# 🛠️ Testing & Debugging - Practice Questions

## Unit Testing (unittest, pytest)

### Easy Questions
1. What is unit testing and why is it important in software development?
2. What are the key differences between unittest and pytest frameworks in Python?
3. What will be the output of the following code?
   ```python
   import unittest
   
   class SimpleTest(unittest.TestCase):
       def test_upper(self):
           self.assertEqual('hello'.upper(), 'HELLO')
       
       def test_isupper(self):
           self.assertTrue('HELLO'.isupper())
           self.assertFalse('Hello'.isupper())
   
   if __name__ == '__main__':
       unittest.main()
   ```

### Medium Questions
4. Explain the concept of test fixtures in pytest and how they differ from unittest's setUp and tearDown methods.
5. How would you use mocking to test functions that have external dependencies like API calls or database connections?
6. What are parameterized tests and how do you implement them in pytest?
7. Explain the difference between assertions and expectations in testing, and provide examples of when to use each.

### Hard Questions
8. Describe strategies for testing asynchronous code and handling concurrency in Python tests.
9. How would you design a comprehensive test suite for a complex application with multiple modules and dependencies?
10. Explain how to implement test-driven development (TDD) for a feature that requires integration with external systems.

## Debugging (pdb, trace)

### Easy Questions
1. What is the Python debugger (pdb) and how do you start a debugging session?
2. How do you set a breakpoint in your code using pdb?
3. What will be the output of the following debugging session?
   ```python
   # Code being debugged
   def multiply(a, b):
       result = a * b
       return result
   
   x = 5
   y = 7
   z = multiply(x, y)
   print(z)
   
   # Debugging session
   # (Pdb) break multiply
   # (Pdb) continue
   # (Pdb) p a
   # (Pdb) p b
   # (Pdb) n
   # (Pdb) p result
   ```

### Medium Questions
4. Explain the difference between stepping into, stepping over, and stepping out in a debugging session.
5. How would you use conditional breakpoints in pdb to debug complex loops or recursive functions?
6. What are post-mortem debugging techniques and when would you use them?
7. Explain how to use the Python trace module to understand program flow and identify performance bottlenecks.

### Hard Questions
8. Describe advanced debugging techniques for multi-threaded or multi-process applications in Python.
9. How would you debug memory leaks and resource management issues in a long-running Python application?
10. Explain how to design a custom debugging framework that integrates with existing logging systems for a large-scale distributed application.