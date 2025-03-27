# Data Structures & Algorithms - Answers

## Sorting Algorithms

### Easy Questions
1. The time complexity of Bubble Sort in the worst case is O(n²), where n is the number of elements. This occurs when the array is sorted in reverse order.

2. Merge Sort is a divide-and-conquer algorithm that:
   - Divides the array into two halves
   - Recursively sorts each half
   - Merges the sorted halves
   Unlike Bubble Sort (O(n²)), Merge Sort has a consistent O(n log n) time complexity.

3. Quick Sort's space complexity is O(log n) on average due to the recursive call stack. In the worst case (unbalanced partitions), it can be O(n).

### Medium Questions
4. Merge Sort vs Quick Sort comparison:
   - Time Complexity:
     * Merge Sort: Always O(n log n)
     * Quick Sort: Average O(n log n), Worst O(n²)
   - Space Complexity:
     * Merge Sort: O(n) auxiliary space
     * Quick Sort: O(log n) average case
   - Stability:
     * Merge Sort: Stable
     * Quick Sort: Typically unstable

5. Pivot selection in Quick Sort:
   - Poor pivot choices (like first/last element) can lead to O(n²) time complexity
   - Common strategies:
     * Middle element
     * Random element
     * Median-of-three (first, middle, last)

6. Bubble Sort improvements:
   ```python
   def optimized_bubble_sort(arr):
       n = len(arr)
       for i in range(n):
           swapped = False
           for j in range(0, n-i-1):
               if arr[j] > arr[j+1]:
                   arr[j], arr[j+1] = arr[j+1], arr[j]
                   swapped = True
           if not swapped:  # Array is sorted
               break
       return arr
   ```

7. Adaptive sorting algorithms modify their behavior based on the input's characteristics. Example: Insertion Sort is adaptive because it performs better on nearly-sorted arrays (O(n) in best case).

### Hard Questions
8. Hybrid sorting implementation:
   ```python
   def hybrid_sort(arr, threshold=10):
       def insertion_sort(arr, left, right):
           for i in range(left + 1, right + 1):
               key = arr[i]
               j = i - 1
               while j >= left and arr[j] > key:
                   arr[j + 1] = arr[j]
                   j -= 1
               arr[j + 1] = key

       def merge(arr, l, m, r):
           left = arr[l:m+1]
           right = arr[m+1:r+1]
           i = j = 0
           k = l
           while i < len(left) and j < len(right):
               if left[i] <= right[j]:
                   arr[k] = left[i]
                   i += 1
               else:
                   arr[k] = right[j]
                   j += 1
               k += 1
           while i < len(left):
               arr[k] = left[i]
               i += 1
               k += 1
           while j < len(right):
               arr[k] = right[j]
               j += 1
               k += 1

       def hybrid_sort_util(arr, l, r):
           if r - l <= threshold:
               insertion_sort(arr, l, r)
           else:
               mid = (l + r) // 2
               hybrid_sort_util(arr, l, mid)
               hybrid_sort_util(arr, mid + 1, r)
               merge(arr, l, mid, r)

       hybrid_sort_util(arr, 0, len(arr) - 1)
       return arr
   ```

9. Quick Sort pivot strategies analysis:
   ```python
   def quick_sort_with_pivot_strategy(arr, strategy='median'):
       def get_pivot(arr, low, high, strategy):
           if strategy == 'median':
               mid = (low + high) // 2
               pivot = sorted([
                   (arr[low], low),
                   (arr[mid], mid),
                   (arr[high], high)
               ])[1][1]
               return pivot
           elif strategy == 'random':
               return random.randint(low, high)
           return high  # Default to last element

       def partition(arr, low, high, pivot_idx):
           arr[pivot_idx], arr[high] = arr[high], arr[pivot_idx]
           pivot = arr[high]
           i = low - 1
           for j in range(low, high):
               if arr[j] <= pivot:
                   i += 1
                   arr[i], arr[j] = arr[j], arr[i]
           arr[i + 1], arr[high] = arr[high], arr[i + 1]
           return i + 1

       def quick_sort_util(arr, low, high):
           if low < high:
               pivot_idx = get_pivot(arr, low, high, strategy)
               pi = partition(arr, low, high, pivot_idx)
               quick_sort_util(arr, low, pi - 1)
               quick_sort_util(arr, pi + 1, high)

       quick_sort_util(arr, 0, len(arr) - 1)
       return arr
   ```

10. Parallel Merge Sort:
    ```python
    from concurrent.futures import ThreadPoolExecutor
    import threading

    def parallel_merge_sort(arr, num_threads=4):
        if len(arr) <= 1:
            return arr

        def merge(left, right):
            result = []
            i = j = 0
            while i < len(left) and j < len(right):
                if left[i] <= right[j]:
                    result.append(left[i])
                    i += 1
                else:
                    result.append(right[j])
                    j += 1
            result.extend(left[i:])
            result.extend(right[j:])
            return result

        def parallel_sort(arr, depth=0):
            if len(arr) <= 1:
                return arr
            if depth >= threading.active_count():
                return sorted(arr)

            mid = len(arr) // 2
            with ThreadPoolExecutor(max_workers=2) as executor:
                left_future = executor.submit(
                    parallel_sort, arr[:mid], depth + 1)
                right_future = executor.submit(
                    parallel_sort, arr[mid:], depth + 1)
                left = left_future.result()
                right = right_future.result()

            return merge(left, right)

        return parallel_sort(arr)
    ```

## Searching Algorithms

