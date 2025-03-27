# Data Structures & Algorithms - Coding Practice Questions

## Sorting Algorithms

### Easy Questions
1. Implement Bubble Sort algorithm to sort an array of integers in ascending order.
   ```python
   # Example:
   # Input: [64, 34, 25, 12, 22, 11, 90]
   # Output: [11, 12, 22, 25, 34, 64, 90]
   ```

2. Write a function to implement Selection Sort for sorting a list of strings alphabetically.
   ```python
   # Example:
   # Input: ["banana", "apple", "pear", "orange"]
   # Output: ["apple", "banana", "orange", "pear"]
   ```

3. Implement Insertion Sort to sort a list of integers in descending order.
   ```python
   # Example:
   # Input: [12, 11, 13, 5, 6]
   # Output: [13, 12, 11, 6, 5]
   ```

### Medium Questions
4. Implement the Merge Sort algorithm to sort an array of integers.
   ```python
   # Example:
   # Input: [38, 27, 43, 3, 9, 82, 10]
   # Output: [3, 9, 10, 27, 38, 43, 82]
   ```

5. Write a function to implement Quick Sort with the first element as pivot.
   ```python
   # Example:
   # Input: [10, 7, 8, 9, 1, 5]
   # Output: [1, 5, 7, 8, 9, 10]
   ```

6. Implement a function to sort a list of dictionaries based on a specific key.
   ```python
   # Example:
   # Input: [{"name": "John", "age": 25}, {"name": "Alice", "age": 22}, {"name": "Bob", "age": 30}], key="age"
   # Output: [{"name": "Alice", "age": 22}, {"name": "John", "age": 25}, {"name": "Bob", "age": 30}]
   ```

7. Implement Heap Sort algorithm to sort an array of integers.
   ```python
   # Example:
   # Input: [12, 11, 13, 5, 6, 7]
   # Output: [5, 6, 7, 11, 12, 13]
   ```

### Hard Questions
8. Implement a hybrid sorting algorithm that uses Insertion Sort for small subarrays and Merge Sort for larger ones.
   ```python
   # Example:
   # Input: [5, 2, 4, 6, 1, 3, 8, 7], threshold=4
   # Output: [1, 2, 3, 4, 5, 6, 7, 8]
   ```

9. Write a function to sort an almost sorted array (where each element is at most k positions away from its sorted position) efficiently.
   ```python
   # Example:
   # Input: [6, 5, 3, 2, 8, 10, 9], k=3
   # Output: [2, 3, 5, 6, 8, 9, 10]
   ```

10. Implement an external sort algorithm that can sort data that doesn't fit into memory (simulate with multiple smaller arrays).
    ```python
    # Example:
    # Input: [[10, 5, 2], [8, 1, 7], [6, 3, 9, 4]]
    # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    ```

## Searching Algorithms

### Easy Questions
1. Implement Linear Search to find the index of a given element in an array.
   ```python
   # Example:
   # Input: [10, 20, 80, 30, 60, 50, 110, 100, 130, 170], x=110
   # Output: 6
   ```

2. Write a function to implement Binary Search for finding an element in a sorted array.
   ```python
   # Example:
   # Input: [2, 3, 4, 10, 40], x=10
   # Output: 3
   ```

3. Implement a function to count occurrences of a number in a sorted array using Binary Search.
   ```python
   # Example:
   # Input: [1, 1, 2, 2, 2, 2, 3], x=2
   # Output: 4
   ```

### Medium Questions
4. Implement Jump Search to find an element in a sorted array.
   ```python
   # Example:
   # Input: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], x=55
   # Output: 10
   ```

5. Write a function to implement Interpolation Search for a uniformly distributed sorted array.
   ```python
   # Example:
   # Input: [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47], x=18
   # Output: 4
   ```

6. Implement Exponential Search to find an element in a sorted, unbounded array.
   ```python
   # Example:
   # Input: [2, 3, 4, 10, 40], x=10
   # Output: 3
   ```

7. Write a function to find the first and last occurrence of an element in a sorted array with duplicates.
   ```python
   # Example:
   # Input: [1, 3, 5, 5, 5, 5, 7, 123, 125], x=5
   # Output: (2, 5)  # First occurrence at index 2, last at index 5
   ```

