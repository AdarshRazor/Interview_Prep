# 🔥Advanced Python - Coding Practice Questions

## List, Dictionary, and Set Comprehensions

### Easy Questions
1. Write a function that uses list comprehension to filter out all odd numbers from a given list.
   ```python
   # Example:
   # Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
   # Output: [2, 4, 6, 8]
   ```

2. Create a function that uses dictionary comprehension to create a dictionary where keys are numbers from 1 to n and values are their squares.
   ```python
   # Example:
   # Input: 5
   # Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
   ```

3. Write a function that uses set comprehension to find all unique vowels in a given string.
   ```python
   # Example:
   # Input: "Hello World"
   # Output: {'e', 'o'}
   ```

### Medium Questions
4. Implement a function that uses nested list comprehension to transpose a matrix (2D list).
   ```python
   # Example:
   # Input: [[1, 2, 3], [4, 5, 6]]
   # Output: [[1, 4], [2, 5], [3, 6]]
   ```

5. Create a function that uses dictionary comprehension to invert a dictionary (swap keys and values).
   ```python
   # Example:
   # Input: {"a": 1, "b": 2, "c": 3}
   # Output: {1: "a", 2: "b", 3: "c"}
   ```

6. Write a function that uses list comprehension to flatten a nested list structure.
   ```python
   # Example:
   # Input: [[1, 2], [3, 4, [5, 6]], 7]
   # Output: [1, 2, 3, 4, 5, 6, 7]
   ```

7. Implement a function that uses dictionary comprehension to filter a dictionary based on both keys and values.
   ```python
   # Example:
   # Input: {"a": 1, "b": 2, "c": 3, "d": 4}, filter: key is vowel and value is even
   # Output: {"a": 4}
   ```

### Hard Questions
8. Create a function that uses comprehensions to generate a Pascal's triangle up to n rows.
   ```python
   # Example:
   # Input: 5
   # Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
   ```

9. Write a function that uses nested comprehensions to create a dictionary where keys are words and values are dictionaries mapping each character to its frequency.
   ```python
   # Example:
   # Input: ["hello", "world"]
   # Output: {"hello": {"h": 1, "e": 1, "l": 2, "o": 1}, "world": {"w": 1, "o": 1, "r": 1, "l": 1, "d": 1}}
   ```

10. Implement a function that uses comprehensions to create a sparse matrix representation (dictionary of dictionaries) from a 2D list.
    ```python
    # Example:
    # Input: [[0, 0, 1], [2, 0, 0], [0, 3, 0]]
    # Output: {0: {2: 1}, 1: {0: 2}, 2: {1: 3}}
    ```

## Iterators & Generators

### Easy Questions
1. Write a generator function that yields the first n Fibonacci numbers.
   ```python
   # Example:
   # Input: 5
   # Output: 0, 1, 1, 2, 3
   ```

2. Create an iterator class that iterates through a string in reverse.
   ```python
   # Example:
   # Input: "hello"
   # Output: "o", "l", "l", "e", "h"
   ```

3. Implement a generator function that yields all even numbers up to a given limit.
   ```python
   # Example:
   # Input: 10
   # Output: 0, 2, 4, 6, 8, 10
   ```

### Medium Questions
4. Write a generator function that implements the range function with floating-point steps.
   ```python
   # Example:
   # Input: start=0, stop=1, step=0.2
   # Output: 0, 0.2, 0.4, 0.6, 0.8
   ```

5. Create an iterator class that generates prime numbers up to a specified limit.
   ```python
   # Example:
   # Input: 20
   # Output: 2, 3, 5, 7, 11, 13, 17, 19
   ```

6. Implement a generator function that reads a large file in chunks of a specified size.
   ```python
   # Example:
   # Input: file_path="large_file.txt", chunk_size=1024
   # Output: yields chunks of the file content
   ```

7. Write a generator function that implements a sliding window over a sequence.
   ```python
   # Example:
   # Input: sequence=[1, 2, 3, 4, 5], window_size=3
   # Output: [1, 2, 3], [2, 3, 4], [3, 4, 5]
   ```

### Hard Questions
8. Create a generator that performs a breadth-first traversal of a tree structure.
   ```python
   # Example:
   # Input: tree = Node(1, [Node(2), Node(3, [Node(4), Node(5)])])
   # Output: 1, 2, 3, 4, 5
   ```

