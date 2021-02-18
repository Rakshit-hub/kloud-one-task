import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Registration from "./signup-form"

class SignUP extends React.Component {
  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.props.handleClickOpen}
        >
          Open alert dialog
        </Button>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Register with us"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             <Registration/>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              Close
            </Button>
           
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default SignUP;