### Hard Questions
8. Implement a function to search for an element in a sorted 2D matrix where each row and each column is sorted.
   ```python
   # Example:
   # Input: [[10, 20, 30, 40], [15, 25, 35, 45], [27, 29, 37, 48], [32, 33, 39, 50]], x=29
   # Output: (2, 1)  # Found at row 2, column 1
   ```

9. Write a function to implement Fibonacci Search for a sorted array.
   ```python
   # Example:
   # Input: [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100], x=85
   # Output: 8
   ```

10. Implement a search algorithm for a rotated sorted array (an array that is sorted but has been rotated some number of positions).
    ```python
    # Example:
    # Input: [4, 5, 6, 7, 0, 1, 2], x=0
    # Output: 4
    ```

## Recursion and Backtracking

### Easy Questions
1. Write a recursive function to calculate the factorial of a number.
   ```python
   # Example:
   # Input: 5
   # Output: 120
   ```

2. Implement a recursive function to calculate the nth Fibonacci number.
   ```python
   # Example:
   # Input: 6
   # Output: 8  # (Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, ...)
   ```

3. Write a recursive function to calculate the sum of digits of a positive integer.
   ```python
   # Example:
   # Input: 12345
   # Output: 15  # (1+2+3+4+5)
   ```

### Medium Questions
4. Implement a recursive solution for the Tower of Hanoi problem.
   ```python
   # Example:
   # Input: 3 (number of disks)
   # Output: A sequence of moves to solve the Tower of Hanoi with 3 disks
   ```

5. Write a recursive function to generate all possible permutations of a string.
   ```python
   # Example:
   # Input: "abc"
   # Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
   ```

6. Implement a recursive solution for the N-Queens problem (placing N queens on an N×N chessboard so that no two queens threaten each other).
   ```python
   # Example:
   # Input: 4
   # Output: [['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]
   ```

7. Write a recursive function to solve the Subset Sum problem (find if there exists a subset of a given set with a given sum).
   ```python
   # Example:
   # Input: [3, 34, 4, 12, 5, 2], sum=9
   # Output: True  # (4+5=9)
   ```

### Hard Questions
8. Implement a Sudoku solver using backtracking.
   ```python
   # Example:
   # Input: A 9x9 partially filled Sudoku grid
   # Output: The completely filled valid Sudoku grid
   ```

9. Write a recursive function to solve the Rat in a Maze problem (find a path from source to destination in a 2D maze).
   ```python
   # Example:
   # Input: A 2D matrix representing the maze with 1s as open paths and 0s as blocked paths
   # Output: A path from the top-left to bottom-right, if it exists
   ```

10. Implement a recursive solution for the Graph Coloring problem (assign colors to vertices of a graph such that no two adjacent vertices have the same color).
    ```python
    # Example:
    # Input: A graph represented as an adjacency list and number of colors
    # Output: A valid coloring assignment for each vertex, if possible
    ```

## Dynamic Programming

### Easy Questions
1. Implement a function to find the nth Fibonacci number using dynamic programming.
   ```python
   # Example:
   # Input: 10
   # Output: 55
   ```

2. Write a function to solve the Coin Change problem (find the minimum number of coins needed to make a given amount).
   ```python
   # Example:
   # Input: coins=[1, 5, 10], amount=18
   # Output: 4  # (10 + 5 + 1 + 1 + 1)
   ```

3. Implement a function to find the length of the Longest Increasing Subsequence in an array.
   ```python
   # Example:
   # Input: [10, 22, 9, 33, 21, 50, 41, 60, 80]
   # Output: 6  # (10, 22, 33, 50, 60, 80)
   ```

### Medium Questions
4. Write a function to solve the 0/1 Knapsack problem (maximize value while keeping weight under a limit).
   ```python
   # Example:
   # Input: values=[60, 100, 120], weights=[10, 20, 30], capacity=50
   # Output: 220  # (100 + 120)
   ```

5. Implement a function to find the Longest Common Subsequence of two strings.
   ```python
   # Example:
   # Input: "ABCDGH", "AEDFHR"
   # Output: 3  # ("ADH" is the longest common subsequence)
   ```

6. Write a function to solve the Matrix Chain Multiplication problem (find the most efficient way to multiply a sequence of matrices).
   ```python
   # Example:
   # Input: dimensions=[40, 20, 30, 10, 30]
   # Output: 26000  # (Minimum number of scalar multiplications)
   ```

