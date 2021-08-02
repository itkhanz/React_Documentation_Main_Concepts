function IntroducingJSX(props) {
    // JSX is an Expression Too
    function getGreeting(user) {
        if (user) {
          return (
            <div>
              <h3>JSX is an Expression Too</h3>
              <p>Embedding Expressions in JSX: {formatName(user)}!</p>
              <hr></hr>
              </div>
          );
        }
          return <h1>Hello, Stranger.</h1>;
    }

    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }
    
    const user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };

    // JSX produces React “elements”. It is called JSX, and it is a syntax extension to JavaScript. 
    // const element = <h1>Hello, world!</h1>;

    // You can put any valid JavaScript expression inside the curly braces in JSX. 
    const element = (
        <h1>
        Hello, {formatName(user)}!
        </h1>
    );
    
    return (
        <div>
            {getGreeting(user)}
        </div>
        
    )
}

export default IntroducingJSX;