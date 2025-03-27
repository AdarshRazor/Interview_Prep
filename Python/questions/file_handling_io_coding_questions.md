# ⚙️File Handling & I/O - Coding Practice Questions

## Reading & Writing Files

### Easy Questions
1. Write a function that reads a text file and returns the number of lines in it.
   ```python
   # Example:
   # Input: file containing "Hello\nWorld\nPython"
   # Output: 3
   ```

2. Create a function that writes a list of strings to a file, one string per line.
   ```python
   # Example:
   # Input: ["Hello", "World", "Python"]
   # Output: File containing "Hello\nWorld\nPython"
   ```

3. Implement a function that reads a text file and returns the number of words in it.
   ```python
   # Example:
   # Input: file containing "Hello World Python Programming"
   # Output: 4
   ```

### Medium Questions
4. Write a function that reads a large text file in chunks and counts the occurrences of a specific word.
   ```python
   # Example:
   # Input: file.txt, word="Python"
   # Output: Number of occurrences of "Python" in the file
   ```

5. Create a function that finds and replaces all occurrences of a string in a text file.
   ```python
   # Example:
   # Input: file.txt, old_string="Python", new_string="Java"
   # Output: New file with all occurrences of "Python" replaced with "Java"
   ```

6. Implement a function that merges multiple text files into a single file with proper headers.
   ```python
   # Example:
   # Input: ["file1.txt", "file2.txt", "file3.txt"]
   # Output: merged.txt containing contents of all files with headers
   ```

7. Write a function that reads a text file and returns the n most frequent words along with their counts.
   ```python
   # Example:
   # Input: file.txt, n=5
   # Output: List of tuples [(word1, count1), (word2, count2), ...] for the 5 most frequent words
   ```

### Hard Questions
8. Create a function that implements a simple text file compression algorithm (e.g., run-length encoding).
   ```python
   # Example:
   # Input: file containing "AAABBBCCDAA"
   # Output: Compressed file containing "3A3B2C1D2A"
   ```

9. Implement a function that reads a large log file and extracts entries within a specific time range.
   ```python
   # Example:
   # Input: logfile.txt, start_time="2023-01-01 10:00:00", end_time="2023-01-01 11:00:00"
   # Output: All log entries between the specified times
   ```

10. Write a function that implements a simple file-based database with CRUD operations.
    ```python
    # Example:
    # db = FileDatabase("database.txt")
    # db.create({"id": 1, "name": "Alice"})
    # db.read(1)  # returns {"id": 1, "name": "Alice"}
    # db.update(1, {"name": "Bob"})
    # db.delete(1)
    ```

## OS and Filesystem Operations

### Easy Questions
1. Write a function that lists all files in a directory with a specific extension.
   ```python
   # Example:
   # Input: directory="/home/user/documents", extension=".txt"
   # Output: List of all .txt files in the directory
   ```

2. Create a function that recursively creates a directory structure.
   ```python
   # Example:
   # Input: "/home/user/projects/python/src"
   # Output: Creates all directories in the path if they don't exist
   ```

3. Implement a function that gets the total size of all files in a directory.
   ```python
   # Example:
   # Input: "/home/user/documents"
   # Output: Total size in bytes
   ```

### Medium Questions
4. Write a function that finds all duplicate files in a directory based on content.
   ```python
   # Example:
   # Input: "/home/user/documents"
   # Output: Groups of files with identical content
   ```

5. Create a function that watches a directory for changes and performs an action when files are added, modified, or deleted.
   ```python
   # Example:
   # Input: directory="/home/user/watch", callback=process_file
   # Output: Calls process_file whenever a file changes in the directory
   ```

6. Implement a function that synchronizes the contents of two directories (one-way sync).
   ```python
   # Example:
   # Input: source="/home/user/source", destination="/home/user/backup"
   # Output: Copies all files from source to destination, updating or adding as needed
   ```

7. Write a function that organizes files in a directory by their creation date or file type.
   ```python
   # Example:
   # Input: directory="/home/user/downloads", organize_by="type"
   # Output: Moves files into subdirectories based on their file type
   ```

### Hard Questions
8. Create a function that implements a simple version control system for a directory of text files.
   ```python
   # Example:
   # vcs = VersionControl("/home/user/project")
   # vcs.commit("Initial commit")
   # # Make changes to files
   # vcs.commit("Added feature X")
   # vcs.rollback(1)  # Rolls back to the first commit
   ```

9. Implement a function that creates a searchable index of the content of all text files in a directory structure.
   ```python
   # Example:
   # index = create_index("/home/user/documents")
   # results = index.search("Python programming")
   # # Returns list of files containing the search terms
   ```

10. Write a function that implements a virtual filesystem that can mount different storage backends (local files, remote FTP, cloud storage).
    ```python
    # Example:
    # vfs = VirtualFileSystem()
    # vfs.mount("/local", LocalStorage("/home/user/files"))
    # vfs.mount("/remote", FTPStorage("ftp.example.com", "user", "pass"))
    # vfs.read("/local/document.txt")
    # vfs.write("/remote/upload.txt", "content")
    ```