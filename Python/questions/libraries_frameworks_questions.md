# 📊 Libraries & Frameworks - Practice Questions

## NumPy & Pandas (Data manipulation & analysis)

### Easy Questions
1. What is the main difference between NumPy arrays and Python lists?
2. How do you create a pandas DataFrame from a dictionary?
3. What will be the output of the following code?
   ```python
   import numpy as np
   arr = np.array([1, 2, 3, 4, 5])
   print(arr[1:4:2])
   ```

### Medium Questions
4. Explain the difference between `loc` and `iloc` in pandas and when you would use each.
5. How would you handle missing values in a pandas DataFrame?
6. What are broadcasting rules in NumPy and how do they work?
7. Explain the difference between pandas Series and DataFrame objects and their relationship to NumPy arrays.

### Hard Questions
8. Describe memory optimization techniques when working with large datasets in pandas.
9. How would you implement custom aggregation functions that can be used with pandas' `groupby` operations?
10. Explain how pandas' categorical data type works internally and when it would provide performance benefits.

## Matplotlib & Seaborn (Data visualization)

### Easy Questions
1. What is the difference between Matplotlib and Seaborn?
2. How do you create a simple line plot using Matplotlib?
3. What will be the output of the following code?
   ```python
   import matplotlib.pyplot as plt
   plt.figure(figsize=(5, 3))
   plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
   plt.axis('off')
   plt.show()
   ```

### Medium Questions
4. Explain the difference between plt.figure() and plt.subplot() in Matplotlib.
5. How would you create a visualization that combines multiple plot types (e.g., bar chart with line plot)?
6. What is the purpose of the `hue` parameter in Seaborn plotting functions?
7. Explain how to customize the appearance of plots in Matplotlib and Seaborn (colors, fonts, styles).

### Hard Questions
8. Describe how to create interactive visualizations with Matplotlib that respond to user input.
9. How would you optimize Matplotlib for rendering large datasets efficiently?
10. Explain how to implement custom visualization types that extend Matplotlib's functionality.

## Flask/Django (Web development)

### Easy Questions
1. What is the difference between Flask and Django?
2. How do you create a simple route in Flask?
3. What will be the output of the following code?
   ```python
   from flask import Flask
   app = Flask(__name__)
   
   @app.route('/')
   def hello():
       return 'Hello World!'
   
   @app.route('/user/<name>')
   def user(name):
       return f'Hello, {name}!'
   ```

### Medium Questions
4. Explain the difference between Flask's request context and application context.
5. How would you implement authentication in a Django application?
6. What is the purpose of Django's ORM and how does it relate to database operations?
7. Explain the concept of middleware in Django and how it processes requests and responses.

### Hard Questions
8. Describe how to implement real-time features (like chat) in a Django application using channels or similar technology.
9. How would you design a scalable Flask application architecture for handling high traffic?
10. Explain how to implement custom template tags and filters in Django and when you would need them.

## SQLAlchemy (ORM for database interaction)

### Easy Questions
1. What is an ORM and how does SQLAlchemy function as one?
2. How do you define a simple model class in SQLAlchemy?
3. What will be the output of the following code?
   ```python
   from sqlalchemy import Column, Integer, String, create_engine
   from sqlalchemy.ext.declarative import declarative_base
   
   Base = declarative_base()
   
   class User(Base):
       __tablename__ = 'users'
       id = Column(Integer, primary_key=True)
       name = Column(String)
   
   print(User.__table__.columns.keys())
   ```

### Medium Questions
4. Explain the difference between SQLAlchemy Core and SQLAlchemy ORM.
5. How would you implement relationships (one-to-many, many-to-many) in SQLAlchemy?
6. What is the purpose of SQLAlchemy's session object and how does it manage database transactions?
7. Explain how to perform complex queries with filtering, sorting, and joins in SQLAlchemy.

### Hard Questions
8. Describe how to implement database migrations with SQLAlchemy and Alembic.
9. How would you optimize SQLAlchemy for handling large-scale database operations?
10. Explain how to implement custom SQL functions and expressions in SQLAlchemy that aren't provided by default.