# ⚙️File Handling & I/O - Practice Questions

## Reading & Writing Files

### Easy Questions
1. What is the difference between reading a file in text mode versus binary mode?
2. How do you open a file for writing in Python without overwriting its existing content?
3. What will be the output of the following code?
   ```python
   with open('example.txt', 'w') as f:
       f.write('Hello\nWorld')
   with open('example.txt', 'r') as f:
       print(len(f.readlines()))
   ```

### Medium Questions
4. Explain the difference between the `read()`, `readline()`, and `readlines()` methods when working with files.
5. How would you efficiently read a very large file that doesn't fit into memory?
6. What is the purpose of the `seek()` and `tell()` methods when working with files?
7. Explain how context managers (`with` statement) help when working with files compared to manually opening and closing files.

### Hard Questions
8. Describe the differences between buffered and unbuffered I/O in Python and when you would use each.
9. How would you implement a file-like object in Python that can be used with the `with` statement?
10. Explain how memory-mapped files work and when they would be beneficial for file I/O operations.

## OS and Filesystem Operations

### Easy Questions
1. What is the difference between the `os` and `os.path` modules in Python?
2. How do you check if a file or directory exists in Python?
3. What will be the output of the following code?
   ```python
   import os
   print(os.path.join('folder', 'subfolder', 'file.txt'))
   ```

### Medium Questions
4. Explain the difference between `os.path.abspath()`, `os.path.realpath()`, and `os.path.normpath()`.
5. How would you recursively list all files in a directory and its subdirectories?
6. What is the purpose of the `glob` module and how does it differ from using `os.listdir()`?
7. Explain how to safely handle file paths across different operating systems in Python.

### Hard Questions
8. Describe how to implement a file watcher that monitors changes to files in a directory and triggers actions when files are modified.
9. How would you implement a function that synchronizes the contents of two directories, similar to a basic version control system?
10. Explain how to implement a virtual filesystem abstraction that can work with both local files and remote storage systems (like S3 or FTP).