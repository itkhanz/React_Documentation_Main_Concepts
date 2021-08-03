# Learn React


*Learn concepts step by step*, start with our [guide to main concepts](https://reactjs.org/docs/getting-started.html#learn-react).

## 6. Handling Events
Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:



* React events are named using camelCase, rather than lowercase.

* With JSX you pass a function as the event handler, rather than a string.
  * For example, the HTML:

  ```javascript
  <button onclick="activateLasers()">
    Activate Lasers
  </button>
  }
  ```
  * is slightly different in React:
  ```javascript
  <button onClick={activateLasers}>
    Activate Lasers
  </button>
  ```

* Another difference is that you cannot return false to prevent default behavior in React. You must call ```preventDefault``` explicitly.

```javascript
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

* When using React, you generally don’t need to call ```addEventListener``` to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.

* When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. For example, this Toggle component renders a button that lets the user toggle between “ON” and “OFF” states:
```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

* To implement this, we need to add “state” to the ```Clock``` component. ```State``` is similar to props, but it is private and fully controlled by the component.

> You have to be careful about the meaning of ```this``` in JSX callbacks. In JavaScript, class methods are not ```bound``` by default. If you forget to bind ```this.handleClick``` and pass it to ```onClick```, ```this``` will be ```undefined``` when the function is actually called.  
> This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without ```()``` after it, such as ```onClick={this.handleClick}```, you should bind that method.

* If you are using the experimental ```public class fields syntax```, you can use class fields to correctly bind callbacks:
```javascript
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```
---

### Passing Arguments to Event Handlers

Inside a loop, it is common to want to pass an extra parameter to an event handler. For example, if id is the row ID, either of the following would work:
```javascript
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
The above two lines are equivalent, and use ```arrow functions ```and ```Function.prototype.bind``` respectively.  

In both cases, the e argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.