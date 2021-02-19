import React from "react";
import _JSXStyle from "styled-jsx/style";
import Router from "next/router";
import SignUP from "../Components/signup";
// import 'bootstrap/dist/css/bootstrap.min.css';

class Calender extends React.Component {
  state = { open: false, mode: false };
  componentDidMount() {}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleToggle = () => {
    this.setState({ mode: !this.state.mode });
  };
  render() {
    const { mode } = this.state;
    return (
      <>
        <div className={`col-12  ${mode ? "darkMode" : "bg"}`}>
          <div className="row mr-0 pt-4 align-items-center justify-content-between">
            <div className="Col-10">
              <h1 className="pl-4">LUCY</h1>
            </div>
            <div className="col-2 ">
              <button className="btn btn-primary custBtn" onClick={this.handleToggle}>
                {`${mode ? "Light Mode" : "Dark Mode"}`}
              </button>
            </div>
          </div>

          <div
            className="row align-items-center justify-content-center "
            style={{ height: "100vh" }}
          >
            <div className=" col-xl-6 col-lg-6 col-sm-12  ">
              <img src="/Images/img-2.png" className="mobileImg" />
            </div>
            <div className=" col-xl-6 col-lg-6 col-sm-12   ">
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
          mode={this.state.mode}
        />
        <style jsx>{`
          .bg {
            background: aliceblue;
          
          }
          .signupBtn {
            background: #56369c;
            color: #fff;
            font-weight: bold;
          }
          .darkMode {
            background: black;
            color: white;
            
          }
          @media only screen and (min-width: 360px) and (max-width: 992px) {
            .mobileImg{
              width:350px;
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

export default Calender;
