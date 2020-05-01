import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//import Button from '@material-ui/core/Button';
import EditEmployee from './editEmployee'
import DeleteEmployee from './deleteEmployee'
import { API, graphqlOperation }  from "aws-amplify";
import * as queries from '../graphql/queries';


const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'inherit',
    padding: '10px'
  },
};

class ListEmployees extends Component {

    state = {
      employees: []
    }
  
    componentDidMount = () => {
      this.getEmployees()
    }
  
    getEmployees = () => {
      API.graphql(graphqlOperation(queries.listEmployees))
      .then(data => this.setState({employees: data.data.listEmployees.items}))
    };
  
    render(){
        const { classes } = this.props;
        const { employees } = this.state;
        console.log(employees)
        return (
          <div className={classes.root}>
          <Grid container className={classes.root} spacing={16}>
              {employees.map(employee => (
                 <Grid key={employee.id} employee>
                     <Card className={classes.card}>
                       <CardContent>
                         <Typography className={classes.title} color="textSecondary" gutterBottom>
                           {employee.firstname}
                         </Typography>
                          <Typography component="p">
                          {employee.lastname}
                          </Typography>
                          <br />
                          <Typography component="p">
                          {employee.name}
                          </Typography>
                          <Typography component="p">
                          {employee.lin1}
                          </Typography>
                          <Typography component="p">
                          {employee.line2}
                          </Typography>
                          <Typography component="p">
                          {employee.city}
                          </Typography>
                          <Typography component="p">
                          {employee.state}
                          </Typography>
                          <Typography component="p">
                          {employee.zipcode}
                          </Typography>
                      </CardContent>
                        <CardActions>
                        <EditEmployee currentEmployee={employee}/>
                        <DeleteEmployee currentEmployee={employee}/>
                       </CardActions>
                     </Card>
                   </Grid>
                 ))}
             </Grid>
          </div>
        );
      }
    }
    
    ListEmployees.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    
    export default withStyles(styles)(ListEmployees);