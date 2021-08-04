# Learn React


*Learn concepts step by step*, start with our [guide to main concepts](https://reactjs.org/docs/getting-started.html#learn-react).

## 7. Conditional Rendering

In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.



* Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.
  ```javascript
  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }

  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  ```
  * We’ll create a Greeting component that displays either of these components depending on whether a user is logged in:
  ```javascript
  function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
  }

  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
  );
  ```
* You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.
  * Consider these two new components representing Logout and Login buttons:

  ```javascript
  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }

  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }
  ```
* In the example below, we will create a ```stateful component``` called ```LoginControl```.
* It will render either ```<LoginButton />``` or ```<LogoutButton />``` depending on its current state. It will also render a ```<Greeting />``` from the previous example:
```javascript
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
```

---

### Inline If with Logical && Operator
You may embed expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. It can be handy for conditionally including an element:  

* It works because in JavaScript, ```true && expression``` always evaluates to ```expression```, and ```false && expression``` always evaluates to ```false```.
* Therefore, if the condition is ```true```, the element right after ```&&``` will appear in the output. If it is ```false```, React will ignore and skip it.


```javascript
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```
---

### Inline If-Else with Conditional Operator
Another method for conditionally rendering elements inline is to use the JavaScript ```conditional operator condition ? true : false```.

* In the example below, we use it to conditionally render a small block of text.
```javascript
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

---

### Preventing Component from Rendering

In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return ```null``` instead of its render output.



* In the example below, the ```<WarningBanner />``` is rendered depending on the value of the prop called ```warn```. If the value of the prop is ```false```, then the component does not render:
```javascript
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
```
* Returning ```null``` from a component’s ```render``` method does not affect the firing of the component’s lifecycle methods. For instance ```componentDidUpdate``` will still be called.