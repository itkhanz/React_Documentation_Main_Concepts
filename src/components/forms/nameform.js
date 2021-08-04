import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: '', 
          description: 'Please write an essay about your favorite DOM element.',
          flavor: 'coconut',
          isGoing: true,
          numberOfGuests: 2
        };
  
    //   this.handleTextChange = this.handleTextChange.bind(this);
    //   this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    //   this.handleSelectChange = this.handleSelectChange.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    // handleTextChange(event) {
    //   this.setState({name: event.target.value});
    // }
    // handleTextAreaChange(event) {
    //     this.setState({description: event.target.value});
    // }
    // handleSelectChange(event) {
    //     this.setState({flavor: event.target.value});
    // }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // console.log(name);
    
        this.setState({
          [name]: value
        });
    }
  
    handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.name);
    //   alert('A message was submitted: ' + this.state.description);
    //   alert('Your favorite flavor is: ' + this.state.flavor);
    console.log('A name was submitted: ' +  this.state.name);
    console.log('A message was submitted: ' + this.state.description);
    console.log('Your favorite flavor is: ' + this.state.flavor);
    console.log('Attending event: ' + this.state.isGoing);
    console.log('Total number of Guests is: ' + this.state.numberOfGuests);
      event.preventDefault();
      this.setState({
          name: '', 
          description: 'Please write an essay about your favorite DOM element.',
          flavor: 'coconut',
          isGoing: true,
          numberOfGuests: 2
        });
    }
  
    render() {
      return (
        <div>
        <div className="sectionDesc">
                <h2>Forms</h2>
                <ul>
                    <li>In React, mutable state is typically kept in the state property of components, and only updated with setState().</li>
                    <li>React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”. </li>
                    <li>With a controlled component, the input’s value is always driven by the React state.</li>
                    <li>Since the value attribute is set on our form element, the displayed value will always be this.state.value, making the React state the source of truth. Since handleChange runs on every keystroke to update the React state, the displayed value will update as the user types.</li>
                    <li>React, instead of using this <span className="imp">selected</span> attribute, uses a <span className="imp">value</span> attribute on the root <span className="imp">select</span> tag. </li>
                </ul>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
                Name:
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
            </label>
          </div>

          <div>
            <label>
                Essay:
                <textarea name="description" value={this.state.description} onChange={this.handleInputChange} style={{width:'300px', height:'100px', marginTop: '10px'}} />
            </label>
          </div><br></br>
                   
          <div>
            <label>
                Pick your favorite flavor:
                <select name="flavor" value={this.state.flavor} onChange={this.handleInputChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label> 
          </div><br></br>

          <div>
            <label>
                Is going:
                <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange} />
            </label>
          </div><br></br>

          <div>
            <label>
                Number of guests:
                <input
                    name="numberOfGuests"
                    type="number"
                    value={this.state.numberOfGuests}
                    onChange={this.handleInputChange} />
            </label>
          </div><br></br>

          <input type="submit" value="Submit" />
        </form>
        
        <hr></hr>
        </div>
      );
    }
}

export default NameForm;