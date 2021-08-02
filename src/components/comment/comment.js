import UserInfo from "./userInfo";

function Comment(props) {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    
    return (
      <div className="Comment">
        <div className="sectionDesc">
          <h4>Components and Props</h4>
          <p>Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be extracted to a separate component.</p>      
        </div>
      
        <UserInfo user={props.author} />
        <div className="Comment-text">
          Comment: {props.text}
        </div>
        <div className="Comment-date">
          Dated: {props.date.toLocaleString("en-US", options)}
        </div>

        <hr></hr>
      </div>
    );
};

export default Comment;