# Core Python Concepts - Coding Practice Questions

## Data Types & Structures

### Easy Questions
1. Write a function that takes a list of integers and returns a new list with only the even numbers.
   ```python
   # Example:
   # Input: [1, 2, 3, 4, 5, 6]
   # Output: [2, 4, 6]
   ```

2. Create a function that counts the frequency of each character in a string and returns a dictionary with the results.
   ```python
   # Example:
   # Input: "hello"
   # Output: {"h": 1, "e": 1, "l": 2, "o": 1}
   ```

3. Write a function that takes two lists and returns a new list containing elements that appear in both lists.
   ```python
   # Example:
   # Input: [1, 2, 3, 4], [3, 4, 5, 6]
   # Output: [3, 4]
   ```

### Medium Questions
4. Implement a function that flattens a nested list structure (lists within lists) into a single flat list.
   ```python
   # Example:
   # Input: [1, [2, 3], [4, [5, 6]]]
   # Output: [1, 2, 3, 4, 5, 6]
   ```

5. Write a function that finds all pairs of integers in a list that sum up to a specified target value.
   ```python
   # Example:
   # Input: [1, 4, 2, 7, 5, 3], target=9
   # Output: [(2, 7), (4, 5)]
   ```

6. Create a function that rotates elements of a list to the right by k steps.
   ```python
   # Example:
   # Input: [1, 2, 3, 4, 5], k=2
   # Output: [4, 5, 1, 2, 3]
   ```

7. Implement a function that performs a deep comparison of two dictionaries (including nested dictionaries).
   ```python
   # Example:
   # Input: {"a": 1, "b": {"c": 2}}, {"a": 1, "b": {"c": 2}}
   # Output: True
   ```

### Hard Questions
8. Implement a LRU (Least Recently Used) cache with a specified capacity using dictionaries.
   ```python
   # Example usage:
   # cache = LRUCache(2)
   # cache.put(1, 1)  # cache is {1=1}
   # cache.put(2, 2)  # cache is {1=1, 2=2}
   # cache.get(1)     # return 1
   # cache.put(3, 3)  # LRU key was 2, cache is {1=1, 3=3}
   # cache.get(2)     # returns -1 (not found)
   ```

9. Write a function that finds the longest substring without repeating characters in a given string.
   ```python
   # Example:
   # Input: "abcabcbb"
   # Output: "abc" (or "cab" or "abc" depending on implementation)
   ```

10. Implement a data structure that supports efficient insertion, deletion, and random access of elements, as well as efficient computation of the median element.
    ```python
    # Example usage:
    # median_finder = MedianFinder()
    # median_finder.add_num(1)
    # median_finder.add_num(2)
    # median_finder.find_median()  # returns 1.5
    # median_finder.add_num(3)
    # median_finder.find_median()  # returns 2
    ```

## Control Structures

### Easy Questions
1. Write a function that prints the multiplication table for a given number from 1 to 10.
   ```python
   # Example:
   # Input: 5
   # Output:
   # 5 x 1 = 5
   # 5 x 2 = 10
   # ...
   # 5 x 10 = 50
   ```

2. Create a function that prints a pattern of stars (*) forming a right-angled triangle with n rows.
   ```python
   # Example:
   # Input: 4
   # Output:
   # *
   # **
   # ***
   # ****
   ```

3. Write a function that calculates the sum of all numbers from 1 to n that are divisible by either 3 or 5.
   ```python
   # Example:
   # Input: 10
   # Output: 33 (3 + 5 + 6 + 9 + 10)
   ```

### Medium Questions
4. Implement a function that generates all possible combinations of k elements from a list of n elements.
   ```python
   # Example:
   # Input: [1, 2, 3, 4], k=2
   # Output: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
   ```

5. Create a function that simulates a simple rock-paper-scissors game where the user plays against the computer for n rounds.
   ```python
   # Example:
   # Input: 3 (rounds)
   # Output: Interactive game with 3 rounds and final score
   ```

6. Write a function that implements the Sieve of Eratosthenes algorithm to find all prime numbers up to n.
   ```python
   # Example:
   # Input: 20
   # Output: [2, 3, 5, 7, 11, 13, 17, 19]
   ```

7. Implement a function that converts a decimal number to its binary, octal, and hexadecimal representations.
   ```python
   # Example:
   # Input: 42
   # Output: {"binary": "101010", "octal": "52", "hexadecimal": "2a"}
   ```

