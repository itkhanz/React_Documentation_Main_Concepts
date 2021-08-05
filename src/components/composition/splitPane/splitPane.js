import './splitPane.css';

export function Contacts() {
    return <div className="Contacts">Contacts</div>;
  }
  
export function Chat() {
    return (
        <div className="Chat">
            Chat
            <p><em>
                React elements like &#60;Contacts /&#62; and &#60;Chat /&#62; are just objects, so you can pass them as props like any other data. 
            </em></p>
        </div>
    );
}

export function SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    );
}