9. Implement a generator-based pipeline for processing data with multiple transformation stages.
   ```python
   # Example:
   # pipeline = compose_generators(read_data, parse_data, transform_data, filter_data)
   # for item in pipeline("data.txt"):
   #     print(item)
   ```

10. Write a coroutine-based producer-consumer system with backpressure handling.
    ```python
    # Example:
    # producer = data_producer("data_source")
    # consumer = data_consumer()
    # run_pipeline(producer, consumer, max_buffer_size=100)
    ```

## Lambda Functions

### Easy Questions
1. Write a function that uses lambda to sort a list of tuples by the second element.
   ```python
   # Example:
   # Input: [("a", 3), ("b", 1), ("c", 2)]
   # Output: [("b", 1), ("c", 2), ("a", 3)]
   ```

2. Create a function that uses lambda with map to convert a list of strings to integers.
   ```python
   # Example:
   # Input: ["1", "2", "3", "4"]
   # Output: [1, 2, 3, 4]
   ```

3. Implement a function that uses lambda with filter to remove all strings that have less than n characters.
   ```python
   # Example:
   # Input: ["apple", "banana", "cherry", "date", "elderberry"], n=6
   # Output: ["banana", "elderberry"]
   ```

### Medium Questions
4. Write a function that uses lambda with sorted to sort a list of strings by their last character.
   ```python
   # Example:
   # Input: ["apple", "banana", "cherry"]
   # Output: ["banana", "apple", "cherry"]
   ```

5. Create a function that uses lambda with reduce to find the product of all numbers in a list.
   ```python
   # Example:
   # Input: [1, 2, 3, 4]
   # Output: 24
   ```

6. Implement a function that uses lambda to create a custom key function for sorting dictionaries by a specific value.
   ```python
   # Example:
   # Input: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}], key="age"
   # Output: [{"name": "Bob", "age": 25}, {"name": "Alice", "age": 30}]
   ```

7. Write a function that uses lambda to implement a simple calculator with operations as strings.
   ```python
   # Example:
   # Input: 5, "+", 3
   # Output: 8
   ```

### Hard Questions
8. Create a function that implements function composition using lambda functions.
   ```python
   # Example:
   # Input: [lambda x: x + 1, lambda x: x * 2, lambda x: x ** 2], initial_value=3
   # Output: 64 ((3 + 1) * 2) ^ 2
   ```

9. Implement a function that uses lambda to create a system of partial functions with currying.
   ```python
   # Example:
   # add = lambda x, y, z: x + y + z
   # add_5 = curry(add, 5)
   # add_5_10 = add_5(10)
   # add_5_10(15) # returns 30
   ```

10. Write a function that implements a simple MapReduce framework using lambda functions.
    ```python
    # Example:
    # Input: data=["hello world", "world hello"], map_fn=lambda x: [(w, 1) for w in x.split()], reduce_fn=lambda x, y: x + y
    # Output: {"hello": 2, "world": 2}
    ```

## Higher-order Functions

### Easy Questions
1. Write a function that uses map to convert temperatures from Celsius to Fahrenheit.
   ```python
   # Example:
   # Input: [0, 10, 20, 30]
   # Output: [32, 50, 68, 86]
   ```

2. Create a function that uses filter to find all palindromes in a list of strings.
   ```python
   # Example:
   # Input: ["level", "hello", "radar", "world"]
   # Output: ["level", "radar"]
   ```

3. Implement a function that uses reduce to find the maximum value in a list.
   ```python
   # Example:
   # Input: [5, 8, 3, 1, 9, 2]
   # Output: 9
   ```

### Medium Questions
4. Write a function that combines map and filter to find the squares of all even numbers in a list.
   ```python
   # Example:
   # Input: [1, 2, 3, 4, 5, 6]
   # Output: [4, 16, 36]
   ```

5. Create a function that implements the compose function, which takes multiple functions and returns a new function that applies them in sequence.
   ```python
   # Example:
   # Input: compose(lambda x: x + 1, lambda x: x * 2)(3)
   # Output: 8 ((3 * 2) + 1)
   ```

6. Implement a function that uses higher-order functions to implement a simple query system for filtering and transforming data.
   ```python
   # Example:
   # Input: query([{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]).where(lambda x: x["age"] > 25).select(lambda x: x["name"])
   # Output: ["Alice"]
   ```

