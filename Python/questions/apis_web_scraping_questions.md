# 🌐 APIs & Web Scraping - Practice Questions

## REST APIs (requests library)

### Easy Questions
1. What is a REST API and how does it differ from other API types?
2. How do you make a simple GET request using the requests library in Python?
3. What will be the output of the following code?
   ```python
   import requests
   response = requests.get('https://jsonplaceholder.typicode.com/todos/1')
   print(response.status_code)
   ```

### Medium Questions
4. Explain the difference between GET, POST, PUT, and DELETE HTTP methods and when you would use each.
5. How would you handle authentication in API requests using the requests library?
6. What are request headers and how do you set them when making API calls?
7. Explain how to handle and parse JSON responses from REST APIs in Python.

### Hard Questions
8. Describe strategies for handling rate limiting and throttling when working with external APIs.
9. How would you implement pagination when fetching large datasets from an API?
10. Explain how to design a robust error handling system for API requests that deals with network issues, timeouts, and API-specific error codes.

## Web Scraping (BeautifulSoup, Scrapy)

### Easy Questions
1. What is the difference between APIs and web scraping for data collection?
2. How do you extract text from an HTML element using BeautifulSoup?
3. What will be the output of the following code?
   ```python
   from bs4 import BeautifulSoup
   html = '<p class="message">Hello, <b>World</b>!</p>'
   soup = BeautifulSoup(html, 'html.parser')
   print(soup.p.b.string)
   ```

### Medium Questions
4. Explain the difference between BeautifulSoup and Scrapy and when you would use each.
5. How would you navigate a website's DOM structure to find nested elements using BeautifulSoup?
6. What are CSS selectors and XPath expressions, and how do you use them in web scraping?
7. Explain how to handle dynamic content loaded with JavaScript when scraping websites.

### Hard Questions
8. Describe techniques for avoiding detection and blocking when scraping websites at scale.
9. How would you implement a distributed web scraping system that respects robots.txt and maintains politeness?
10. Explain how to design a robust web scraper that can adapt to changes in website structure and handle various edge cases.