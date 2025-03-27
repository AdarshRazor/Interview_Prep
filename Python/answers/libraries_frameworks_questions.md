# 📊 Libraries & Frameworks - Answers

## NumPy & Pandas (Data manipulation & analysis)

### Easy Questions
1. Main differences between NumPy arrays and Python lists:
   - NumPy arrays are homogeneous (same data type)
   - More memory efficient
   - Support vectorized operations
   - Faster mathematical operations
   - Fixed size after creation

2. Creating DataFrame from dictionary:
   ```python
   import pandas as pd
   data = {
       'name': ['John', 'Alice', 'Bob'],
       'age': [25, 30, 35]
   }
   df = pd.DataFrame(data)
   ```

3. The output will be [2 4]. The slice arr[1:4:2] means start at index 1, end before index 4, with step 2, selecting elements [2, 4] from the array [1, 2, 3, 4, 5].

### Medium Questions
4. loc vs iloc differences:
   - loc: Label-based indexing
     ```python
     df.loc['row_label', 'column_label']
     ```
   - iloc: Integer-based indexing
     ```python
     df.iloc[0, 2]  # First row, third column
     ```

5. Handling missing values in pandas:
   ```python
   # Checking for missing values
   df.isna().sum()
   
   # Dropping missing values
   df.dropna()
   
   # Filling missing values
   df.fillna(value)
   df.fillna(method='ffill')  # Forward fill
   df.fillna(method='bfill')  # Backward fill
   
   # Interpolation
   df.interpolate(method='linear')
   ```

6. NumPy broadcasting rules:
   - Arrays must have same dimensions, or
   - One array has dimension 1
   - Shape compatibility is checked from last dimension
   ```python
   # Example
   arr1 = np.array([[1, 2, 3],
                    [4, 5, 6]])  # Shape (2, 3)
   arr2 = np.array([10, 20, 30])  # Shape (3,)
   # arr1 + arr2 works through broadcasting
   ```

7. Series vs DataFrame:
   - Series: 1D labeled array, similar to dictionary
   - DataFrame: 2D labeled data structure with columns
   Both built on top of NumPy arrays but add labels and additional functionality.

### Hard Questions
8. Memory optimization techniques:
   ```python
   # Reduce data types
   df['int_col'] = df['int_col'].astype('int32')
   df['float_col'] = df['float_col'].astype('float32')
   
   # Use categorical for repeated strings
   df['category_col'] = df['category_col'].astype('category')
   
   # Chunk processing
   for chunk in pd.read_csv('large_file.csv', chunksize=10000):
       process_chunk(chunk)
   ```

9. Custom aggregation with groupby:
   ```python
   def custom_agg(group):
       return pd.Series({
           'mean_x2': (group['value'] ** 2).mean(),
           'custom_metric': group['value'].sum() / group['value'].count()
       })
   
   df.groupby('category').apply(custom_agg)
   ```

10. Pandas categorical data type:
    ```python
    # Creating categorical data
    df['category'] = pd.Categorical(df['category'])
    
    # Ordered categories
    df['size'] = pd.Categorical(['S', 'M', 'L'],
                               categories=['S', 'M', 'L'],
                               ordered=True)
    ```

## Matplotlib & Seaborn (Data visualization)

### Easy Questions
1. Matplotlib vs Seaborn:
   - Matplotlib: Low-level, more control, more verbose
   - Seaborn: High-level, statistical visualizations, better defaults

2. Simple line plot with Matplotlib:
   ```python
   import matplotlib.pyplot as plt
   
   plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
   plt.xlabel('X axis')
   plt.ylabel('Y axis')
   plt.title('Simple Line Plot')
   plt.show()
   ```

3. The output will be a plot showing a curve (y=x²) without axes or grid lines, as axis('off') hides all axis elements.

### Medium Questions
4. figure() vs subplot():
   ```python
   # figure() creates a new figure
   plt.figure(figsize=(10, 5))
   
   # subplot() creates axes within a figure
   fig, (ax1, ax2) = plt.subplots(1, 2)
   ax1.plot([1, 2, 3])
   ax2.scatter([1, 2, 3], [4, 5, 6])
   ```

5. Combining plot types:
   ```python
   fig, ax = plt.subplots()
   x = np.arange(5)
   ax.bar(x, height=[2, 5, 7, 3, 4])
   ax.plot(x, [4, 6, 3, 8, 5], color='red', marker='o')
   ```

6. Seaborn's hue parameter:
   - Adds third variable through color encoding
   - Automatically creates legend
   ```python
   sns.scatterplot(data=df,
                   x='x_col',
                   y='y_col',
                   hue='category_col')
   ```

7. Customizing plots:
   ```python
   # Matplotlib style
   plt.style.use('seaborn')
   plt.rcParams['font.size'] = 12
   plt.rcParams['figure.figsize'] = (10, 6)
   
   # Seaborn style
   sns.set_style('whitegrid')
   sns.set_palette('husl')
   sns.set_context('talk')
   ```

### Hard Questions
8. Interactive visualizations:
   ```python
   from matplotlib.widgets import Slider
   
   fig, ax = plt.subplots()
   plt.subplots_adjust(bottom=0.25)
   
   t = np.arange(0.0, 1.0, 0.001)
   s = np.sin(2*np.pi*t)
   l, = plt.plot(t, s)
   
   ax_freq = plt.axes([0.1, 0.1, 0.65, 0.03])
   s_freq = Slider(ax_freq, 'Freq', 0.1, 30.0, valinit=3)
   
   def update(val):
       freq = s_freq.val
       l.set_ydata(np.sin(2*np.pi*freq*t))
   
   s_freq.on_changed(update)
   ```

9. Optimizing for large datasets:
   ```python
   # Use scatter plot with reduced opacity
   plt.plot(large_x, large_y, 'o',
            alpha=0.1, rasterized=True)
   
   # Use hexbin for density plots
   plt.hexbin(large_x, large_y,
              gridsize=30, cmap='YlOrRd')
   
   # Use plot_surface with stride
   ax.plot_surface(X, Y, Z,
                   rstride=10, cstride=10)
   ```

10. Custom visualization class:
    ```python
    class CustomPlot:
        def __init__(self, fig, ax):
            self.fig = fig
            self.ax = ax
            self.setup_plot()
        
        def setup_plot(self):
            self.ax.set_aspect('equal')
            self.ax.grid(True)
        
        def plot_custom(self, data, **kwargs):
            # Custom plotting logic
            colors = kwargs.get('colors', 'blue')
            sizes = kwargs.get('sizes', 100)
            
            scatter = self.ax.scatter(
                data[:, 0], data[:, 1],
                c=colors, s=sizes
            )
            return scatter
        
        def add_colorbar(self):
            return self.fig.colorbar(
                self.scatter,
                ax=self.ax
            )
    ```