7. Write a function that implements a memoization decorator for optimizing recursive functions.
   ```python
   # Example:
   # @memoize
   # def fibonacci(n):
   #     if n <= 1: return n
   #     return fibonacci(n-1) + fibonacci(n-2)
   # fibonacci(30) # returns quickly
   ```

### Hard Questions
8. Create a function that implements a simple event system with callbacks using higher-order functions.
   ```python
   # Example:
   # event_system = EventSystem()
   # event_system.on("data", lambda data: print(f"Received: {data}"))
   # event_system.emit("data", "Hello World")
   ```

9. Implement a function that creates a pipeline of transformations using higher-order functions.
   ```python
   # Example:
   # pipeline = Pipeline()
   # pipeline.add(lambda x: x + 1).add(lambda x: x * 2).add(lambda x: x ** 2)
   # pipeline.execute(3) # returns 64
   ```

10. Write a function that implements a simple dependency injection system using higher-order functions.
    ```python
    # Example:
    # @inject({"database": Database(), "logger": Logger()})
    # def process_data(database, logger):
    #     data = database.get_data()
    #     logger.log("Data processed")
    #     return data
    ```

## Decorators & Closures

### Easy Questions
1. Write a decorator that measures and prints the execution time of a function.
   ```python
   # Example:
   # @timing_decorator
   # def slow_function():
   #     time.sleep(1)
   # slow_function() # prints "Function slow_function took 1.001 seconds to execute"
   ```

2. Create a closure that maintains a counter of how many times a function has been called.
   ```python
   # Example:
   # counter = make_counter()
   # counter() # returns 1
   # counter() # returns 2
   ```

3. Implement a decorator that logs the function name and arguments when it's called.
   ```python
   # Example:
   # @log_function_call
   # def add(a, b):
   #     return a + b
   # add(3, 5) # logs "Function add called with args (3, 5) and kwargs {}"
   ```

### Medium Questions
4. Write a decorator that caches the results of a function call to avoid redundant calculations.
   ```python
   # Example:
   # @cache_results
   # def fibonacci(n):
   #     if n <= 1: return n
   #     return fibonacci(n-1) + fibonacci(n-2)
   ```

5. Create a decorator that retries a function a specified number of times if it raises an exception.
   ```python
   # Example:
   # @retry(max_attempts=3)
   # def unstable_function():
   #     if random.random() < 0.7:
   #         raise ValueError("Random failure")
   #     return "Success"
   ```

6. Implement a decorator that validates the arguments of a function based on type annotations.
   ```python
   # Example:
   # @validate_types
   # def process_data(name: str, age: int) -> str:
   #     return f"{name} is {age} years old"
   ```

7. Write a decorator that implements rate limiting for function calls.
   ```python
   # Example:
   # @rate_limit(calls=5, period=60)
   # def api_request(url):
   #     return requests.get(url)
   ```

### Hard Questions
8. Create a decorator that implements a simple aspect-oriented programming system with before, after, and around advice.
   ```python
   # Example:
   # @aspect(before=log_start, after=log_end, around=measure_time)
   # def process_data(data):
   #     return transform(data)
   ```

9. Implement a decorator that transforms a synchronous function to run asynchronously in a thread pool.
   ```python
   # Example:
   # @run_async
   # def cpu_intensive_task(data):
   #     # Long computation
   #     return result
   ```

10. Write a decorator system that implements method-level access control for a class-based API.
    ```python
    # Example:
    # class UserAPI:
    #     @requires_permission("admin")
    #     def delete_user(self, user_id):
    #         # Delete user
    #         pass
    ```

## Context Managers

### Easy Questions
1. Write a context manager that measures and prints the execution time of a block of code.
   ```python
   # Example:
   # with Timer() as timer:
   #     time.sleep(1)
   # print(f"Execution took {timer.elapsed} seconds")
   ```

2. Create a context manager that temporarily changes a directory and returns to the original directory afterward.
   ```python
   # Example:
   # with ChangeDirectory("/tmp"):
   #     # Operations in /tmp
   # # Back to original directory
   ```

3. Implement a context manager that suppresses specific exceptions and logs them.
   ```python
   # Example:
   # with SuppressExceptions(ValueError, ZeroDivisionError, log=True):
   #     result = 1 / 0  # This exception is suppressed and logged
   ```

### Medium Questions
4. Write a context manager for managing database connections with automatic commit or rollback.
   ```python
   # Example:
   # with DatabaseConnection("database.db") as conn:
   #     conn.execute("INSERT INTO users VALUES (?, ?)", ("John", 30))
   # # Connection is automatically committed and closed
   ```

