function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
}
  
function Dialog(props) {
    return (
        <FancyBorder color="blue">
        <h2 className="Dialog-title">
            {props.title}
        </h2>
        <p className="Dialog-message">
            {props.message}
        </p>
        {props.children}
        </FancyBorder>
    );
}

export default Dialog;