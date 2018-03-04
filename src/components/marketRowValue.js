import React, {Component} from 'react';
import './marketRowValue.css';

export default class MarketRowValue extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps !== this.props.value;
  }

  componentWillReceiveProps(nextProps) {
    this.calculateMovement(nextProps);
  }

  render() {
    return (
      <p className={`paragraph-${this.direction} column-${this.props.field}`}>{this.props.value}</p>
    )
  }

  calculateMovement(nextProps) {
    if (this.props.field === 'currentPrice') {
      if (nextProps.value >= this.props.value) {
        this.direction = 'up';
      } else if (nextProps.value <= this.props.value) {
        this.direction = 'down';
      } else {
        this.direction = 'neutral';
      }
    } else {
      this.direction = 'neutral'
    }
  }
}
