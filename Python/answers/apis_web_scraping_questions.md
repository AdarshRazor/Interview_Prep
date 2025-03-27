# 🌐 APIs & Web Scraping - Answers

## REST APIs (requests library)

### Easy Questions
1. REST (Representational State Transfer) API is an architectural style for distributed systems that:
   - Uses standard HTTP methods (GET, POST, PUT, DELETE)
   - Is stateless (each request contains all necessary information)
   - Has a uniform interface
   - Uses resources as the key abstraction
   Unlike SOAP or RPC, REST is more lightweight and uses standard HTTP features.

2. Making a GET request with requests library:
   ```python
   import requests
   response = requests.get('https://api.example.com/data')
   data = response.json()  # If response is JSON
   ```

3. The output will be 200. This is the HTTP status code indicating a successful request. The code makes a GET request to JSONPlaceholder's todo endpoint and prints the response status.

### Medium Questions
4. HTTP Methods comparison:
   - GET: Retrieve data, idempotent, cacheable
   - POST: Create new resources, not idempotent
   - PUT: Update/replace existing resources, idempotent
   - DELETE: Remove resources, idempotent

5. API authentication methods:
   ```python
   # Basic Auth
   response = requests.get('https://api.example.com',
                         auth=('username', 'password'))
   
   # Token Auth
   headers = {'Authorization': 'Bearer your_token_here'}
   response = requests.get('https://api.example.com',
                         headers=headers)
   
   # API Key
   params = {'api_key': 'your_api_key_here'}
   response = requests.get('https://api.example.com',
                         params=params)
   ```

6. Request headers:
   ```python
   headers = {
       'Content-Type': 'application/json',
       'User-Agent': 'MyApp/1.0',
       'Accept': 'application/json'
   }
   response = requests.get('https://api.example.com',
                         headers=headers)
   ```

7. Handling JSON responses:
   ```python
   try:
       response = requests.get('https://api.example.com')
       response.raise_for_status()  # Raises exception for 4XX/5XX
       data = response.json()
   except requests.exceptions.JSONDecodeError:
       print('Invalid JSON response')
   except requests.exceptions.RequestException as e:
       print(f'Request failed: {e}')
   ```

### Hard Questions
8. Rate limiting strategies:
   ```python
   import time
   from ratelimit import limits, sleep_and_retry
   
   @sleep_and_retry
   @limits(calls=30, period=60)  # 30 calls per minute
   def make_api_request():
       response = requests.get('https://api.example.com')
       return response
   
   def exponential_backoff(retries=3):
       for i in range(retries):
           try:
               return make_api_request()
           except Exception:
               if i == retries - 1:
                   raise
               time.sleep(2 ** i)  # Exponential backoff
   ```

9. Implementing pagination:
   ```python
   def fetch_all_pages(base_url):
       all_data = []
       page = 1
       while True:
           response = requests.get(
               base_url,
               params={'page': page, 'per_page': 100}
           )
           if response.status_code == 404:
               break
           data = response.json()
           if not data:  # Empty page
               break
           all_data.extend(data)
           page += 1
       return all_data
   ```

10. Robust error handling system:
    ```python
    class APIClient:
        def __init__(self, base_url, timeout=10):
            self.base_url = base_url
            self.timeout = timeout
            self.session = requests.Session()
        
        def make_request(self, method, endpoint, **kwargs):
            retries = kwargs.pop('retries', 3)
            backoff_factor = kwargs.pop('backoff_factor', 2)
            
            for attempt in range(retries):
                try:
                    response = self.session.request(
                        method,
                        f'{self.base_url}/{endpoint}',
                        timeout=self.timeout,
                        **kwargs
                    )
                    response.raise_for_status()
                    return response.json()
                except requests.exceptions.Timeout:
                    if attempt == retries - 1:
                        raise
                    time.sleep(backoff_factor ** attempt)
                except requests.exceptions.RequestException as e:
                    if response.status_code >= 500:
                        if attempt == retries - 1:
                            raise
                        time.sleep(backoff_factor ** attempt)
                    else:
                        raise
    ```

## Web Scraping (BeautifulSoup, Scrapy)

### Easy Questions
1. APIs vs Web Scraping differences:
   - APIs: Structured data access, stable interface, rate limits
   - Web Scraping: HTML parsing, site structure dependent, more fragile

