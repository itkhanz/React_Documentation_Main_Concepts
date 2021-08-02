# Learn React


*Learn concepts step by step*, start with our [guide to main concepts](https://reactjs.org/docs/getting-started.html#learn-react).

## Introducing JSX
```javascript
const element = <h1>Hello, world!</h1>;
```
* It is called **JSX**, and it is a syntax extension to JavaScript. JSX produces React “elements”. 

### Embedding Expressions in JSX
* You can put any valid JavaScript expression inside the curly braces in JSX.
```javascript
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

### JSX is an Expression Too
* you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:
```javascript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### Specifying Attributes with JSX
* You may use quotes to specify string literals as attributes:
```javascript
const element = <div tabIndex="0"></div>;
```

* You may also use curly braces to embed a JavaScript expression in an attribute:
```javascript
const element = <img src={user.avatarUrl}></img>;
```

>Since JSX is closer to JavaScript than to HTML, React DOM uses ```camelCase``` property naming convention instead of HTML attribute names.
>For example, ```class``` becomes ```className``` in JSX, and tabindex becomes tabIndex.

### Specifying Children with JSX

* If a tag is empty, you may close it immediately with />, like XML:
```javascript
const element = <img src={user.avatarUrl} />;
```
* JSX tags may contain children:
```javascript
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```



```javascript
```
