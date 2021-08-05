import './welcomeDialog.css';
import Dialog from './dialog';

// function FancyBorder(props) {
//     return (
//         <div className={'FancyBorder FancyBorder-' + props.color}>
//             {props.children}
//         </div>
//     );
// }

// function WelcomeDialog() {
//     return (
//         <FancyBorder color="blue">
//             <h2 className="Dialog-title">Containment</h2>
//             <p className="Dialog-message">Some components don’t know their children ahead of time. We recommend that such components use the special children prop to pass children elements directly into their output:</p>
//         </FancyBorder>
//     );
// }

  
function WelcomeDialog() {
    return (
      <div>
        <Dialog
            title="Containment"
            message = {<ul>
                        <li>Some components don’t know their children ahead of time.</li>
                        <li>We recommend that such components use the special children prop to pass children elements directly into their output</li>
                    </ul>}
        />
        <Dialog
            title="Specialization"
            message = {<ul>
                        <li>Sometimes we think about components as being “special cases” of other components. For example, we might say that a WelcomeDialog is a special case of Dialog.</li>
                        <li>In React, this is also achieved by composition, where a more “specific” component renders a more “generic” one and configures it with props</li>
                    </ul>}
        />
      </div>  
    );
}
  
export default WelcomeDialog;