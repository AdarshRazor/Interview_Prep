# 📊 Libraries & Frameworks - Coding Practice Questions

## NumPy & Pandas (Data manipulation & analysis)

### Easy Questions
1. Write a function that creates a NumPy array from a list and calculates the mean, median, and standard deviation.
   ```python
   # Example:
   # Input: [1, 2, 3, 4, 5]
   # Output: {'mean': 3.0, 'median': 3.0, 'std': 1.4142135623730951}
   ```

2. Create a function that reads a CSV file into a pandas DataFrame and returns the first n rows.
   ```python
   # Example:
   # Input: 'data.csv', n=5
   # Output: DataFrame containing first 5 rows of the CSV file
   ```

3. Implement a function that filters a pandas DataFrame based on a condition.
   ```python
   # Example:
   # Input: DataFrame with columns 'Name' and 'Age', condition: Age > 30
   # Output: DataFrame with only rows where Age > 30
   ```

### Medium Questions
4. Write a function that performs a group-by operation on a DataFrame and calculates multiple aggregations.
   ```python
   # Example:
   # Input: DataFrame with columns 'Category', 'Value'
   # Output: DataFrame grouped by 'Category' with sum, mean, and count of 'Value'
   ```

5. Create a function that merges two DataFrames based on a common column and handles missing values.
   ```python
   # Example:
   # Input: df1, df2, common_column='ID'
   # Output: Merged DataFrame with appropriate handling of missing values
   ```

6. Implement a function that reshapes a DataFrame from wide to long format (or vice versa).
   ```python
   # Example:
   # Input: DataFrame in wide format with columns 'Name', 'Math', 'Science', 'History'
   # Output: DataFrame in long format with columns 'Name', 'Subject', 'Score'
   ```

7. Write a function that performs a rolling window calculation on time series data.
   ```python
   # Example:
   # Input: Time series DataFrame, window_size=7, function='mean'
   # Output: DataFrame with 7-day rolling average
   ```

### Hard Questions
8. Create a function that implements a custom pandas aggregation function that can be used with groupby.
   ```python
   # Example:
   # Input: DataFrame with numeric columns, custom function to calculate weighted average
   # Output: DataFrame with results of the custom aggregation
   ```

9. Implement a function that efficiently processes a very large CSV file that doesn't fit into memory.
   ```python
   # Example:
   # Input: Path to large CSV file, processing function
   # Output: Results of processing the file in chunks
   ```

10. Write a function that uses NumPy's vectorization capabilities to optimize a complex mathematical operation.
    ```python
    # Example:
    # Input: Large dataset requiring multiple mathematical transformations
    # Output: Efficiently processed results using NumPy's vectorized operations
    ```

## Matplotlib & Seaborn (Data visualization)

### Easy Questions
1. Write a function that creates a simple bar chart from a dictionary of values.
   ```python
   # Example:
   # Input: {'A': 10, 'B': 5, 'C': 15}
   # Output: Bar chart with categories A, B, C and their corresponding values
   ```

2. Create a function that generates a scatter plot from two lists of coordinates.
   ```python
   # Example:
   # Input: x=[1, 2, 3, 4, 5], y=[2, 3, 5, 7, 11]
   # Output: Scatter plot of the points
   ```

3. Implement a function that creates a pie chart showing the distribution of values in a list.
   ```python
   # Example:
   # Input: [25, 30, 45], labels=['Category A', 'Category B', 'Category C']
   # Output: Pie chart showing the distribution
   ```

### Medium Questions
4. Write a function that creates a multi-line plot with a legend and proper axis labels.
   ```python
   # Example:
   # Input: Dictionary of series data, x-axis label, y-axis label, title
   # Output: Multi-line plot with proper formatting
   ```

5. Create a function that generates a heatmap from a correlation matrix.
   ```python
   # Example:
   # Input: DataFrame with numeric columns
   # Output: Heatmap visualization of the correlation matrix
   ```

6. Implement a function that creates a dashboard with multiple subplots showing different aspects of the same dataset.
   ```python
   # Example:
   # Input: DataFrame with multiple columns
   # Output: Figure with multiple subplots (histogram, scatter, line, etc.)
   ```

7. Write a function that creates an animated plot showing the evolution of data over time.
   ```python
   # Example:
   # Input: DataFrame with time series data
   # Output: Animated visualization showing changes over time
   ```

### Hard Questions
8. Create a function that implements a custom visualization type not directly available in Matplotlib.
   ```python
   # Example:
   # Input: Specialized data structure
   # Output: Custom visualization (e.g., network graph, radar chart)
   ```

