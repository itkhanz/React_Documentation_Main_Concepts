import React from 'react';
import Greeting from './greeting';
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';


class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }


    render() {
        const isLoggedIn = this.state.isLoggedIn;
        // let button;
        // if (isLoggedIn) {
        //     button = <LogoutButton onClick={this.handleLogoutClick} />;
        // } else {
        //     button = <LoginButton onClick={this.handleLoginClick} />;
        // }


        return(
            <div>
                <div className="sectionDesc">
                <h3>Conditional Rendering</h3>
                    <ul>
                        <li>Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.</li>
                        <li>You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.</li>
                    </ul>
                </div>

                <Greeting isLoggedIn={isLoggedIn}/>
                {/* {button}   */}
                {isLoggedIn
                    ? <LogoutButton onClick={this.handleLogoutClick} />
                    : <LoginButton onClick={this.handleLoginClick} />
                }

                <hr></hr>
            </div>
        );
    }
}

export default LoginControl;