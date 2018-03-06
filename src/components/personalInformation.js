import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

const style = {
  paper: {
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 100,
    width: 900,
    textAlign: 'center',
    display: 'block',
    padding: 15
  }
};

export default class PersonalInformation extends Component {

  render() {
    return (
      <Paper style={style.paper} zDepth={3}>
        <div className={'personalInformation'}>
          <p>
            <span className={'left'}><b>Client ID:</b> {this.props.client.id}</span>
            <span className={'right'}><b>Username:</b> {this.props.client.userName}</span>
          </p>
          <p>
            <span className={'left'}><b>Available funds:</b> {this.props.client.availableFunds}</span>
            <span className={'right'}><b>Profit and loss:</b> {this.props.client.runningProfitAndLoss}</span>
          </p>
        </div>
      </Paper>
    );
  }
}
