# 100 React Questions

## Basics - 1 `( V . IMP )`

### Q1. What is React? What is the Role of React in software development?

* Open sourcec JS library
* Building user interface
* Simplifies the creation of SPA (Single Page Application) - resuable components

### Q2. What are the Key Features of React?

* Virtual DOM
* Componenet based arch 
* Reusability & Composition
* JSX (JavaScript XML)
* Declarative Syntax
* Community & Ecosystem
* React Hooks

| No. | Feature                        | Description                                                                                                                                                         |
|-----|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1   | Virtual DOM                    | React utilizes a virtual representation of the DOM, allowing efficient updates by `minimizing direct manipulation of the actual DOM`, resulting in improved performance. |
| 2   | Component-Based Architecture   | React structures user interfaces as modular, `reusable components`, promoting a more maintainable and scalable approach to building applications.                     |
| 3   | Reusability & Composition      | React enables the creation of reusable components that can be composed together, fostering a modular and efficient development process.                             |
| 4   | JSX (JavaScript XML)           | JSX is a syntax extension for JavaScript used in React, allowing developers to write `HTML-like code` within JavaScript, enhancing readability and maintainability.   |
| 5   | Declarative Syntax             | React has a declarative programming style (JSX), where developers `focus on "what" the UI should look like` and React handles the "how" behind the scenes. This simplifies the code. |
| 6   | Community & Ecosystem          | React benefits from a vibrant and `extensive community`, contributing to a rich ecosystem of libraries, tools, and resources, fostering collaborative development and innovation. |
| 7   | React Hooks                    | Hooks are functions that enable functional components to `manage state and lifecycle features`, providing a more concise and expressive way to handle component logic. |


### Q3. What is DOM? What is the difference between HTML and DOM?

DOM (Document Object Model) represents the web page as a `tree-like struture` which allows JavaScript to dynamically access and manupulate the content and structure of a web page. Which static HTML is just the code.

DOM Tree(HTML Page) - [Image1] 

### Q4. What is Virtual DOM? Difference between DOM and Virtual DOM?

React uses a virtual DOM to efficiently update the UI `without re-render the entire page`, which helps improve performace and make the application more responsive.

| DOM                                                              | Virtual DOM                                             |
|------------------------------------------------------------------|---------------------------------------------------------|
| DOM is the actual representation of the webpage.                 | Virtual DOM is a lightweight copy of the DOM.           |
| Re-renders the entire page when updates occur.                   | Re-renders only the changed parts efficiently.          |
| Can be slower, especially with frequent updates.                 | Optimized for faster rendering.                         |
| Suitable for static websites and simple applications.            | Ideal for dynamic and complex single-page applications with frequent updates. |


### Q5. What are React Components? What are the main elements of it?\

In React, a component is a `reusable building block` for creating user interfaces.

```javascript
// 1. Import the React library
import React from 'react';

// 2. Define a functional component
function Component() {
  // 3. Return JSX to describe the component's UI
  return (
    <div>
      <h1>I am a React Reusable Component</h1>
    </div>
  );
}

// 4. Export the component to make it available for use in other files
export default Component;
```

### Q6. What is SPA (Single Page Application)?

### Q7. What are the 5 Advantages of React?

### Q8. What are the Disadvantages of React?

### Q9. What is the role of JSX in React? (3 points)

### Q10. What is the difference between Declarative & Imperative syntax?