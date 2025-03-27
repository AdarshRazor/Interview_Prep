# ⚙️File Handling & I/O - Answers

## Reading & Writing Files

### Easy Questions
1. Text mode vs binary mode:
   - Text mode ('t'): Handles data as strings, performs universal newline translation (\r\n to \n), and uses the specified encoding
   - Binary mode ('b'): Handles data as bytes, no newline translation, no encoding/decoding

2. To open a file for writing without overwriting existing content, use the 'a' (append) mode:
   ```python
   with open('file.txt', 'a') as f:
       f.write('new content')
   ```

3. The output will be 2. The code writes two lines ('Hello' and 'World') to the file, and readlines() returns a list containing these two lines.

### Medium Questions
4. File reading methods differences:
   - read(): Reads the entire file content as a single string
   - readline(): Reads one line at a time
   - readlines(): Reads all lines and returns them as a list

5. To efficiently read a large file:
   ```python
   with open('large_file.txt') as f:
       for line in f:  # Memory-efficient iteration
           process(line)
   ```

6. seek() and tell() methods:
   - seek(offset, whence): Moves the file pointer to a specific position
   - tell(): Returns the current position of the file pointer
   These methods are useful for random access in files.

7. Context managers ('with' statement) advantages:
   - Automatically handles file closing, even if exceptions occur
   - Ensures proper resource cleanup
   - More readable and less error-prone than manual file handling
   - Handles cleanup of system resources efficiently

### Hard Questions
8. Buffered vs Unbuffered I/O:
   - Buffered I/O: Stores data in memory before writing to disk, more efficient for multiple small operations
   - Unbuffered I/O: Writes directly to disk, better for large operations or when immediate disk writing is required
   ```python
   # Buffered
   with open('file.txt', 'w') as f:  # Default buffering
       f.write('data')
   
   # Unbuffered
   with open('file.txt', 'wb', buffering=0) as f:
       f.write(b'data')
   ```

9. Implementing a file-like object:
   ```python
   class CustomFile:
       def __init__(self):
           self.data = []
       
       def write(self, data):
           self.data.append(data)
       
       def __enter__(self):
           return self
       
       def __exit__(self, exc_type, exc_val, exc_tb):
           self.data = []
   ```

10. Memory-mapped files:
    - Allow treating file content as if it were in memory
    - Beneficial for large files and random access patterns
    - Useful for inter-process communication
    ```python
    import mmap
    with open('file.txt', 'r+b') as f:
        mm = mmap.mmap(f.fileno(), 0)
    ```

## OS and Filesystem Operations

### Easy Questions
1. os vs os.path differences:
   - os: Provides operating system dependent functionality (process management, environment variables)
   - os.path: Handles path manipulations in an OS-independent way

2. Checking file/directory existence:
   ```python
   import os
   # For files
   os.path.isfile('path/to/file')
   # For directories
   os.path.isdir('path/to/directory')
   # For either
   os.path.exists('path/to/item')
   ```

3. The output will be: "folder/subfolder/file.txt" (on Windows, it would use backslashes). os.path.join() creates platform-appropriate path strings.

### Medium Questions
4. Path function differences:
   - os.path.abspath(): Returns absolute path, resolving relative path components
   - os.path.realpath(): Returns canonical path, resolving symbolic links
   - os.path.normpath(): Normalizes path separators and removes redundant separators

5. Recursive directory listing:
   ```python
   import os
   def list_files(directory):
       for root, dirs, files in os.walk(directory):
           for file in files:
               print(os.path.join(root, file))
   ```

6. glob vs os.listdir:
   - glob: Supports pattern matching (wildcards) and recursive matching
   - os.listdir: Simple directory listing without pattern matching
   ```python
   import glob
   # Using glob
   python_files = glob.glob('**/*.py', recursive=True)
   ```

7. Cross-platform path handling:
   - Use os.path.join() for path construction
   - Use os.path.normpath() to normalize paths
   - Use pathlib for modern path handling
   - Always use raw strings for Windows paths

### Hard Questions
8. File watcher implementation:
   ```python
   from watchdog.observers import Observer
   from watchdog.events import FileSystemEventHandler
   
   class MyHandler(FileSystemEventHandler):
       def on_modified(self, event):
           if not event.is_directory:
               print(f"File {event.src_path} has been modified")
   
   def watch_directory(path):
       event_handler = MyHandler()
       observer = Observer()
       observer.schedule(event_handler, path, recursive=False)
       observer.start()
       return observer
   ```

9. Directory synchronization:
   ```python
   import filecmp
   import shutil
   
   def sync_directories(source, dest):
       dcmp = filecmp.dircmp(source, dest)
       
       # Copy new files
       for name in dcmp.left_only:
           src_path = os.path.join(source, name)
           if os.path.isfile(src_path):
               shutil.copy2(src_path, dest)
           else:
               shutil.copytree(src_path, os.path.join(dest, name))
       
       # Update different files
       for name in dcmp.diff_files:
           shutil.copy2(os.path.join(source, name),
                       os.path.join(dest, name))
   ```

10. Virtual filesystem abstraction:
    ```python
    from abc import ABC, abstractmethod
    
    class VirtualFS(ABC):
        @abstractmethod
        def read(self, path):
            pass
        
        @abstractmethod
        def write(self, path, data):
            pass
        
        @abstractmethod
        def list(self, path):
            pass
    
    class LocalFS(VirtualFS):
        def read(self, path):
            with open(path, 'rb') as f:
                return f.read()
        
        def write(self, path, data):
            with open(path, 'wb') as f:
                f.write(data)
        
        def list(self, path):
            return os.listdir(path)
    
    class S3FS(VirtualFS):
        def __init__(self, bucket):
            self.bucket = bucket
            # Initialize S3 client
    ```