# Core Python Concepts - Answers

## Data Types & Structures

### Easy Questions
1. A list is mutable (can be modified after creation) and uses square brackets [], while a tuple is immutable (cannot be modified after creation) and uses parentheses (). Lists are typically used when the collection needs to be modified, while tuples are used for fixed collections.

2. There are three ways to create an empty dictionary in Python:
   - Using curly braces: `dict_1 = {}`
   - Using the dict() constructor: `dict_2 = dict()`
   - Using dict comprehension: `dict_3 = {x: x for x in []}`

3. The output will be "World". The string slicing s[7:12] starts at index 7 (inclusive) and ends at index 12 (exclusive), extracting the substring "World" from "Hello, World!".

### Medium Questions
4. The `is` operator checks if two objects have the same identity (same memory location), while `==` checks if two objects have the same value. Example:
   ```python
   a = [1, 2, 3]
   b = [1, 2, 3]
   c = a
   print(a == b)  # True (same value)
   print(a is b)  # False (different objects)
   print(a is c)  # True (same object)
   ```

5. To remove duplicates from a list while preserving order:
   ```python
   def remove_duplicates(lst):
       seen = set()
       return [x for x in lst if not (x in seen or seen.add(x))]
   ```

6. A shallow copy creates a new object but references the same nested objects, while a deep copy creates a new object and recursively creates copies of nested objects. Shallow copies are created using list.copy() or list[:], while deep copies require the copy.deepcopy() function.

7. To merge two dictionaries:
   ```python
   def merge_dicts(dict1, dict2):
       return {**dict1, **dict2}  # Python 3.5+
   ```

### Hard Questions
8. To find the most frequent element:
   ```python
   def most_frequent(lst):
       return max(set(lst), key=lst.count)
   ```

9. To check if strings are anagrams:
   ```python
   def are_anagrams(str1, str2):
       s1 = ''.join(c.lower() for c in str1 if c.isalnum())
       s2 = ''.join(c.lower() for c in str2 if c.isalnum())
       return sorted(s1) == sorted(s2)
   ```

10. A custom data structure combining list and set properties:
    ```python
    class OrderedSet:
        def __init__(self):
            self.items = []
            self.lookup = set()
        
        def add(self, item):
            if item not in self.lookup:
                self.items.append(item)
                self.lookup.add(item)
        
        def __contains__(self, item):
            return item in self.lookup
    ```

## Control Structures

### Easy Questions
1. `break` immediately exits the entire loop, while `continue` skips the rest of the current iteration and moves to the next iteration of the loop.

2. Program to print even numbers from 1 to 20:
   ```python
   for num in range(1, 21):
       if num % 2 == 0:
           print(num)
   ```

3. The output will be "A". Since x = 5 is greater than 3, the first condition is true, so "A" is printed. The elif and else blocks are skipped.

### Medium Questions
4. Fibonacci sequence program:
   ```python
   def fibonacci_10():
       a, b = 0, 1
       count = 0
       while count < 10:
           print(a)
           a, b = b, a + b
           count += 1
   ```

5. The `pass` statement is a null operation used as a placeholder when a statement is required syntactically but no code needs to be executed. Example:
   ```python
   def function_to_be_implemented_later():
       pass  # TODO: implement this function
   ```

6. Multiplication table program:
   ```python
   for i in range(1, 6):
       for j in range(1, 6):
           print(f"{i * j:2d}", end=" ")
       print()
   ```

7. Prime number checker:
   ```python
   def is_prime(n):
       if n < 2:
           return False
       for i in range(2, int(n ** 0.5) + 1):
           if n % i == 0:
               break
       else:
           return True
       return False
   ```

### Hard Questions
8. FizzBuzz in one line:
   ```python
   print('\n'.join('Fizz' * (i % 3 == 0) + 'Buzz' * (i % 5 == 0) or str(i) for i in range(1, 101)))
   ```

9. Simple ATM implementation:
   ```python
   class ATM:
       def __init__(self, balance=0):
           self.balance = balance

       def check_balance(self):
           return f"Current balance: ${self.balance}"

       def deposit(self, amount):
           if amount > 0:
               self.balance += amount
               return f"Deposited ${amount}. New balance: ${self.balance}"
           return "Invalid amount"

       def withdraw(self, amount):
           if 0 < amount <= self.balance:
               self.balance -= amount
               return f"Withdrawn ${amount}. New balance: ${self.balance}"
           return "Insufficient funds or invalid amount"
   ```

10. Binary search implementation:
    ```python
    def binary_search(arr, target):
        left, right = 0, len(arr) - 1
        while left <= right:
            mid = (left + right) // 2
            if arr[mid] == target:
                return mid
            elif arr[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return -1
    ```