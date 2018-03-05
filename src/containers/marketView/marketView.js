import React, {Component} from 'react'
import {connect} from 'react-redux';
import {history} from '../../store';
import {bindActionCreators} from 'redux';
import {getMarkets} from '../../actions/getMarkets';
import {getClient} from '../../actions/getClient';
import {buy} from '../../actions/buy';
import {sell} from '../../actions/sell';
import MarketTable from '../../components/marketTable';
import AppBar from 'material-ui/AppBar';
import PersonalInformation from '../../components/personalInformation';
import './marketView.css';

const style = {
  appBar: {
    backgroundColor: '#a2a2a2'
  }
};

class MarketView extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

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
    if (this.props.client) this.clientInterval = setInterval(this.props.getClient, 1000, this.props.client.id);
  }

  componentWillUnmount() {
    clearInterval(this.marketsInterval);
    clearInterval(this.clientInterval);
  }

  render() {
    if (this.shouldRender) {
      return (
        <div className={'marketView'}>
          <AppBar
            style={style.appBar}
            title={`Market view - Welcome ${this.props.client.userName}`}
            showMenuIconButton={false}
          />
          <PersonalInformation client={this.props.client}/>
          <MarketTable
            markets={this.props.markets}
            handleClick={this.handleClick}
            confirmation={this.props.confirmation}
            errors={this.props.errors}
            marketToTrade={this.marketToTrade}
          />
        </div>
      )
    }
    return null;
  }

  readyToRender() {
    return !!(this.props.readyToRenderMarkets && this.props.readyToRenderClient);
  }

  handleClick(action, market) {
    this.props[action](market.id, this.props.client.id);
    this.marketToTrade = market;
    setTimeout(() => this.marketToTrade = undefined, 5000);
  }
}

const mapStateToProps = (state) => {
  return {
    client: state.getClient.client,
    confirmation: state.trade.confirmation,
    errors: state.trade.errorMessage,
    markets: state.getMarkets.markets,
    readyToRenderMarkets: state.getMarkets.readyToRenderMarkets,
    readyToRenderClient: state.getClient.readyToRenderClient,
    signedIn: state.signup.signedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    buy,
    sell,
    getMarkets,
    getClient
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketView);
