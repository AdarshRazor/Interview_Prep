# Extras

## componentDidMount()

`componentDidMount` is a lifecycle method in React that is called once, immediately after a component is inserted into the DOM. It's a common place to initiate side effects such as fetching data, setting up subscriptions, or interacting with the DOM directly.

### When to Use componentDidMount

* **Data Fetching:** If you need to load data from a remote endpoint (e.g., an API) when the component is rendered, componentDidMount is the place to initiate that request.
* **DOM Manipulation:** If you need to perform operations on the DOM, such as measuring the size of an element or setting up third-party libraries that interact with the DOM, this is the right lifecycle method.
* **Subscriptions:** If you need to set up subscriptions (e.g., WebSockets, observables, event listeners), this is where you initialize them.

### Example

Here's a simple example of how you might use componentDidMount to fetch data from an API:

```javascript
import React, { Component } from 'react';
import axios from 'axios';

class MyComponent extends Component {
  state = {
    data: null,
    loading: true,
    error: null,
  };

  //Here we are using componentDidMount()
  componentDidMount() {
    axios.get('https://api.example.com/data')
      .then(response => {
        this.setState({ data: response.data, loading: false });
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h1>Data from API:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
}

export default MyComponent;
```

## Class components and constructor

```javascript
import {Component} from 'react';

export default class SortingVisualizer extends Component {

    // constructor defined in class component
    constructor(){
        super(props);

        this.state = {
            array: []
        };
    }

    // invoked immediately after a component is mounted
    componentDidMount() {
        this.resetArray();
    }

    // method (function defined that operates on instances of that class) 
    resetArray() {
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(5,1000));
        }
        this.setState({array: array});
    }

    render() {
        // Destructuring the component
        const {array} = this.state;

        return(
            <>
            Sorting component
            </>
        )
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
```