import './App.css';
import Boilerplate from './components/boilerplate';
import IntroducingJSX from './components/introJSX';
import Welcome from './components/welcome';
import Comment from './components/comment/comment';
import Clock from './components/clock/clock';
import Toggle from './components/toggleEvent';
import LoginControl from './components/loginConrol/loginConrol';
// import NumberList from './components/numberList';
import Blog from './components/blog';
import NameForm from './components/forms/nameform';
import Calculator from './components/liftingStateUp/calculator';
import WelcomeDialog from './components/composition/dialog/welcomeDialog';
import {Contacts, Chat, SplitPane} from './components/composition/splitPane/splitPane';
import SignUpDialog from './components/composition/dialog/signupDialog';

function App() {
  const author = {
    name: "John",
    avatarUrl: "https://source.unsplash.com/L8KQIPCODV8/100x100"
  };
  const today = new Date();

  // const numbers = [1, 2, 3, 4, 5];
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

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
        {/* <NumberList numbers={numbers} /> */}
        <Blog posts={posts} />
      </header>
      <NameForm />
      <Calculator />
      <div className="composition">
        <WelcomeDialog />
        <div style={{width: '100%', height: '150px', boxSizing: 'border-box', border: '10px solid rgba(185, 248, 250, 0.281)'}}>
          <SplitPane left={<Contacts />} right={<Chat />} />
        </div>
        <SignUpDialog />
        <hr></hr>
      </div>
      
    </div>
  );
}

export default App;
