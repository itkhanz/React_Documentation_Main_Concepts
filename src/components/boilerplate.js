import logo from '../logo.svg';

function Boilerplate(props) {
    
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <img src={logo} className="App-logo" alt="logo" />
                <p style={{ textAlign: 'center !important' }}>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                textAlign= 'center !important'
                >
                Learn React
                </a>
            </div>
            <hr></hr>
        </div>
    )
}

export default Boilerplate;