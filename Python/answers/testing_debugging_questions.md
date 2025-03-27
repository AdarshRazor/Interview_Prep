# 🛠️ Testing & Debugging - Answers

## Unit Testing (unittest, pytest)

### Easy Questions
1. Unit testing is testing individual components/units of code in isolation. It's important because it:
   - Helps catch bugs early
   - Ensures code works as intended
   - Makes refactoring safer
   - Serves as documentation
   - Improves code design

2. unittest vs pytest differences:
   - unittest: Standard library, class-based, JUnit-style
   - pytest: Third-party, function-based, more features
   - pytest has better fixtures, parameterization, and assertion messages
   - pytest requires less boilerplate code

3. The output will show all tests passed (OK). The code:
   - Tests string upper() method
   - Tests isupper() method with two assertions
   Both tests will pass as the assertions are correct.

### Medium Questions
4. Test fixtures in pytest:
   ```python
   import pytest
   
   @pytest.fixture
   def sample_data():
       data = {'key': 'value'}
       # Setup
       yield data
       # Teardown (optional)
   
   def test_using_fixture(sample_data):
       assert sample_data['key'] == 'value'
   ```
   Unlike unittest's setUp/tearDown:
   - More flexible and reusable
   - Can be used at different scopes
   - Supports dependency injection

5. Mocking external dependencies:
   ```python
   from unittest.mock import Mock, patch
   
   def test_api_call():
       with patch('requests.get') as mock_get:
           mock_get.return_value.json.return_value = {'data': 'test'}
           result = my_api_function()
           assert result == 'test'
           mock_get.assert_called_once()
   ```

6. Parameterized tests in pytest:
   ```python
   @pytest.mark.parametrize('input,expected', [
       ('hello', 'HELLO'),
       ('world', 'WORLD'),
       ('Python', 'PYTHON')
   ])
   def test_upper(input, expected):
       assert input.upper() == expected
   ```

7. Assertions vs Expectations:
   ```python
   # Assertions: Verify state
   def test_addition():
       assert add(2, 3) == 5
   
   # Expectations: Verify behavior
   def test_api_call():
       mock_api = Mock()
       process_data(mock_api)
       mock_api.call_api.assert_called_once()
   ```

### Hard Questions
8. Testing asynchronous code:
   ```python
   import pytest
   import asyncio
   
   @pytest.mark.asyncio
   async def test_async_function():
       result = await async_function()
       assert result == expected_value
   
   # Testing with concurrent operations
   async def test_concurrent_operations():
       tasks = [async_operation() for _ in range(3)]
       results = await asyncio.gather(*tasks)
       assert all(r.success for r in results)
   ```

9. Comprehensive test suite design:
   ```python
   # test_config.py
   @pytest.fixture(scope='session')
   def app_config():
       return load_test_config()
   
   # test_database.py
   @pytest.fixture(scope='function')
   def db_session(app_config):
       engine = create_engine(app_config.DB_URL)
       Session = sessionmaker(bind=engine)
       session = Session()
       yield session
       session.rollback()
       session.close()
   
   # test_api.py
   @pytest.fixture
   def api_client(app_config):
       return APIClient(app_config.API_URL)
   ```

10. TDD with external systems:
    ```python
    # Step 1: Write failing test
    def test_user_registration():
        user_data = {'email': 'test@example.com'}
        result = register_user(user_data)
        assert result.success
        assert result.user_id
    
    # Step 2: Implement interface
    class UserRegistration:
        def register(self, data):
            raise NotImplementedError
    
    # Step 3: Mock external service
    def test_user_registration_with_external():
        with patch('external_service.register') as mock_register:
            mock_register.return_value = {'id': '123'}
            result = register_user({'email': 'test@example.com'})
            assert result.success
    ```

## Debugging (pdb, trace)

### Easy Questions
1. Python debugger (pdb):
   - Interactive debugger in standard library
   - Start with:
     ```python
     import pdb; pdb.set_trace()
     # Or in Python 3.7+
     breakpoint()
     ```

2. Setting breakpoints:
   ```python
   # Method 1: In code
   breakpoint()
   
   # Method 2: Command line
   python -m pdb script.py
   
   # Method 3: Runtime
   # At pdb prompt:
   (Pdb) b line_number
   (Pdb) b file.py:line_number
   ```

3. Debugging session output:
   ```
   > script.py(2)multiply()
   -> result = a * b
   (Pdb) p a
   5
   (Pdb) p b
   7
   (Pdb) n
   > script.py(3)multiply()
   -> return result
   (Pdb) p result
   35
   ```
   Shows variable values during execution.