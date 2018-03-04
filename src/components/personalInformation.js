import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import './personalInformation.css';

const style = {
  paper: {
    marginTop: 50,
    marginLeft: 250,
    height: 100,
    width: 900,
    textAlign: 'center',
    display: 'inline-block',
    padding: 25
  }
};

export default class PersonalInformation extends Component {
  render() {
    return (
      <Paper style={style.paper} zDepth={3}>
        <p>
          <span className={'left'}><b>Client ID:</b> {this.props.client.id}</span>
          <span className={'right'}><b>Username:</b> {this.props.client.userName}</span>
        </p>
        <p>
          <span className={'left'}><b>Available funds:</b> {this.props.client.availableFunds}</span>
          <span className={'right'}><b>Profit and loss:</b> {this.props.client.runningProfitAndLoss}</span>
        </p>
      </Paper>
    );
  }
}
