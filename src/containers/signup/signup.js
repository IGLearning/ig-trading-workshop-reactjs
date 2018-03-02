import React, {Component} from 'react';
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper';
import {signup} from '../../actions/signup';
import {usernameChange} from '../../actions/usernameChange';
import RaisedButton from 'material-ui/RaisedButton';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './signup.css';
import Styles from './signup.style.js';

class Signup extends Component {
  render() {
    return (
      <div className='signup-container'>
        <form className='signup-form'>
          <Paper style={Styles.paper} zDepth={3}>
            <h1 className='signup-header'>Sign up</h1>
            <TextField floatingLabelText='Username' onChange={(e) => this.handleChange(e)} style={Styles.username}
                       fullWidth={true}/>
            <RaisedButton label="Sign up" style={Styles.button} onClick={() => this.handleClick()}/>
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
  username: state.username
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
     signup,
     usernameChange
   }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