### Easy Questions
1. Linear Search has a worst-case time complexity of O(n), where n is the number of elements. It needs to check every element in the worst case.

2. Binary Search prerequisites:
   - Array must be sorted
   - Random access to elements (indexable)
   - Comparable elements (defined ordering)

3. Binary Search:
   - Repeatedly divides search interval in half
   - Time complexity: O(log n)
   - Space complexity: O(1) iterative, O(log n) recursive

### Medium Questions
4. Linear vs Binary Search comparison:
   - Linear Search:
     * Works on unsorted data
     * O(n) time complexity
     * Better for small datasets
   - Binary Search:
     * Requires sorted data
     * O(log n) time complexity
     * Better for large datasets

5. Interpolation Search:
   ```python
   def interpolation_search(arr, target):
       low, high = 0, len(arr) - 1
       while low <= high and target >= arr[low] and target <= arr[high]:
           if low == high:
               return low if arr[low] == target else -1
           pos = low + ((high - low) * (target - arr[low]) //
                       (arr[high] - arr[low]))
           if arr[pos] == target:
               return pos
           if arr[pos] < target:
               low = pos + 1
           else:
               high = pos - 1
       return -1
   ```

6. Recursive Binary Search:
   ```python
   def binary_search_recursive(arr, target, low=0, high=None):
       if high is None:
           high = len(arr) - 1
       if low > high:
           return -1
       
       mid = (low + high) // 2
       if arr[mid] == target:
           return mid
       elif arr[mid] > target:
           return binary_search_recursive(arr, target, low, mid-1)
       else:
           return binary_search_recursive(arr, target, mid+1, high)
   ```

7. Hash-based searching:
   - Average time complexity: O(1)
   - Uses hash function to map keys to array indices
   - Handles collisions through chaining or open addressing

### Hard Questions
8. External memory search algorithm:
   ```python
   def external_binary_search(filename, target, record_size):
       with open(filename, 'rb') as f:
           f.seek(0, 2)  # Seek to end
           file_size = f.tell()
           num_records = file_size // record_size
           
           low, high = 0, num_records - 1
           while low <= high:
               mid = (low + high) // 2
               f.seek(mid * record_size)
               record = f.read(record_size)
               value = decode_record(record)  # Implementation needed
               
               if value == target:
                   return mid
               elif value < target:
                   low = mid + 1
               else:
                   high = mid - 1
       return -1
   ```

9. Fuzzy search implementation:
   ```python
   def levenshtein_distance(s1, s2):
       if len(s1) < len(s2):
           return levenshtein_distance(s2, s1)
       if len(s2) == 0:
           return len(s1)
       
       previous_row = range(len(s2) + 1)
       for i, c1 in enumerate(s1):
           current_row = [i + 1]
           for j, c2 in enumerate(s2):
               insertions = previous_row[j + 1] + 1
               deletions = current_row[j] + 1
               substitutions = previous_row[j] + (c1 != c2)
               current_row.append(min(insertions, deletions, substitutions))
           previous_row = current_row
       
       return previous_row[-1]

   def fuzzy_search(query, items, threshold=2):
       return [item for item in items
               if levenshtein_distance(query.lower(), item.lower()) <= threshold]
   ```

10. 2D sorted matrix search:
    ```python
    def search_sorted_matrix(matrix, target):
        if not matrix or not matrix[0]:
            return False
        
        rows, cols = len(matrix), len(matrix[0])
        row, col = 0, cols - 1
        
        while row < rows and col >= 0:
            if matrix[row][col] == target:
                return True
            elif matrix[row][col] > target:
                col -= 1
            else:
                row += 1
        return False
    ```

## Recursion and Backtracking

### Easy Questions
1. Recursion vs Iteration:
   - Recursion: Function calls itself to solve subproblems
     * More intuitive for some problems
     * Uses call stack
     * Can be memory-intensive
   - Iteration: Uses loops to solve problems
     * More memory-efficient
     * Sometimes more complex to implement
     * Better performance for simple problems

2. Base case example:
   ```python
   def factorial(n):
       # Base case
       if n == 0 or n == 1:
           return 1
       # Recursive case
       return n * factorial(n - 1)
   ```

3. Without proper base cases:
   - Stack overflow
   - Infinite recursion
   - Memory exhaustion
   - Program crash

### Medium Questions
4. Tail vs Non-tail recursion:
   ```python
   # Non-tail recursive (needs stack frame)
   def factorial_non_tail(n):
       if n == 0:
           return 1
       return n * factorial_non_tail(n - 1)
   
   # Tail recursive (can be optimized)
   def factorial_tail(n, acc=1):
       if n == 0:
           return acc
       return factorial_tail(n - 1, n * acc)
   ```

5. Tower of Hanoi solution:
   ```python
   def tower_of_hanoi(n, source, auxiliary, target):
       if n == 1:
           print(f"Move disk 1 from {source} to {target}")
           return
       tower_of_hanoi(n-1, source, target, auxiliary)
       print(f"Move disk {n} from {source} to {target}")
       tower_of_hanoi(n-1, auxiliary, source, target)
   ```

6. Backtracking vs Simple Recursion:
   - Backtracking: Explores all possible solutions by trying different paths
   - Simple Recursion: Breaks problem into smaller subproblems
   Example (N-Queens problem uses backtracking)

7. String permutations:
   ```python
   def permutations(string):
       if len(string) <= 1:
           return [string]
       
       perms = []
       for i, char in enumerate(string):
           other_chars = string[:i] + string[i+1:]
           for perm in permutations(other_chars):
               perms.append(char + perm)
       return perms
   ```