function Welcome(props) {
    return (
        <div>
            <h3>Rendering a Component</h3>
            <p>When React sees an element representing a user-defined component, 
                it passes JSX attributes and children to this component as a single object. We call this object “props”.</p>
            <p>Hello, {props.name}</p>
            <hr></hr>
        </div>
    )
}

export default Welcome;