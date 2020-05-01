import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../graphql/mutations';


class EditEmployee extends Component {

  state = {
    open: false,
    firstname: '',
    lastname: '',
    line1: '',
    line2: '',
    city: '',
    state: '',
    zipcode: '',
    name: ''
  };

  handleClickOpen = () => {
    console.log("Current Employee: " + this.props.currentEmployee.firstname)
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  handleSubmit = (e) => {
    this.setState({ open: false });
    var itemDetails = {
      id: this.props.currentEmployee.id,
      firstname: this.state.firstname || this.props.currentEmployee.firstname,
      lastname: this.state.lastname || this.props.currentEmployee.lastname,
      line1: this.state.line1 || this.props.currentEmployee.line1,
      line2: this.state.line2 || this.props.currentEmployee.line2,
      city: this.state.city || this.props.currentEmployee.city,
      state: this.state.state || this.props.currentEmployee.state,
      zipcode: this.state.zipcode || this.props.currentEmployee.zipcode,
      name: this.state.name || this.props.currentEmployee.name
    }
    API.graphql(graphqlOperation(mutations.updateItem, {input: itemDetails}));
    // window.location.reload()
  }

  render() {
      return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <Button size='small' color="inherit" aria-label="Edit" onClick={this.handleClickOpen}>
        <EditIcon />
      </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Item: {this.props.currentEmployee.firstname}</DialogTitle>
          <DialogContent>

              <TextField
                style={{marginRight: 10}}
                id="firstname"
                placeholder={this.props.currentEmployee.firstname}
                label="Name"
                type="string"
                onChange={this.handleChange('firstname')}
              />
              <TextField
                style={{marginRight: 10}}
                id="lastname"
                label="Last Name"
                type="string"
                onChange={this.handleChange('lastName')}
              />
              <label>Address</label>
              <TextField
                style={{marginRight: 10}}
                id="line1"
                label="Line 1"
                type="string"
                onChange={this.handleChange('line1')}
              />
              <TextField
                style={{marginRight: 10}}
                id="line2"
                label="Line 2"
                type="string"
                onChange={this.handleChange('line2')}
              />
              <TextField
                style={{marginRight: 10}}
                id="city"
                label="City"
                type="string"
                onChange={this.handleChange('city')}
              />
              <TextField
                style={{marginRight: 10}}
                id="state"
                label="State"
                type="string"
                onChange={this.handleChange('state')}
              />
              <TextField
                style={{marginRight: 10}}
                id="zipcode"
                label="Zipcode"
                type="number"
                onChange={this.handleChange('zipcode')}
              />
              <label>Skills</label>
              <TextField
                style={{marginTop: 10}}
                id="name"
                label="name"
                type="string"
                onChange={this.handleChange('name')}
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default EditEmployee;