import React from "react";
import _JSXStyle from "styled-jsx/style";
class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(formData);
  }
  handleNameChange(e) {
    const name = e.target.value;
    this.setState({ name });
  }
  handleEmailChange(e) {
    const email = e.target.value;
    this.setState({ email });
  }
  handlePasswordChange(e) {
    const password = e.target.value;
    this.setState({ password });
  }

  render() {
    return (
      <div>
        {/* <h2>Register With Us</h2> */}
       
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>
            Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              className="form-control"
            />
          </label>
          <br />

          <label>
            Email
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
              className="form-control"
            />
          </label>
          <br />

          <label>
            password
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              className="form-control"
            />
          </label>
          <br />
          </div>
          <input className="btn btn-primary" type="submit" />
          
        </form>
      </div>
    );
  }
}

export default Registration
