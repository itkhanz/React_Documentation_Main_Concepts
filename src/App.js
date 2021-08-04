import './App.css';
import Boilerplate from './components/boilerplate';
import IntroducingJSX from './components/introJSX';
import Welcome from './components/welcome';
import Comment from './components/comment/comment';
import Clock from './components/clock/clock';
import Toggle from './components/toggleEvent';
import LoginControl from './components/loginConrol/loginConrol';

function App() {
  const author = {
    name: "John",
    avatarUrl: "https://source.unsplash.com/L8KQIPCODV8/100x100"
  };
  const today = new Date();

  return (
    <div className="App">
      <header className="App-header">
        <Boilerplate />
        {/* {getGreeting(user)} */}
        {/* {element} */}
        <IntroducingJSX />
        <Welcome name="Sara" />
        <Comment author={author} text="Extracting Components" date={today}/>
        <Clock />
        <Toggle />
        <LoginControl />
      </header>
    </div>
  );
}

export default App;
