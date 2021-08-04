import React from 'react';
import TemperatureInput from './tempInput';
import BoilingVerdict from './boilVerdict';
// import tryConvert from './tempConversion';
import {tryConvert, toCelsius, toFahrenheit} from './tempConversion';

class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'};
    }
  
    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});
    }
  
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }
  
    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
      return (
        <div>
            <div className="sectionDesc">
                <h3>Lifting State Up</h3>
                <ul>
                    <li>In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.</li>
                    <li>We know that props are read-only. When the temperature was in the local state, the TemperatureInput could just call this.setState() to change it. However, now that the temperature is coming from the parent as a prop, the TemperatureInput has no control over it.</li>
                    <li>In React, this is usually solved by making a component “controlled”. Just like the DOM &#60;input&#62; accepts both a value and an onChange prop, so can the custom TemperatureInput accept both temperature and onTemperatureChange props from its parent Calculator.</li>
                    <li>If something can be derived from either props or state, it probably shouldn’t be in the state.</li>
                </ul>
            </div>

            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={this.handleCelsiusChange} />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={this.handleFahrenheitChange} />
            <BoilingVerdict
                celsius={parseFloat(celsius)} />

            <hr></hr>
        </div>
      );
    }
};

export default Calculator;