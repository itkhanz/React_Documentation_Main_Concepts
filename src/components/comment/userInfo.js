import Avatar from "./avatar";

function UserInfo (props) {
    return (
        <div className="UserInfo" >
          <Avatar user={props.user} />
          <div className="UserInfo-name">
            Author: {props.user.name}
          </div>
        </div>
    );
};
export default UserInfo;