### Hard Questions
8. Create a function that solves the Tower of Hanoi puzzle for n disks, printing each move.
   ```python
   # Example:
   # Input: 3
   # Output: Series of moves to solve the puzzle
   ```

9. Implement a function that generates all valid combinations of n pairs of parentheses.
   ```python
   # Example:
   # Input: 3
   # Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]
   ```

10. Write a function that implements the A* pathfinding algorithm to find the shortest path in a 2D grid from a start point to an end point, avoiding obstacles.
    ```python
    # Example:
    # Input: Grid with start, end, and obstacles
    # Output: Shortest path or indication that no path exists
    ```

## Functions & Scope

### Easy Questions
1. Write a function that calculates the factorial of a number using both iterative and recursive approaches.
   ```python
   # Example:
   # Input: 5
   # Output: 120
   ```

2. Create a function that takes a variable number of arguments and returns their sum.
   ```python
   # Example:
   # Input: sum_all(1, 2, 3, 4)
   # Output: 10
   ```

3. Write a function that takes another function as an argument and applies it to each element of a list.
   ```python
   # Example:
   # Input: apply_function([1, 2, 3], lambda x: x*2)
   # Output: [2, 4, 6]
   ```

### Medium Questions
4. Implement a function that returns a closure for calculating powers of a given base.
   ```python
   # Example:
   # power_of_two = power_factory(2)
   # power_of_two(3)  # returns 8 (2^3)
   # power_of_three = power_factory(3)
   # power_of_three(2)  # returns 9 (3^2)
   ```

5. Create a decorator that caches the results of a function call to avoid redundant calculations.
   ```python
   # Example:
   # @cache_results
   # def fibonacci(n):
   #     if n <= 1:
   #         return n
   #     return fibonacci(n-1) + fibonacci(n-2)
   ```

6. Write a function that implements a simple calculator supporting addition, subtraction, multiplication, and division using higher-order functions.
   ```python
   # Example:
   # Input: calculator("add", 5, 3)
   # Output: 8
   ```

7. Implement a function that uses generators to produce an infinite sequence of prime numbers.
   ```python
   # Example:
   # primes = prime_generator()
   # [next(primes) for _ in range(5)]  # returns [2, 3, 5, 7, 11]
   ```

### Hard Questions
8. Create a decorator that limits the rate at which a function can be called (e.g., not more than once per second).
   ```python
   # Example:
   # @rate_limited(1)  # 1 call per second
   # def fetch_data():
   #     # API call or other resource-intensive operation
   #     pass
   ```

9. Implement a function that uses currying to transform a function that takes multiple arguments into a sequence of functions that each take a single argument.
   ```python
   # Example:
   # add = lambda x, y, z: x + y + z
   # curried_add = curry(add)
   # curried_add(1)(2)(3)  # returns 6
   ```

10. Write a function that implements a simple dependency injection system for managing function dependencies.
    ```python
    # Example:
    # @inject("database", "logger")
    # def process_data(database, logger):
    #     data = database.get_data()
    #     logger.log("Data processed")
    #     return data
    ```

## OOP: Classes and Objects

### Easy Questions
1. Create a simple `Rectangle` class with attributes for width and height, and methods to calculate area and perimeter.
   ```python
   # Example:
   # rect = Rectangle(5, 10)
   # rect.area()  # returns 50
   # rect.perimeter()  # returns 30
   ```

2. Implement a `BankAccount` class with methods for deposit, withdrawal, and checking balance.
   ```python
   # Example:
   # account = BankAccount(1000)  # Initial balance
   # account.deposit(500)
   # account.withdraw(200)
   # account.get_balance()  # returns 1300
   ```

3. Write a `Person` class with attributes for name and age, and a method to introduce the person.
   ```python
   # Example:
   # person = Person("Alice", 30)
   # person.introduce()  # returns "Hello, my name is Alice and I am 30 years old."
   ```

### Medium Questions
4. Create a `Vehicle` class and subclasses `Car`, `Motorcycle`, and `Truck` with appropriate attributes and methods demonstrating inheritance.
   ```python
   # Example:
   # car = Car("Toyota", "Camry", 2020, 4)
   # car.get_info()  # returns "2020 Toyota Camry with 4 doors"
   ```

5. Implement a `Stack` class using a list with methods for push, pop, peek, and checking if the stack is empty.
   ```python
   # Example:
   # stack = Stack()
   # stack.push(1)
   # stack.push(2)
   # stack.pop()  # returns 2
   # stack.peek()  # returns 1
   ```

