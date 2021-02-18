import React from "react";
import _JSXStyle from "styled-jsx/style";
import Router from "next/router";
import SignUP from "../Components/signup";

class Calender extends React.Component {
  state = { open: false };
  componentDidMount() {}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <>
        <div className="col-12 bg">
          {/* <div className="col-12">
          <h1>LUCY</h1>
        </div> */}
          <div className="row align-items-center justify-content-center bg">
            <div className="col-6">
              <img src="/Images/img-2.png" />
            </div>
            <div className="col-6">
              <div>
                <h1>ONE TOUCH FOR</h1>
                <h2>ALL NEEDS</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic
                </p>
              </div>
              <div className="text-center mt-4">
                <button
                  className="btn signupBtn w-100"
                  onClick={this.handleClickOpen}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        <SignUP
          open={this.state.open}
          handleClickOpen={this.handleClickOpen}
          handleClose={this.handleClose}
        />
        <style jsx>{`
          .bg {
            background: aliceblue;
            height: 100vh;
          }
          .signupBtn {
            background: #56369c;
            color: #fff;
            font-weight: bold;
          }
        `}</style>
      </>
    );
  }
}

export default Calender;
