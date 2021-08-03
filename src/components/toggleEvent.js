import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true};

        // In JavaScript, class methods are not bound by default.
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        // console.log('this is:', this);
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    // Alternative class field syntax 
    // This syntax ensures `this` is bound within handleClick.
    // So no neeed to bind this.handleClick in Constructor
    // handleClick = () => {
    //     console.log('this is:', this);
    // }

    render () {
        return (
            <div>
                <div className="sectionDesc">
                    <h4>Handling Events</h4>
                    <ul>
                        <li>React events are named using camelCase, rather than lowercase.</li>
                        <li>With JSX you pass a function as the event handler, rather than a string.</li>
                    </ul>
                    <p><em>
                        In JavaScript, class methods are not bound by default. 
                        If you forget to bind <span className="imp">this.handleClick </span>  
                        and pass it to <span className="imp">onClick</span>, 
                        this will be undefined when the function is actually called.<br/>
                        Generally, if you refer to a method without () after it, 
                        such as <span className="imp">onClick=&#123;this.handleClick&#125;</span>, you should bind that method.
                    </em></p>
                </div>

                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF' }
                    {/* Click me */}
                </button>

                <hr></hr>
            </div>
        );
    }
}

export default Toggle;