6. Write a `ShoppingCart` class that allows adding items, removing items, calculating the total price, and applying discounts.
   ```python
   # Example:
   # cart = ShoppingCart()
   # cart.add_item("Apple", 1.0, 3)
   # cart.add_item("Banana", 0.5, 2)
   # cart.total_price()  # returns 4.0
   ```

7. Create a `Matrix` class that supports addition, subtraction, and multiplication of matrices.
   ```python
   # Example:
   # m1 = Matrix([[1, 2], [3, 4]])
   # m2 = Matrix([[5, 6], [7, 8]])
   # m3 = m1 + m2  # Matrix([[6, 8], [10, 12]])
   ```

### Hard Questions
8. Implement a `FileSystem` class that simulates a simple file system with directories and files, supporting operations like creating, deleting, and moving files and directories.
   ```python
   # Example:
   # fs = FileSystem()
   # fs.mkdir("/home/user")
   # fs.create_file("/home/user/file.txt", "Hello, World!")
   # fs.read_file("/home/user/file.txt")  # returns "Hello, World!"
   ```

9. Create a `Database` class that implements a simple in-memory database with support for CRUD operations, indexing, and basic querying.
   ```python
   # Example:
   # db = Database()
   # db.create_table("users", ["id", "name", "age"])
   # db.insert("users", {"id": 1, "name": "Alice", "age": 30})
   # db.query("users", lambda row: row["age"] > 25)  # returns matching rows
   ```

10. Write a `ThreadPool` class that manages a pool of worker threads for executing tasks concurrently with proper synchronization.
    ```python
    # Example:
    # pool = ThreadPool(4)  # 4 worker threads
    # results = pool.map(lambda x: x*x, [1, 2, 3, 4, 5])
    # pool.shutdown()
    ```

## Error Handling

### Easy Questions
1. Write a function that safely converts a string to an integer, handling potential exceptions.
   ```python
   # Example:
   # Input: "123"
   # Output: 123
   # Input: "abc"
   # Output: None (or a default value)
   ```

2. Create a function that divides two numbers and handles the case when the divisor is zero.
   ```python
   # Example:
   # Input: 10, 2
   # Output: 5.0
   # Input: 10, 0
   # Output: "Cannot divide by zero"
   ```

3. Implement a function that reads a file and handles the case when the file does not exist.
   ```python
   # Example:
   # Input: "existing_file.txt"
   # Output: Content of the file
   # Input: "non_existent_file.txt"
   # Output: "File not found"
   ```

### Medium Questions
4. Write a function that validates user input for a registration form (username, email, password) with appropriate error handling.
   ```python
   # Example:
   # Input: {"username": "user1", "email": "invalid_email", "password": "pass"}
   # Output: {"email": "Invalid email format", "password": "Password too short"}
   ```

5. Create a custom exception hierarchy for a banking application with exceptions like `InsufficientFundsError`, `AccountNotFoundError`, etc.
   ```python
   # Example:
   # try:
   #     account.withdraw(1000)
   # except InsufficientFundsError as e:
   #     print(f"Error: {e}")
   ```

6. Implement a function that makes an HTTP request and handles different types of exceptions that might occur (connection errors, timeouts, etc.).
   ```python
   # Example:
   # Input: "https://api.example.com/data"
   # Output: Response data or appropriate error message
   ```

7. Write a function that parses a JSON string and handles potential parsing errors with detailed error messages.
   ```python
   # Example:
   # Input: "{\"name\": \"John\", \"age\": 30}"
   # Output: {"name": "John", "age": 30}
   # Input: "{\"name\": \"John\", age: 30}"
   # Output: "Invalid JSON: Expecting property name enclosed in double quotes"
   ```

### Hard Questions
8. Create a context manager for database connections that ensures proper opening and closing of connections, with transaction support and error handling.
   ```python
   # Example:
   # with DatabaseConnection("database.db") as conn:
   #     conn.execute("INSERT INTO users VALUES (?, ?)", ("John", 30))
   ```

9. Implement a retry decorator that automatically retries a function call when specific exceptions occur, with configurable retry count and delay.
   ```python
   # Example:
   # @retry(retries=3, delay=1, exceptions=[ConnectionError, TimeoutError])
   # def fetch_data(url):
   #     # Code that might fail temporarily
   #     pass
   ```

10. Write a comprehensive error handling system for a CLI application that processes files in batch, with proper logging, user feedback, and the ability to resume processing after failures.
    ```python
    # Example:
    # processor = BatchFileProcessor("input_dir", "output_dir")
    # processor.process_files()
    # processor.generate_report()
    ```