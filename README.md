# Learn React


*Learn concepts step by step*, start with our [guide to main concepts](https://reactjs.org/docs/getting-started.html#learn-react).

## Rendering Elements

* Elements are the smallest building blocks of React apps.
* An element describes what you want to see on the screen:
```javascript
const element = <h1>Hello, world!</h1>;
```
>One might confuse elements with a more widely known concept of “components”.  Elements are what components are “made of”, and we encourage you to read this section before jumping ahead.


### Rendering an Element into the DOM
* To render a React element into a root DOM node, pass both to ```ReactDOM.render()```:

```javascript
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

### Updating the Rendered Element
* React elements are immutable. Once you create an element, you can’t change its children or attributes.
* With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ```ReactDOM.render()``.
Consider this ticking clock example:
```javascript
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```
It calls ```ReactDOM.render()``` every second from a ```setInterval()``` callback.

>In practice, most React apps only call ```ReactDOM.render()``` once. In the next sections we will learn how such code gets encapsulated into ```stateful components```.

### React Only Updates What’s Necessary

* React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

![Rendering Element example animation](https://reactjs.org/c158617ed7cc0eac8f58330e49e48224/granular-dom-updates.gif "ticking clock element")

* Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM.
