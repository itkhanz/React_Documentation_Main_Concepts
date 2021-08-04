import UserGreeting from './userGreeting';
import GuestGreeting from './guestGreeting';

function Greeting  (props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

export default Greeting;