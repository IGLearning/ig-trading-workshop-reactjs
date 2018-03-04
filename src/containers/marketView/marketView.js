import React, {Component} from 'react'
import {connect} from 'react-redux';
import {history} from '../../store';
import {bindActionCreators} from 'redux';
import {getMarkets} from '../../actions/getMarkets';
import {getClient} from '../../actions/getClient';
import MarketTable from '../../components/marketTable';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import PersonalInformation from '../../components/personalInformation';

const style = {
  logout: {
    backgroundColor: 'red'
  },
  appBar: {
    backgroundColor: '#a2a2a2'
  }
};

class MarketView extends Component {

  shouldComponentUpdate() {
    this.shouldRender = this.readyToRender();
    return this.shouldRender;
  }

  componentWillMount() {
    this.props.getMarkets();
    if (!this.props.signedIn) history.push('/sign-up');
  }

  componentDidMount() {
    this.marketsInterval = setInterval(this.props.getMarkets, 1000);
    this.clientInterval= setInterval(this.props.getClient, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.marketsInterval);
    clearInterval(this.clientInterval);
  }

  render() {
    if (this.shouldRender) {
      return (
        <div>
          <AppBar style={style.appBar} title={`Market view - Welcome ${this.props.client.userName}`} showMenuIconButton={false} />
          <PersonalInformation client={this.props.client}/>
          <MarketTable markets={this.props.markets}/>
          <RaisedButton
            buttonStyle={style.logout}
            label="Logout"
            onClick={() => this.handleLogout()}
          />
        </div>
      )
    }
    return null;
  }

  handleLogout() {
    this.props.persistor.purge();
    history.push('/sign-up');
  }

  readyToRender() {
    return this.props.readyToRenderMarkets && this.props.readyToRenderClient;
  }
}

const mapStateToProps = (state) => {
  return {
    clientId: state.signup.clientId,
    client: state.getClient.client,
    markets: state.getMarkets.markets,
    readyToRenderMarkets: state.getMarkets.readyToRenderMarkets,
    readyToRenderClient: state.getClient.readyToRenderClient,
    signedIn: state.signup.signedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getMarkets,
    getClient
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketView);
