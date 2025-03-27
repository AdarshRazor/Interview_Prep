# 🔥Advanced Python - Answers

## List, Dictionary, and Set Comprehensions

### Easy Questions
1. List comprehension is a concise way to create lists based on existing iterables. Unlike traditional for loops, list comprehensions are more readable and often faster for simple operations. They combine the for loop and list creation into a single line.

2. Creating a list of squares from 1 to 10:
   ```python
   squares = [x**2 for x in range(1, 11)]
   ```

3. The output will be [4, 16]. The comprehension filters even numbers (x % 2 == 0) from the list [1, 2, 3, 4, 5] and squares them, resulting in [2², 4²].

### Medium Questions
4. List comprehension vs generator expression:
   ```python
   # List comprehension - creates entire list in memory
   squares = [x**2 for x in range(1000)]
   
   # Generator expression - generates values on-demand
   squares_gen = (x**2 for x in range(1000))
   ```
   Generator expressions are memory-efficient for large sequences.

5. Dictionary comprehension for cubes:
   ```python
   cubes = {x: x**3 for x in range(1, 6)}
   # Result: {1: 1, 2: 8, 3: 27, 4: 64, 5: 125}
   ```

6. Flattening a 2D list:
   ```python
   matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
   flattened = [num for row in matrix for num in row]
   # Result: [1, 2, 3, 4, 5, 6, 7, 8, 9]
   ```

7. Set comprehension for pairs:
   ```python
   list1 = [1, 2]
   list2 = [3, 4]
   pairs = {(x, y) for x in list1 for y in list2}
   # Result: {(1, 3), (1, 4), (2, 3), (2, 4)}
   ```

### Hard Questions
8. Word position dictionary:
   ```python
   def word_positions(sentence):
       return {word: [i for i, w in enumerate(sentence.split()) if w == word]
               for word in set(sentence.split())}
   
   # Example:
   # sentence = "the cat and the dog"
   # Result: {'the': [0, 3], 'cat': [1], 'and': [2], 'dog': [4]}
   ```

9. Grouping words by length and first letter:
   ```python
   words = ['apple', 'banana', 'ant', 'bear', 'cat']
   grouped = {length: {letter: [word for word in words 
                              if len(word) == length and word.startswith(letter)]
                      for letter in set(w[0] for w in words if len(w) == length)}
             for length in set(len(w) for w in words)}
   ```

10. Matrix transposition:
    ```python
    matrix = [[1, 2, 3], [4, 5, 6]]
    transposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]
    # Result: [[1, 4], [2, 5], [3, 6]]
    ```

## Iterators & Generators

### Easy Questions
1. Iterator vs Iterable differences:
   - Iterable: An object that can be "iterated over" (e.g., lists, strings)
   - Iterator: An object that keeps track of state and produces next value using __next__()

2. Simple iterator class:
   ```python
   class Counter:
       def __init__(self, limit):
           self.limit = limit
           self.counter = 0
       
       def __iter__(self):
           return self
       
       def __next__(self):
           if self.counter < self.limit:
               self.counter += 1
               return self.counter
           raise StopIteration
   ```

3. The output will be:
   ```
   1
   2
   ```
   The generator yields values one at a time, and next() retrieves them sequentially.

### Medium Questions
4. The yield keyword:
   ```python
   def number_generator(n):
       for i in range(n):
           yield i
           # State is saved and execution is paused
           # Next call resumes from here
   ```
   yield pauses function execution and returns a value, maintaining state between calls.

5. Fibonacci generator:
   ```python
   def fibonacci_generator():
       a, b = 0, 1
       while True:
           yield a
           a, b = b, a + b
   ```

6. Efficient file reading generator:
   ```python
   def read_large_file(file_path):
       with open(file_path) as f:
           while True:
               line = f.readline()
               if not line:
                   break
               yield line.strip()
   ```

7. Prime number iterator:
   ```python
   class PrimeIterator:
       def __init__(self, limit):
           self.limit = limit
           self.num = 2
       
       def is_prime(self, n):
           return all(n % i != 0 for i in range(2, int(n**0.5) + 1))
       
       def __iter__(self):
           return self
       
       def __next__(self):
           while self.num <= self.limit:
               if self.is_prime(self.num):
                   result = self.num
                   self.num += 1
                   return result
               self.num += 1
           raise StopIteration
   ```

### Hard Questions
8. Sliding window generator:
   ```python
   def sliding_window(sequence, window_size, step=1):
       n = len(sequence)
       for i in range(0, n - window_size + 1, step):
           yield sequence[i:i + window_size]
   
   # Example:
   # list(sliding_window([1,2,3,4,5], 3, 1))
   # Result: [[1,2,3], [2,3,4], [3,4,5]]
   ```