7. Implement a function to solve the Edit Distance problem (find minimum operations to convert one string to another).
   ```python
   # Example:
   # Input: "kitten", "sitting"
   # Output: 3  # (Replace 'k' with 's', replace 'e' with 'i', insert 'g')
   ```

### Hard Questions
8. Write a function to solve the Partition Equal Subset Sum problem (determine if a set can be partitioned into two subsets with equal sum).
   ```python
   # Example:
   # Input: [1, 5, 11, 5]
   # Output: True  # ([1, 5, 5] and [11] both sum to 11)
   ```

9. Implement a function to solve the Longest Palindromic Subsequence problem.
   ```python
   # Example:
   # Input: "BBABCBCAB"
   # Output: 7  # ("BABCBAB" is the longest palindromic subsequence)
   ```

10. Write a function to solve the Optimal Binary Search Tree problem (construct a BST with minimum expected search cost).
    ```python
    # Example:
    # Input: keys=[10, 12, 20], freq=[34, 8, 50]
    # Output: 142  # (Minimum expected search cost)
    ```

## Data Structure Implementation

### Easy Questions
1. Implement a Stack data structure with push, pop, and peek operations.
   ```python
   # Example:
   # stack = Stack()
   # stack.push(10)
   # stack.push(20)
   # stack.peek()  # returns 20
   # stack.pop()   # returns 20
   # stack.pop()   # returns 10
   ```

2. Implement a Queue data structure with enqueue, dequeue, and peek operations.
   ```python
   # Example:
   # queue = Queue()
   # queue.enqueue(10)
   # queue.enqueue(20)
   # queue.peek()    # returns 10
   # queue.dequeue() # returns 10
   # queue.dequeue() # returns 20
   ```

3. Implement a Singly Linked List with operations to insert, delete, and display elements.
   ```python
   # Example:
   # linked_list = LinkedList()
   # linked_list.insert(10)
   # linked_list.insert(20)
   # linked_list.insert(30)
   # linked_list.display()  # Output: 10 -> 20 -> 30
   # linked_list.delete(20)
   # linked_list.display()  # Output: 10 -> 30
   ```

### Medium Questions
4. Implement a Binary Search Tree with insert, search, and delete operations.
   ```python
   # Example:
   # bst = BinarySearchTree()
   # bst.insert(50)
   # bst.insert(30)
   # bst.insert(70)
   # bst.search(30)  # returns True
   # bst.delete(30)
   # bst.search(30)  # returns False
   ```

5. Implement a Min Heap data structure with insert, extract_min, and heapify operations.
   ```python
   # Example:
   # min_heap = MinHeap()
   # min_heap.insert(5)
   # min_heap.insert(3)
   # min_heap.insert(8)
   # min_heap.extract_min()  # returns 3
   # min_heap.extract_min()  # returns 5
   ```

6. Implement a Hash Table with insert, search, and delete operations, handling collisions using chaining.
   ```python
   # Example:
   # hash_table = HashTable()
   # hash_table.insert("key1", "value1")
   # hash_table.insert("key2", "value2")
   # hash_table.search("key1")  # returns "value1"
   # hash_table.delete("key1")
   # hash_table.search("key1")  # returns None
   ```

7. Implement a Graph data structure with methods for adding vertices and edges, and performing BFS and DFS traversals.
   ```python
   # Example:
   # graph = Graph()
   # graph.add_vertex(1)
   # graph.add_vertex(2)
   # graph.add_edge(1, 2)
   # graph.bfs(1)  # BFS traversal starting from vertex 1
   # graph.dfs(1)  # DFS traversal starting from vertex 1
   ```

### Hard Questions
8. Implement an AVL Tree (self-balancing binary search tree) with insert and delete operations that maintain balance.
   ```python
   # Example:
   # avl_tree = AVLTree()
   # avl_tree.insert(10)
   # avl_tree.insert(20)
   # avl_tree.insert(30)  # This should trigger a rotation
   # avl_tree.delete(20)
   ```

9. Implement a Trie data structure for efficient string operations like insert, search, and prefix search.
   ```python
   # Example:
   # trie = Trie()
   # trie.insert("apple")
   # trie.insert("app")
   # trie.search("apple")      # returns True
   # trie.search("ap")         # returns False
   # trie.starts_with("app")   # returns True
   ```

