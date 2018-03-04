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

const style = {
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
    if (this.props.client) this.clientInterval = setInterval(this.props.getClient, 1000, this.props.client.id);
  }

  componentWillUnmount() {
    clearInterval(this.marketsInterval);
    clearInterval(this.clientInterval);
  }

  render() {
    if (this.shouldRender) {
      return (
        <div>
          <AppBar
            style={style.appBar}
            title={`Market view - Welcome ${this.props.client.userName}`}
            showMenuIconButton={false}
          />
          <PersonalInformation client={this.props.client}/>
          <MarketTable markets={this.props.markets} handleClick={this.handleClick}/>
        </div>
      )
    }
    return null;
  }

  readyToRender() {
    return !!(this.props.readyToRenderMarkets && this.props.readyToRenderClient);
  }

//should this happen on the level down? then pass up the value to buy at
  handleClick(e) {
    const textContent = e.target.textContent.toLowerCase();
    if (textContent === 'buy') {
      //need to get the clicked market and price
      this.props.buy();
    } else if (textContent === 'sell') {
      this.props.sell();
    }
  }
}

const mapStateToProps = (state) => {
  return {
    closingPrice: state.sell.closingPrice,
    client: state.getClient.client,
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
