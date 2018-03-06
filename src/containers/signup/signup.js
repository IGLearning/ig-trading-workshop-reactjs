import React, {Component} from 'react';
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper';
import {signup} from '../../actions/signup';
import {usernameChange} from '../../actions/usernameChange';
import RaisedButton from 'material-ui/RaisedButton';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './signup.css';

const style = {
  paper: {
    height: 600,
    width: 900,
    textAlign: 'center',
    display: 'inline-block',
    padding: 100
  },
  username: {
    fontSize: 24,
    height: 100
  },
  button: {
    backgroundColor: 'red'
  }
};

class Signup extends Component {
  render() {
    return (
      <div className='signup-container'>
        <form className='signup-form'>
          <Paper style={style.paper} zDepth={3}>
            <h1 className='signup-header'>Sign up</h1>
            <TextField
              floatingLabelText='Username'
              onChange={(e) => this.handleChange(e)}
              style={style.username}
              fullWidth={true}
              errorText={this.props.error}
            />
            <RaisedButton
              label="Sign up"
              style={style.button}
              onClick={() => this.handleClick()}
            />
          </Paper>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.props.usernameChange(e.target.value);
  }

  handleClick() {
    this.props.signup(this.props.username);
  }
}

const mapStateToProps = (state) => ({
  username: state.username,
  error: state.signup.errorMessage
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
     signup,
     usernameChange
   }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
