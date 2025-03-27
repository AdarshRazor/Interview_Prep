# 🌐 APIs & Web Scraping - Coding Practice Questions

## REST APIs (requests library)

### Easy Questions
1. Write a function that makes a GET request to a public API and returns the JSON response.
   ```python
   # Example:
   # Input: 'https://jsonplaceholder.typicode.com/todos/1'
   # Output: {'userId': 1, 'id': 1, 'title': 'delectus aut autem', 'completed': False}
   ```

2. Create a function that sends a POST request with JSON data to an API endpoint.
   ```python
   # Example:
   # Input: url='https://jsonplaceholder.typicode.com/posts', data={'title': 'foo', 'body': 'bar', 'userId': 1}
   # Output: Response object with status code 201 and JSON response containing the created resource
   ```

3. Implement a function that fetches data from an API and handles basic error responses.
   ```python
   # Example:
   # Input: 'https://jsonplaceholder.typicode.com/nonexistent'
   # Output: Appropriate error message or fallback value when the API returns a 404 status code
   ```

### Medium Questions
4. Write a function that authenticates with an API using different authentication methods (API key, OAuth, etc.).
   ```python
   # Example:
   # Input: url='https://api.example.com/data', api_key='your_api_key', auth_type='header'
   # Output: Authenticated response from the API
   ```

5. Create a function that implements pagination to fetch all results from an API that limits results per page.
   ```python
   # Example:
   # Input: 'https://api.github.com/repos/python/cpython/issues'
   # Output: Complete list of issues across all pages
   ```

6. Implement a function that makes parallel API requests to multiple endpoints and aggregates the results.
   ```python
   # Example:
   # Input: ['https://jsonplaceholder.typicode.com/users/1', 'https://jsonplaceholder.typicode.com/users/2']
   # Output: Combined data from both API endpoints
   ```

7. Write a function that implements rate limiting for API requests to avoid exceeding usage limits.
   ```python
   # Example:
   # Input: urls=['https://api.example.com/endpoint1', 'https://api.example.com/endpoint2', ...], rate_limit=5, time_period=60
   # Output: Results from all endpoints while ensuring no more than 5 requests per 60 seconds
   ```

### Hard Questions
8. Create a function that implements a robust retry mechanism for failed API requests with exponential backoff.
   ```python
   # Example:
   # Input: url='https://unstable-api.example.com/data', max_retries=5, initial_backoff=1
   # Output: Response data after successfully retrying failed requests with increasing wait times
   ```

9. Implement a function that creates a simple API client class with caching capabilities to minimize redundant requests.
   ```python
   # Example:
   # Input: APIClient(base_url='https://api.example.com', cache_expiry=300)
   # Output: Client object that caches responses and only makes new requests when cache expires
   ```

10. Write a function that implements a webhook receiver that processes incoming API data and triggers appropriate actions.
    ```python
    # Example:
    # Input: Flask app with endpoint that receives webhook data from a payment processor
    # Output: System that validates the webhook signature, processes the event type, and performs corresponding actions
    ```

## Web Scraping (BeautifulSoup, Scrapy)

### Easy Questions
1. Write a function that extracts all links from a webpage using BeautifulSoup.
   ```python
   # Example:
   # Input: URL of a webpage
   # Output: List of all hyperlinks (href attributes) found on the page
   ```

2. Create a function that scrapes a simple table from a webpage and converts it to a pandas DataFrame.
   ```python
   # Example:
   # Input: URL of a webpage containing an HTML table
   # Output: pandas DataFrame representing the table data
   ```

3. Implement a function that extracts specific elements from a webpage using CSS selectors.
   ```python
   # Example:
   # Input: URL and CSS selector '.article-title'
   # Output: Text content of all elements matching the selector
   ```

### Medium Questions
4. Write a function that navigates through multiple pages of a website and scrapes data from each page.
   ```python
   # Example:
   # Input: Base URL of a paginated list
   # Output: Combined data from all pages
   ```

5. Create a function that logs into a website with a form and scrapes content from authenticated pages.
   ```python
   # Example:
   # Input: Login URL, username, password
   # Output: Content from a protected page after successful authentication
   ```

6. Implement a function that uses Scrapy to create a spider that crawls a website and extracts structured data.
   ```python
   # Example:
   # Input: Starting URL and data extraction rules
   # Output: Scraped items in a structured format (JSON, CSV, etc.)
   ```

7. Write a function that handles dynamic content by using a headless browser (like Selenium) with BeautifulSoup.
   ```python
   # Example:
   # Input: URL with JavaScript-rendered content
   # Output: Extracted data after the JavaScript has executed
   ```

### Hard Questions
8. Create a function that implements a distributed web scraping system using Scrapy and Scrapyd.
   ```python
   # Example:
   # Input: List of URLs to scrape, number of worker nodes
   # Output: Distributed scraping system that balances load across workers
   ```

9. Implement a function that scrapes data while respecting robots.txt, implementing rate limiting, and rotating user agents to avoid blocking.
   ```python
   # Example:
   # Input: Target website URL
   # Output: Ethically scraped data with mechanisms to avoid detection and blocking
   ```

10. Write a function that creates a self-healing web scraper that can adapt to changes in website structure.
    ```python
    # Example:
    # Input: Website URL and multiple alternative selectors for target data
    # Output: Robust scraper that can continue extracting data even when the primary selectors fail
    ```