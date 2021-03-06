import logo from '../logo.svg';

function Boilerplate(props) {
    
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Implementation of the React Main Concepts official documentation.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </div>
            <hr></hr>
        </div>
    )
}

export default Boilerplate;