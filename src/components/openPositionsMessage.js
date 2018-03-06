import React, {Component} from 'react';
import './openPositionsMessage.css';

export default class OpenPositionsMessage extends Component {
  render() {
    if (this.props.error) {
      return (
        <p className={'error'}>{this.props.error}</p>
      );
    }
    return null;
  }
}
