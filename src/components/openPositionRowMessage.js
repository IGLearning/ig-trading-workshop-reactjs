import React, {Component} from 'react';
import './openPositionRowMessage.css';

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
    if (this.props.positionId === this.props.positionToClose) {
      if (this.props.errors) {
        return <p className={'error'}>{this.props.errors}</p>
      } else if (this.props.confirmation) {
        if (typeof(this.props.confirmation) === "number")
        return (
          <div className={'confirmation'}>
            <span>Closed position with a profit of {this.props.confirmation}</span>
          </div>
        );
      }
    }
  }
}
