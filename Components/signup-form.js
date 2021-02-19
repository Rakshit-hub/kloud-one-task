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
    alert("You submitted form sucessfully")
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
    const { mode } = this.props;
    return (
      <>
        <div className="row mx-0 ">
          <div className="col-6">
            {mode ? (
              <img src="/Images/white-mode1.jpg" className="mobileImg" width="200" height="300" />
              
            ) : (
              <img src="/Images/white-mode.png" className="mobileImg1" width="200" />
            )}
          </div>
          <div className="col-6">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="w-100">
                  Name
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    className="form-control"
                  />
                </label>
                <br />

                <label className="w-100">
                  Email
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    className="form-control"
                  />
                </label>
                <br />

                <label className="w-100">
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
        </div>
        <style jsx>{`
         @media only screen and (min-width: 414px) and (max-width: 992px) {
          .mobileImg{
            width:125px;
          }
          .mobileImg1{
            width:150px;
          }
          .custBtn{
            font-size:12px;
          }
        }
        
        `}</style>
      </>
    );
  }
}

export default Registration;