9. Implement a function that creates an interactive visualization with clickable elements that reveal additional information.
   ```python
   # Example:
   # Input: DataFrame with hierarchical data
   # Output: Interactive plot where clicking on elements shows detailed data
   ```

10. Write a function that optimizes a visualization for very large datasets using techniques like downsampling or aggregation.
    ```python
    # Example:
    # Input: Very large DataFrame with millions of points
    # Output: Efficiently rendered visualization that maintains key insights
    ```

## Flask/Django (Web development)

### Easy Questions
1. Write a function that creates a simple Flask application with a route that returns a JSON response.
   ```python
   # Example:
   # Input: None
   # Output: Flask app with a route '/api/data' that returns {'status': 'success', 'data': [1, 2, 3]}
   ```

2. Create a function that implements a Flask route that accepts parameters from the URL.
   ```python
   # Example:
   # Input: None
   # Output: Flask app with a route '/users/<user_id>' that returns user information
   ```

3. Implement a function that creates a simple HTML form in Flask and handles form submission.
   ```python
   # Example:
   # Input: None
   # Output: Flask app with a form that collects user information and displays it
   ```

### Medium Questions
4. Write a function that implements a RESTful API in Flask with endpoints for CRUD operations.
   ```python
   # Example:
   # Input: None
   # Output: Flask app with endpoints for GET, POST, PUT, DELETE operations on a resource
   ```

5. Create a function that implements authentication and authorization in a Flask application.
   ```python
   # Example:
   # Input: None
   # Output: Flask app with login, logout, and protected routes
   ```

6. Implement a function that creates a Flask application that interacts with a database using SQLAlchemy.
   ```python
   # Example:
   # Input: None
   # Output: Flask app with routes that perform database operations
   ```

7. Write a function that creates a Django model with relationships and implements views for listing and detail pages.
   ```python
   # Example:
   # Input: None
   # Output: Django app with models, views, and templates for a blog application
   ```

### Hard Questions
8. Create a function that implements a real-time feature in a Flask application using WebSockets.
   ```python
   # Example:
   # Input: None
   # Output: Flask app with a real-time chat feature using Flask-SocketIO
   ```

9. Implement a function that creates a Django REST framework API with authentication, permissions, and rate limiting.
   ```python
   # Example:
   # Input: None
   # Output: Django app with a fully-featured REST API
   ```

10. Write a function that implements a scalable Flask application architecture with blueprints, factories, and configuration management.
    ```python
    # Example:
    # Input: None
    # Output: Flask app with a modular, scalable architecture
    ```

## SQLAlchemy (ORM for database interaction)

### Easy Questions
1. Write a function that creates a SQLAlchemy model class and initializes a database.
   ```python
   # Example:
   # Input: None
   # Output: SQLAlchemy model for a 'User' table and initialized database
   ```

2. Create a function that performs basic CRUD operations using SQLAlchemy ORM.
   ```python
   # Example:
   # Input: User data
   # Output: Functions to create, read, update, and delete user records
   ```

3. Implement a function that queries a database table with filtering conditions using SQLAlchemy.
   ```python
   # Example:
   # Input: Filter conditions (e.g., age > 30)
   # Output: Query results matching the conditions
   ```

### Medium Questions
4. Write a function that implements a one-to-many relationship between two SQLAlchemy models.
   ```python
   # Example:
   # Input: None
   # Output: Models for 'User' and 'Post' with a one-to-many relationship
   ```

5. Create a function that performs a complex query with joins, filtering, and ordering in SQLAlchemy.
   ```python
   # Example:
   # Input: Query parameters
   # Output: Results of a complex query across multiple tables
   ```

6. Implement a function that uses SQLAlchemy's session management to handle transactions properly.
   ```python
   # Example:
   # Input: Series of database operations
   # Output: Function that executes operations within a transaction
   ```

7. Write a function that implements database migration using Alembic with SQLAlchemy.
   ```python
   # Example:
   # Input: Schema changes
   # Output: Migration script and functions to upgrade/downgrade the database
   ```

### Hard Questions
8. Create a function that implements a custom SQLAlchemy type that handles specialized data.
   ```python
   # Example:
   # Input: None
   # Output: Custom SQLAlchemy type for storing and retrieving JSON data
   ```

9. Implement a function that optimizes SQLAlchemy queries for performance with proper indexing and query strategies.
   ```python
   # Example:
   # Input: Slow query
   # Output: Optimized query with proper indexing and eager loading
   ```

10. Write a function that implements a connection pooling strategy for SQLAlchemy in a high-concurrency application.
    ```python
    # Example:
    # Input: None
    # Output: SQLAlchemy engine configured with optimal connection pooling settings
    ```