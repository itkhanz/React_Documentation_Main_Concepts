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
        <div className="Dialog-message">
            {props.message}
        </div>
        {props.children}
        </FancyBorder>
    );
}

export default Dialog;