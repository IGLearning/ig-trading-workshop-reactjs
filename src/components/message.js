import React, {Component} from 'react';
import './message.css';

export default class Message extends Component {
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
    if (this.props.marketRowId === this.props.marketToTrade.id) {
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