5. Create a context manager that redirects stdout to a file temporarily.
   ```python
   # Example:
   # with RedirectOutput("output.txt"):
   #     print("This goes to the file")
   # print("This goes to stdout")
   ```

6. Implement a context manager that creates a temporary file and ensures it's deleted afterward.
   ```python
   # Example:
   # with TempFile() as temp_file:
   #     temp_file.write("Some data")
   #     # Use the temporary file
   # # File is automatically deleted
   ```

7. Write a context manager that implements a simple timer with pause and resume capabilities.
   ```python
   # Example:
   # with ResumeableTimer() as timer:
   #     # Do some work
   #     timer.pause()
   #     # Do something not timed
   #     timer.resume()
   #     # Continue timed work
   ```

### Hard Questions
8. Create a context manager that implements a transaction-like behavior for a set of operations with commit and rollback capabilities.
   ```python
   # Example:
   # with Transaction() as transaction:
   #     # Perform operations
   #     if error_condition:
   #         transaction.rollback()
   #     else:
   #         transaction.commit()
   ```

9. Implement a context manager for managing a pool of resources with proper allocation and cleanup.
   ```python
   # Example:
   # with ResourcePool(max_resources=5, resource_type=Connection) as pool:
   #     resource1 = pool.acquire()
   #     resource2 = pool.acquire()
   #     # Use resources
   # # All resources are automatically released
   ```

10. Write a nested context manager system that manages both file I/O and exception handling with proper cleanup in all cases.
    ```python
    # Example:
    # with FileManager("input.txt", "r") as input_file, FileManager("output.txt", "w") as output_file, ExceptionHandler() as handler:
    #     data = input_file.read()
    #     processed_data = process(data)
    #     output_file.write(processed_data)
    ```

## Multithreading & Multiprocessing

### Easy Questions
1. Write a function that uses threading to download multiple files concurrently.
   ```python
   # Example:
   # Input: ["http://example.com/file1.txt", "http://example.com/file2.txt"]
   # Output: Downloads all files concurrently
   ```

2. Create a function that uses multiprocessing to calculate the square of each number in a large list.
   ```python
   # Example:
   # Input: [1, 2, 3, 4, 5, ..., 1000000]
   # Output: [1, 4, 9, 16, 25, ..., 1000000000000]
   ```

3. Implement a function that uses a thread pool to execute multiple tasks concurrently.
   ```python
   # Example:
   # Input: [task1, task2, task3, task4]
   # Output: Results of all tasks executed concurrently
   ```

### Medium Questions
4. Write a function that implements a producer-consumer pattern using threads and a thread-safe queue.
   ```python
   # Example:
   # producer_consumer(producer_fn, consumer_fn, num_items=100, num_producers=2, num_consumers=3)
   ```

5. Create a function that uses multiprocessing to implement a parallel map operation for CPU-bound tasks.
   ```python
   # Example:
   # Input: parallel_map(lambda x: x**2, range(1000000), processes=4)
   # Output: Results of applying the function to each input in parallel
   ```

6. Implement a function that uses threading to create a simple web crawler that fetches multiple pages concurrently.
   ```python
   # Example:
   # Input: ["https://example.com", "https://example.org"], max_depth=2
   # Output: Content of all pages and their links up to max_depth
   ```

7. Write a function that uses multiprocessing to implement a parallel filter operation.
   ```python
   # Example:
   # Input: parallel_filter(lambda x: x % 2 == 0, range(1000000), processes=4)
   # Output: All even numbers in the range, computed in parallel
   ```

### Hard Questions
8. Create a thread pool implementation with a work stealing algorithm for load balancing.
   ```python
   # Example:
   # pool = WorkStealingThreadPool(num_workers=4)
   # results = pool.map(process_task, tasks)
   ```

9. Implement a distributed task queue system using multiprocessing and inter-process communication.
   ```python
   # Example:
   # task_queue = DistributedTaskQueue(num_workers=4)
   # task_queue.submit(task1)
   # task_queue.submit(task2)
   # results = task_queue.get_results()
   ```

10. Write a function that implements a parallel MapReduce framework using a combination of multithreading and multiprocessing.
    ```python
    # Example:
    # Input: map_reduce(map_fn, reduce_fn, data, num_mappers=4, num_reducers=2)
    # Output: Results of the MapReduce operation
    ```