2. Extracting text with BeautifulSoup:
   ```python
   from bs4 import BeautifulSoup
   soup = BeautifulSoup(html, 'html.parser')
   text = soup.find('div', class_='content').get_text()
   ```

3. The output will be "World". The code creates a BeautifulSoup object from HTML, navigates to the <b> tag inside <p>, and extracts its text content.

### Medium Questions
4. BeautifulSoup vs Scrapy:
   - BeautifulSoup: Simple HTML parsing library, good for small projects
   - Scrapy: Full-featured framework with built-in support for:
     * Concurrent requests
     * Pipeline processing
     * Middleware system
     * Data export

5. DOM navigation with BeautifulSoup:
   ```python
   # Finding nested elements
   soup.find('div', class_='container')\
       .find('ul', class_='list')\
       .find_all('li')
   
   # Parent/sibling navigation
   element.parent  # Parent element
   element.next_sibling  # Next sibling
   element.previous_sibling  # Previous sibling
   ```

6. CSS selectors and XPath:
   ```python
   # CSS Selectors
   soup.select('div.container > ul.list > li')
   
   # XPath
   from lxml import html
   tree = html.fromstring(page_content)
   tree.xpath('//div[@class="container"]//li/text()')
   ```

7. Handling dynamic content:
   ```python
   from selenium import webdriver
   from selenium.webdriver.common.by import By
   from selenium.webdriver.support.ui import WebDriverWait
   from selenium.webdriver.support import expected_conditions as EC
   
   driver = webdriver.Chrome()
   driver.get('https://example.com')
   
   # Wait for element to load
   element = WebDriverWait(driver, 10).until(
       EC.presence_of_element_located((By.ID, 'dynamic-content'))
   )
   ```

### Hard Questions
8. Anti-detection techniques:
   ```python
   class StealthScraper:
       def __init__(self):
           self.session = requests.Session()
           self.user_agents = [
               'Mozilla/5.0 ...',
               'Chrome/91.0 ...'
           ]
           self.proxies = [
               {'http': 'http://proxy1.com'},
               {'http': 'http://proxy2.com'}
           ]
       
       def get_page(self, url):
           headers = {
               'User-Agent': random.choice(self.user_agents),
               'Accept': 'text/html,application/xhtml+xml',
               'Accept-Language': 'en-US,en;q=0.9',
               'Referer': 'https://www.google.com'
           }
           proxy = random.choice(self.proxies)
           time.sleep(random.uniform(1, 3))  # Random delay
           return self.session.get(url,
                                 headers=headers,
                                 proxies=proxy)
   ```

9. Distributed scraping with robots.txt:
   ```python
   from urllib.robotparser import RobotFileParser
   from distributed import Client
   
   class DistributedScraper:
       def __init__(self):
           self.rp = RobotFileParser()
           self.client = Client()  # Dask distributed
       
       def can_fetch(self, url):
           self.rp.set_url(f"{urlparse(url).scheme}://"
                          f"{urlparse(url).netloc}/robots.txt")
           self.rp.read()
           return self.rp.can_fetch('*', url)
       
       def scrape_urls(self, urls):
           allowed_urls = [url for url in urls
                         if self.can_fetch(url)]
           futures = [self.client.submit(self.scrape_url, url)
                     for url in allowed_urls]
           return self.client.gather(futures)
   ```

10. Adaptive web scraper:
    ```python
    class AdaptiveScraper:
        def __init__(self):
            self.patterns = {}
            self.fallback_patterns = {}
        
        def learn_pattern(self, html, target_data):
            soup = BeautifulSoup(html, 'html.parser')
            for key, value in target_data.items():
                elements = soup.find_all(text=value)
                if elements:
                    element = elements[0]
                    path = self._get_css_path(element)
                    self.patterns[key] = path
        
        def _get_css_path(self, element):
            path = []
            while element.parent:
                if element.get('id'):
                    path.append(f'#{element["id"]}')
                    break
                siblings = element.find_previous_siblings(element.name)
                path.append(f'{element.name}:nth-child({len(siblings)+1})')
                element = element.parent
            return ' > '.join(reversed(path))
        
        def scrape(self, html):
            soup = BeautifulSoup(html, 'html.parser')
            result = {}
            for key, pattern in self.patterns.items():
                try:
                    element = soup.select_one(pattern)
                    if element:
                        result[key] = element.text
                    else:
                        result[key] = self._try_fallback(soup, key)
                except Exception:
                    result[key] = self._try_fallback(soup, key)
            return result
    ```