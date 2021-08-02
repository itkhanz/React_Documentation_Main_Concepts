# Learn React


*Learn concepts step by step*, start with our [guide to main concepts](https://reactjs.org/docs/getting-started.html#learn-react).

## 5. State and Lifecycle



* Consider the ticking clock example from one of the previous sections.
* In Rendering Elements, we have only learned one way to update the UI. We call ```ReactDOM.render()``` to change the rendered output:
```javascript
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```
* In this section, we will learn how to make the Clock component truly reusable and encapsulated. It will set up its own timer and update itself every second.

* We can start by encapsulating how the clock looks:
```javascript
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

* However, it misses a crucial requirement: the fact that the Clock sets up a timer and updates the UI every second should be an implementation detail of the Clock.
* Ideally we want to write this once and have the Clock update itself:
```javascript
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
* To implement this, we need to add “state” to the ```Clock``` component. ```State``` is similar to props, but it is private and fully controlled by the component.

---

### Converting a Function to a Class
You can convert a function component like ```Clock``` to a class in five steps:


1. Create an ES6 class, with the same name, that extends ```React.Component```.
2.  Add a single empty method to it called ```render()```.
3.  Move the body of the function into the ```render()``` method.
4.  Replace ```props``` with ```this.props``` in the ```render()``` body.
5.  Delete the remaining empty function declaration.
```javascript
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```
```Clock``` is now defined as a class rather than a function.


The ```render``` method will be called each time an update happens, but as long as we render ```<Clock />``` into the same DOM node, only a single instance of the ```Clock``` class will be used. This lets us use additional features such as local state and lifecycle methods.


### Adding Local State to a Class
We will move the ```date``` from props to state in three steps:
1.  Replace ```this.props.date``` with ```this.state.date``` in the ```render()``` method
2.  Add a class ```constructor``` that assigns the initial ```this.state```. Class components should always call the base constructor with props.
3.  Remove the ```date prop``` from the ```<Clock />``` element:

We will later add the timer code back to the component itself.
The result looks like this:
```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
Next, we’ll make the Clock set up its own timer and update itself every second.

---

### Adding Lifecycle Methods to a Class

* We can declare special methods on the component class to run some code when a component mounts and unmounts. These methods are called “lifecycle methods”.

* The ```componentDidMount()``` method runs after the component output has been rendered to the DOM. This is a good place to set up a timer:
```javascript
 componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
```
>Note how we save the timer ID right on ```this``` (this.timerID).

> While ```this.props``` is set up by React itself and ```this.state``` has a special meaning, you are free to add additional fields to the class manually if you need to store something that doesn’t participate in the data flow (like a timer ID).

*   We will tear down the timer in the ```componentWillUnmount()``` lifecycle method:
```javascript
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
```

*   Finally, we will implement a method called ```tick()``` that the ```Clock``` component will run every second. It will use ```this.setState()``` to schedule updates to the component local state:

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
Now the clock ticks every second.

Let’s quickly recap what’s going on and the order in which the methods are called:

1.  When ```<Clock />``` is passed to ```ReactDOM.render()```, React calls the constructor of the Clock component. Since ```Clock``` needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.
2.  React then calls the ```Clock``` component’s ```render()``` method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock’s ```render``` output.
3.  When the ```Clock``` output is inserted in the DOM, React calls the ```componentDidMount()``` lifecycle method. Inside it, the Clock component asks the browser to set up a timer to call the component’s ```tick()``` method once a second.
4.  Every second the browser calls the ```tick()``` method. Inside it, the ```Clock``` component schedules a UI update by calling ```setState()``` with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls the ```render()``` method again to learn what should be on the screen. This time, ```this.state.date``` in the ```render()``` method will be different, and so the render output will include the updated time. React updates the DOM accordingly.
5.  If the ```Clock``` component is ever removed from the DOM, React calls the ```componentWillUnmount(```) lifecycle method so the timer is stopped.

---

### Using State Correctly
There are three things you should know about ```setState()```.
1.  Do Not Modify State Directly. Instead, use ```setState()```: 
```javascript
// Wrong
this.state.comment = 'Hello';
// Correct
this.setState({comment: 'Hello'});
```
> The only place where you can assign this.state is the constructor.

2.  Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
```javascript
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```
To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

```javascript
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

3.  When you call setState(), React merges the object you provide into the current state.

---

### The Data Flows Down
*   Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class. Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.
*   A component may choose to pass its state down as props to its child components:
```javascript
<FormattedDate date={this.state.date} />
```
*   The FormattedDate component would receive the date in its props and wouldn’t know whether it came from the Clock’s state, from the Clock’s props, or was typed by hand:
```javascript
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```

