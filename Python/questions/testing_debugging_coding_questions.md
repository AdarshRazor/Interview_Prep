# 🛠️ Testing & Debugging - Coding Practice Questions

## Unit Testing (unittest, pytest)

### Easy Questions
1. Write a function that creates a simple unit test for a function that adds two numbers.
   ```python
   # Example:
   # Input: add_function that takes two parameters and returns their sum
   # Output: A unittest.TestCase class with test methods that verify the function works correctly
   ```

2. Create a test function using pytest that verifies a string manipulation function works as expected.
   ```python
   # Example:
   # Input: reverse_string function that reverses a string
   # Output: A pytest test function that checks if 'hello' becomes 'olleh'
   ```

3. Implement a test case that checks for expected exceptions when invalid inputs are provided.
   ```python
   # Example:
   # Input: divide function that should raise ZeroDivisionError when denominator is zero
   # Output: Test case that verifies the exception is raised with appropriate inputs
   ```

### Medium Questions
4. Write a test suite that uses pytest fixtures to set up and tear down resources for multiple tests.
   ```python
   # Example:
   # Input: Database connection function that needs testing
   # Output: Pytest fixture that creates a test database and test functions that use it
   ```

5. Create a test function that uses mocking to test a function that makes API calls without actually calling the API.
   ```python
   # Example:
   # Input: get_weather function that calls a weather API
   # Output: Test that mocks the API response and verifies function behavior
   ```

6. Implement a parameterized test that runs the same test logic with multiple sets of inputs and expected outputs.
   ```python
   # Example:
   # Input: calculate_tax function that computes tax based on income
   # Output: Parameterized test that checks multiple income/tax pairs
   ```

7. Write a test class that uses setUp and tearDown methods to manage test state for a class that interacts with files.
   ```python
   # Example:
   # Input: FileManager class that reads and writes files
   # Output: TestCase with setUp that creates test files and tearDown that removes them
   ```

### Hard Questions
8. Create a comprehensive test suite for a class that implements a custom data structure (e.g., binary tree).
   ```python
   # Example:
   # Input: BinaryTree class with methods for insertion, deletion, and traversal
   # Output: Test suite that verifies all operations work correctly with various inputs
   ```

9. Implement a test framework that measures code coverage and generates coverage reports for a module.
   ```python
   # Example:
   # Input: Module with multiple functions
   # Output: Test runner that executes tests and reports which lines of code were executed
   ```

10. Write an integration test suite that tests the interaction between multiple components of a system.
    ```python
    # Example:
    # Input: User authentication and authorization system with multiple components
    # Output: Tests that verify the entire workflow from login to accessing protected resources
    ```

## Debugging (pdb, trace)

### Easy Questions
1. Write a function that demonstrates how to use pdb to set a breakpoint and inspect variables.
   ```python
   # Example:
   # Input: A function with a logical error
   # Output: Modified function with pdb.set_trace() at the appropriate location
   ```

2. Create a script that shows how to use the Python debugger to step through a loop and examine each iteration.
   ```python
   # Example:
   # Input: Function with a for loop that processes items
   # Output: Script with debugging commands that allow inspection of each iteration
   ```

3. Implement a function that uses try-except blocks with logging to help debug runtime errors.
   ```python
   # Example:
   # Input: Function that might raise exceptions
   # Output: Function with try-except blocks that log detailed error information
   ```

### Medium Questions
4. Write a decorator that can be applied to functions to log entry and exit points, arguments, and return values.
   ```python
   # Example:
   # Input: Regular functions that need debugging
   # Output: Decorator that can be applied to log function execution details
   ```

5. Create a context manager that measures and reports the execution time of code blocks to identify performance bottlenecks.
   ```python
   # Example:
   # Input: Code blocks that might have performance issues
   # Output: Context manager that times execution and reports statistics
   ```

6. Implement a debugging utility that can trace recursive function calls and display the call stack at each level.
   ```python
   # Example:
   # Input: Recursive function like factorial or Fibonacci
   # Output: Utility that shows each recursive call with its arguments and return value
   ```

7. Write a function that uses the sys.settrace() hook to monitor variable changes during program execution.
   ```python
   # Example:
   # Input: Function where variables change unexpectedly
   # Output: Trace function that reports when specific variables change value
   ```

### Hard Questions
8. Create a custom debugging framework that can be used to debug multi-threaded applications by tracking thread interactions.
   ```python
   # Example:
   # Input: Multi-threaded application with race conditions
   # Output: Framework that logs thread operations and helps identify synchronization issues
   ```

9. Implement a memory profiler that can identify memory leaks in a long-running Python application.
   ```python
   # Example:
   # Input: Application that gradually consumes more memory
   # Output: Profiler that tracks object creation and destruction to find leaks
   ```

10. Write a post-mortem debugging tool that can analyze a program crash and provide detailed information about the state of the program at the time of the crash.
    ```python
    # Example:
    # Input: Program that occasionally crashes
    # Output: Tool that captures state at crash time and generates a comprehensive report
    ```