10. Implement a Segment Tree for range query operations (like sum, minimum, maximum) on an array.
    ```python
    # Example:
    # arr = [1, 3, 5, 7, 9, 11]
    # segment_tree = SegmentTree(arr)
    # segment_tree.range_sum(1, 3)    # returns 15 (3+5+7)
    # segment_tree.range_minimum(0, 2) # returns 1
    # segment_tree.update(1, 10)      # Update arr[1] to 10
    # segment_tree.range_sum(1, 3)    # returns 22 (10+5+7)
    ```

# Data Structures & Algorithms - Coding Practice Questions - II

## Sorting Algorithms

### Easy Questions
1. Implement a Bubble Sort algorithm to sort an array of integers in ascending order.
   ```python
   # Example:
   # Input: [64, 34, 25, 12, 22, 11, 90]
   # Output: [11, 12, 22, 25, 34, 64, 90]
   ```

2. Write a function to check if an array is already sorted in ascending order.
   ```python
   # Example:
   # Input: [1, 2, 3, 4, 5]
   # Output: True
   # Input: [1, 3, 2, 4, 5]
   # Output: False
   ```

3. Implement a Selection Sort algorithm to sort an array of integers.
   ```python
   # Example:
   # Input: [64, 25, 12, 22, 11]
   # Output: [11, 12, 22, 25, 64]
   ```

### Medium Questions
4. Implement the Merge Sort algorithm to sort an array of integers.
   ```python
   # Example:
   # Input: [38, 27, 43, 3, 9, 82, 10]
   # Output: [3, 9, 10, 27, 38, 43, 82]
   ```

5. Write a function to implement Insertion Sort that can sort a list of strings alphabetically.
   ```python
   # Example:
   # Input: ["banana", "apple", "pear", "orange", "kiwi"]
   # Output: ["apple", "banana", "kiwi", "orange", "pear"]
   ```

6. Implement Quick Sort with the first element as the pivot.
   ```python
   # Example:
   # Input: [10, 7, 8, 9, 1, 5]
   # Output: [1, 5, 7, 8, 9, 10]
   ```

7. Write a function to sort a list of dictionaries based on a specific key.
   ```python
   # Example:
   # Input: [{"name": "John", "age": 25}, {"name": "Alice", "age": 22}, {"name": "Bob", "age": 30}], key="age"
   # Output: [{"name": "Alice", "age": 22}, {"name": "John", "age": 25}, {"name": "Bob", "age": 30}]
   ```

### Hard Questions
8. Implement a hybrid sorting algorithm that uses Insertion Sort for small subarrays and Merge Sort for larger ones.
   ```python
   # Example:
   # Input: [5, 2, 4, 6, 1, 3, 8, 7], threshold=4
   # Output: [1, 2, 3, 4, 5, 6, 7, 8]
   ```

