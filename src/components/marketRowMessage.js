import React, {Component} from 'react';
import './marketRowMessage.css';

export default class MarketRowMessage extends Component {
  render() {
    if (this.props.marketToTrade) {
      return (
        <div>
          {this.getValue()}
        </div>
      );
    }
    return null;
  }

  getValue() {
    if (this.props.marketRowId === this.props.marketToTrade) {
      if (this.props.errors) {
        return <p className={'error'}>{this.props.errors}</p>
      } else if (this.props.confirmation) {
        return (
          <div className={'confirmation'}>
            <span>Bought: 1 {this.props.marketToTrade.id} at {this.props.marketToTrade.currentPrice}</span>
            <span>Id: {this.props.confirmation.openPositionId}</span>
          </div>
        );
      }
    }
  }
}
