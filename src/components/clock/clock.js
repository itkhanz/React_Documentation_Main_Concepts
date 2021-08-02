import React from 'react';
import FormattedDate from './formattedDate';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <div className="sectionDesc">
            <h3>State and LifeCycle in React component</h3>
            <ol>
              <li>Converting a Function to a Class</li>
              <li>Adding Local State to a Class</li>
              <li>Adding lifecycle Methods to a Class</li>
            </ol>  
          </div>

          <FormattedDate date={this.state.date} />
          
          <p>A component may choose to pass its state down as props to its child components</p>
          <hr></hr>
        </div>
      );
    }
}

export default Clock;
