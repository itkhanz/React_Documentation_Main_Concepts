function Avatar (props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
            style={{borderRadius: '50%'}}
        />
    );
}
export default Avatar;