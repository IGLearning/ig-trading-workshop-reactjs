import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import {connect} from 'react-redux';
import {valueChange} from '../../actions/valueChange';

class Login extends Component {
  render() {
    return (
      <div className='login-container'>
        <form>
          <FormGroup controlId='login-form' >
            <ControlLabel>Sign up</ControlLabel>
            <FormControl
              type='text'
              value={this.props.username}
              placeholder='username'
              onChange={(e) => this.props.valueChange(e)}/>
            <FormControl.Feedback/>
            <HelpBlock>Enter a username</HelpBlock>
            <button onClick={() => this.props.changePage()}>Create user</button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.username
  }
}
rm 
function mapDispatchToProps(dispatch) {
  return {
    valueChange: e => dispatch(valueChange(e.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
