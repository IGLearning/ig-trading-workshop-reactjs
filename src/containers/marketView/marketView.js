import React, {Component} from 'react'
import {connect} from 'react-redux';
import {history} from '../../store';
import {bindActionCreators} from 'redux';
import {getMarkets} from '../../actions/getMarkets';
import {getClient} from '../../actions/getClient';
import {buy} from '../../actions/buy';
import {sell} from '../../actions/sell';
import {getOpenPositions} from '../../actions/getOpenPositions';
import MarketTableTabs from '../../components/marketTableTabs';
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
    this.handleBuy = this.handleBuy.bind(this);
    this.handleSell = this.handleSell.bind(this);
    this.getOpenPositions = this.getOpenPositions.bind(this);
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
    if (this.props.client) {
      this.clientInterval = setInterval(this.props.getClient, 1000, this.props.client.id);
    }
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
          <MarketTableTabs
            client={this.props.client}
            markets={this.props.markets}
            handleBuy={this.handleBuy}
            handleSell={this.handleSell}
            openPositions={this.props.openPositions}
            getOpenPositions={this.getOpenPositions}
            openPositionsError={this.props.openPositionsError}
            confirmation={this.props.confirmation}
            errors={this.props.errors}
            marketToTrade={this.marketToTrade}
            positionToClose={this.positionToClose}
          />
        </div>
      )
    }
    return null;
  }

  readyToRender() {
    return !!(this.props.readyToRenderMarkets && this.props.readyToRenderClient);
  }

  handleBuy(market) {
    this.props.buy(market.id, this.props.client.id);
    this.marketToTrade = market.id;
    setTimeout(() => this.marketToTrade = undefined, 5000);
    this.getOpenPositions(this.props.clientId);
  }

  handleSell(position) {
    this.props.sell(position.id, this.props.client.id);
    this.positionToClose = position.id;
    setTimeout(() => this.positionToClose = undefined, 5000);
    setTimeout(() => this.getOpenPositions(this.props.client.id), 500);
  }

  getOpenPositions() {
    this.props.getOpenPositions(this.props.client.id);
  }
}

const mapStateToProps = (state) => {
  return {
    client: state.getClient.client,
    confirmation: state.trade.confirmation,
    errors: state.trade.errorMessage,
    markets: state.getMarkets.markets,
    openPositions: state.getOpenPositions.positions,
    openPositionsError: state.getOpenPositions.errorMessage,
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
    getOpenPositions,
    getClient
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketView);
