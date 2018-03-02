import React, {Component} from 'react'
import {connect} from 'react-redux';
import {history} from '../../store';
import {bindActionCreators} from 'redux';
import {logout} from '../../actions/logout';
import {getMarkets} from '../../actions/getMarkets';
import MarketTable from '../../components/marketTable';
import Styles from './marketView.style';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class MarketView extends Component {

  shouldComponentUpdate() {
    this.shouldRender = this.props.readyToRenderMarkets;
    return this.shouldRender;
  }

  componentWillMount() {
    this.props.getMarkets();
    if (!this.props.signedIn) history.push('/sign-up');
  }

  componentDidMount() {
    this.interval = setInterval(this.props.getMarkets, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.shouldRender) {
      return (
        <Paper style={Styles.paper} zDepth={3}>
          <MarketTable markets={this.props.markets}/>
          <RaisedButton style={Styles.logout} label="Logout" onClick={() => this.handleLogout()}/>
        </Paper>
      )
    }
    return null;
  }

  handleLogout() {
    history.push('/sign-up');
    this.props.logout();
  }
}

const mapStateToProps = (state) => {
  return {
    markets: state.getMarkets.markets,
    readyToRenderMarkets: state.getMarkets.readyToRenderMarkets,
    signedIn: state.signup.signedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout,
    getMarkets
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketView);
