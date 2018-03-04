import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

const style = {
  paper: {
    marginTop: 50,
    marginLeft: 250,
    height: 100,
    width: 900,
    textAlign: 'center',
    display: 'inline-block',
    padding: 0
  }
};

export default class PersonalInformation extends Component {
  render() {
    return (
      <Paper style={style.paper} zDepth={3}>

      </Paper>
    );
  }
}
