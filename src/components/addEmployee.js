import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../graphql/mutations';


class AddEmployee extends Component {
state = {
    open: false,
  };
handleClickOpen = () => {
    this.setState({ open: true });
  };
handleClose = () => {
    this.setState({ open: false });
  };
handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    console.log("ID:"+ this.state.id + "First Name: " + this.state.firstName +  "Last Name: " + this.state.lastName + "Line 1" + this.state.line1 + "Line 2" + this.state.line2 + "City" + this.state.city + "State" + this.state.state + "Zipcode" + this.state.zipcode + "Skills:" + this.state.skillName)
  };

handleSubmit = (e) => {
    this.setState({ open: false });
    var employeeDetails = {
      id: this.state.id,
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      line1: this.state.line1,
      line2: this.state.line2,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      name: this.state.skillName
    }
    console.log("Employee Details : " + JSON.stringify(employeeDetails))
    API.graphql(graphqlOperation(mutations.createEmployees, {input: employeeDetails}));
}


render() {
      return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <Button variant="fab" mini color="inherit" aria-label="Add" onClick={this.handleClickOpen}>
        <AddIcon />
      </Button>
      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
       >
          <DialogTitle id="form-dialog-title">Add a New Employee</DialogTitle>
          <DialogContent>
          <DialogContentText>
          </DialogContentText>
              <TextField
                style={{marginRight: 10}}
                id="beerName"
                label="ID"
                type="string"
                onChange={this.handleChange('id')}
              />
              <TextField
                style={{marginRight: 10}}
                id="beerName"
                label="First Name"
                type="string"
                onChange={this.handleChange('firstName')}
              />
              <TextField
                style={{marginRight: 10}}
                id="beerName"
                label="Last Name"
                type="string"
                onChange={this.handleChange('lastName')}
              />
              <label>Address</label>
              <TextField
                style={{marginRight: 10}}
                id="beerABV"
                label="Line 1"
                type="string"
                onChange={this.handleChange('line1')}
              />
              <TextField
                style={{marginRight: 10}}
                id="beerABV"
                label="Line 2"
                type="string"
                onChange={this.handleChange('line2')}
              />
              <TextField
                style={{marginRight: 10}}
                id="beerABV"
                label="City"
                type="string"
                onChange={this.handleChange('city')}
              />
              <TextField
                style={{marginRight: 10}}
                id="beerABV"
                label="State"
                type="string"
                onChange={this.handleChange('state')}
              />
              <TextField
                style={{marginRight: 10}}
                id="beerABV"
                label="Zipcode"
                type="number"
                onChange={this.handleChange('zipcode')}
              />
              <label>Skills</label>
              <TextField
                style={{marginTop: 10}}
                id="beerDescription"
                label="name"
                type="string"
                onChange={this.handleChange('skillName')}
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Add Item
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default AddEmployee;