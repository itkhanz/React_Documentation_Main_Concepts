function FormattedDate (props) {
    return(
        <h4>It is {props.date.toLocaleTimeString()}.</h4>
    );
}

export default FormattedDate;