9. Create a function that implements the Timsort algorithm (a hybrid of Merge Sort and Insertion Sort used in Python's built-in sort).
   ```python
   # Example:
   # Input: [5, 21, 43, 2, 18, 11, 7, 13]
   # Output: [2, 5, 7, 11, 13, 18, 21, 43]
   ```

10. Implement a parallel version of Merge Sort using Python's multiprocessing module.
    ```python
    # Example:
    # Input: [38, 27, 43, 3, 9, 82, 10, 15, 29, 44, 12, 76]
    # Output: [3, 9, 10, 12, 15, 27, 29, 38, 43, 44, 76, 82]
    ```

## Searching Algorithms

### Easy Questions
1. Implement a Linear Search algorithm to find an element in an array.
   ```python
   # Example:
   # Input: [5, 1, 9, 2, 10, 15, 20], target=10
   # Output: 4 (index of the target)
   ```

2. Write a function to implement Binary Search on a sorted array.
   ```python
   # Example:
   # Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target=7
   # Output: 6 (index of the target)
   ```

3. Create a function that counts the number of occurrences of a specific element in a sorted array using Binary Search.
   ```python
   # Example:
   # Input: [1, 2, 2, 2, 3, 4, 5, 5], target=2
   # Output: 3
   ```

### Medium Questions
4. Implement a function that uses Binary Search to find the first and last occurrence of an element in a sorted array.
   ```python
   # Example:
   # Input: [1, 2, 3, 3, 3, 4, 5], target=3
   # Output: (2, 4) (first and last indices)
   ```

5. Write a function to find the peak element in an array (an element that is greater than its neighbors).
   ```python
   # Example:
   # Input: [1, 3, 20, 4, 1, 0]
   # Output: 2 (index of 20)
   ```

6. Implement a Jump Search algorithm for a sorted array.
   ```python
   # Example:
   # Input: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19], target=13
   # Output: 6 (index of the target)
   ```

7. Create a function that implements Interpolation Search for a uniformly distributed sorted array.
   ```python
   # Example:
   # Input: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], target=60
   # Output: 5 (index of the target)
   ```

### Hard Questions
8. Implement a search algorithm for a rotated sorted array (an array that was sorted and then rotated at some pivot).
   ```python
   # Example:
   # Input: [4, 5, 6, 7, 0, 1, 2], target=0
   # Output: 4 (index of the target)
   ```

9. Write a function to implement a fuzzy search algorithm that can find strings with similar patterns.
   ```python
   # Example:
   # Input: ["apple", "banana", "orange", "pear"], query="aple", max_distance=1
   # Output: ["apple"]
   ```

10. Implement an efficient algorithm to search in a sorted 2D matrix where each row and column is sorted.
    ```python
    # Example:
    # Input: [[1, 4, 7, 11], [2, 5, 8, 12], [3, 6, 9, 16], [10, 13, 14, 17]], target=8
    # Output: (1, 2) (row and column indices)
    ```

## Recursion and Backtracking

### Easy Questions
1. Write a recursive function to calculate the factorial of a number.
   ```python
   # Example:
   # Input: 5
   # Output: 120
   ```

2. Implement a recursive function to calculate the nth Fibonacci number.
   ```python
   # Example:
   # Input: 6
   # Output: 8 (0, 1, 1, 2, 3, 5, 8)
   ```

3. Create a recursive function to calculate the sum of elements in an array.
   ```python
   # Example:
   # Input: [1, 2, 3, 4, 5]
   # Output: 15
   ```

### Medium Questions
4. Implement a recursive solution for the Tower of Hanoi problem.
   ```python
   # Example:
   # Input: 3 (number of disks)
   # Output: List of moves to solve the problem
   ```

5. Write a recursive function to generate all possible permutations of a string.
   ```python
   # Example:
   # Input: "abc"
   # Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
   ```

6. Create a recursive function to generate all possible subsets of a set (power set).
   ```python
   # Example:
   # Input: [1, 2, 3]
   # Output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
   ```

7. Implement a recursive binary search algorithm.
   ```python
   # Example:
   # Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target=7
   # Output: 6 (index of the target)
   ```

### Hard Questions
8. Implement a backtracking solution for the N-Queens problem.
   ```python
   # Example:
   # Input: 4 (4x4 board)
   # Output: [['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]
   ```

9. Create a backtracking algorithm to solve the Sudoku puzzle.
   ```python
   # Example:
   # Input: 9x9 Sudoku grid with some filled cells
   # Output: Completely filled valid Sudoku grid
   ```

10. Implement a recursive solution with memoization for the Subset Sum problem.
    ```python
    # Example:
    # Input: [3, 34, 4, 12, 5, 2], target=9
    # Output: True (4+5=9)
    ```

## Dynamic Programming

### Easy Questions
1. Implement a function to calculate the nth Fibonacci number using dynamic programming.
   ```python
   # Example:
   # Input: 10
   # Output: 55
   ```

2. Write a function to find the maximum sum of a contiguous subarray (Kadane's algorithm).
   ```python
   # Example:
   # Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
   # Output: 6 (from subarray [4, -1, 2, 1])
   ```

3. Create a function to calculate the number of ways to climb n stairs, where you can take 1 or 2 steps at a time.
   ```python
   # Example:
   # Input: 5
   # Output: 8
   ```

### Medium Questions
4. Implement a solution for the Coin Change problem using dynamic programming.
   ```python
   # Example:
   # Input: coins=[1, 2, 5], amount=11
   # Output: 3 (5 + 5 + 1)
   ```

5. Write a function to find the length of the Longest Common Subsequence of two strings.
   ```python
   # Example:
   # Input: "abcde", "ace"
   # Output: 3
   ```

6. Create a function to find the length of the Longest Increasing Subsequence in an array.
   ```python
   # Example:
   # Input: [10, 9, 2, 5, 3, 7, 101, 18]
   # Output: 4 ([2, 3, 7, 101] or [2, 5, 7, 101])
   ```

7. Implement a solution for the Edit Distance problem between two strings.
   ```python
   # Example:
   # Input: "horse", "ros"
   # Output: 3
   ```

### Hard Questions
8. Write a function to solve the 0/1 Knapsack problem using dynamic programming.
   ```python
   # Example:
   # Input: values=[60, 100, 120], weights=[10, 20, 30], capacity=50
   # Output: 220
   ```

9. Implement a solution for the Matrix Chain Multiplication problem.
   ```python
   # Example:
   # Input: dimensions=[40, 20, 30, 10, 30]
   # Output: 26000 (minimum number of scalar multiplications)
   ```

10. Create a function to find the number of distinct ways to make change for a given amount using a set of coins.
    ```python
    # Example:
    # Input: coins=[1, 2, 5], amount=5
    # Output: 4 ([1,1,1,1,1], [1,1,1,2], [1,2,2], [5])
    ```

## Data Structure Implementation

### Easy Questions
1. Implement a Stack data structure with push, pop, and peek operations.
   ```python
   # Example:
   # stack = Stack()
   # stack.push(1)
   # stack.push(2)
   # stack.peek()  # returns 2
   # stack.pop()   # returns 2
   # stack.pop()   # returns 1
   ```

2. Create a Queue data structure with enqueue, dequeue, and peek operations.
   ```python
   # Example:
   # queue = Queue()
   # queue.enqueue(1)
   # queue.enqueue(2)
   # queue.peek()    # returns 1
   # queue.dequeue() # returns 1
   # queue.dequeue() # returns 2
   ```

3. Implement a Singly Linked List with methods to insert, delete, and display elements.
   ```python
   # Example:
   # linked_list = LinkedList()
   # linked_list.insert(1)
   # linked_list.insert(2)
   # linked_list.insert(3)
   # linked_list.display()  # prints 1 -> 2 -> 3
   # linked_list.delete(2)
   # linked_list.display()  # prints 1 -> 3
   ```

### Medium Questions
4. Implement a Binary Search Tree with insert, search, and delete operations.
   ```python
   # Example:
   # bst = BinarySearchTree()
   # bst.insert(5)
   # bst.insert(3)
   # bst.insert(7)
   # bst.search(3)  # returns True
   # bst.delete(3)
   # bst.search(3)  # returns False
   ```

5. Create a Hash Table implementation with methods to insert, search, and delete key-value pairs.
   ```python
   # Example:
   # hash_table = HashTable()
   # hash_table.insert("name", "John")
   # hash_table.search("name")  # returns "John"
   # hash_table.delete("name")
   # hash_table.search("name")  # returns None
   ```

6. Implement a Min Heap data structure with insert, extract_min, and heapify operations.
   ```python
   # Example:
   # min_heap = MinHeap()
   # min_heap.insert(5)
   # min_heap.insert(3)
   # min_heap.insert(7)
   # min_heap.extract_min()  # returns 3
   # min_heap.extract_min()  # returns 5
   ```

7. Create a Doubly Linked List with methods to insert at beginning, end, and specific positions.
   ```python
   # Example:
   # dll = DoublyLinkedList()
   # dll.insert_at_beginning(1)
   # dll.insert_at_end(3)
   # dll.insert_at_position(2, 1)  # insert 2 after position 1
   # dll.display()  # prints 1 <-> 2 <-> 3
   ```

### Hard Questions
8. Implement an AVL Tree with auto-balancing after insertions and deletions.
   ```python
   # Example:
   # avl = AVLTree()
   # avl.insert(10)
   # avl.insert(20)
   # avl.insert(30)  # triggers rotation
   # avl.root.value  # returns 20 (new root after rotation)
   ```

9. Create a Graph data structure with methods for adding vertices and edges, and implementing BFS and DFS traversals.
   ```python
   # Example:
   # graph = Graph()
   # graph.add_vertex(1)
   # graph.add_vertex(2)
   # graph.add_edge(1, 2)
   # graph.bfs(1)  # returns [1, 2]
   # graph.dfs(1)  # returns [1, 2]
   ```

10. Implement a Trie data structure for efficient string operations with insert, search, and prefix search methods.
    ```python
    # Example:
    # trie = Trie()
    # trie.insert("apple")
    # trie.insert("app")
    # trie.search("apple")       # returns True
    # trie.search("ap")          # returns False
    # trie.starts_with("app")    # returns True
    ```