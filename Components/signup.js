import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Registration from "./signup-form";
// import 'bootstrap/dist/css/bootstrap.min.css';

class SignUP extends React.Component {
  render() {
    const { mode } = this.props;
    return (
      <>
        <div className={`model_Content `}>
          <Dialog
            open={this.props.open}
            onClose={this.props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="demo"
          >
            <DialogTitle id="alert-dialog-title">
              {"Register with us"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Registration mode={this.props.mode} />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <style jsx>{`
          .model_Content {
            width: 575px !important;
          }
          :global(.demo .MuiDialog-paper) {
            ${mode ? "background: #8e8282 !important" : ""};
          }
        `}</style>
      </>
    );
  }
}

export default SignUP;
