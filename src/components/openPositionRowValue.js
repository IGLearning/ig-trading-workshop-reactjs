import React, {Component} from 'react';
import './openPositionRowValue.css';

export default class OpenPositionRowValue extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps !== this.props.value;
  }

  componentWillUpdate() {
    this.calculateMovement();
  }

  render() {
    return (
      <p className={`paragraph-${this.direction} column-${this.props.field}`}>{this.props.value}</p>
    )
  }

  calculateMovement() {
    if (this.props.field === 'profitAndLoss') {
      if (this.props.value > 0) {
        this.direction = 'up';
      } else if (this.props.value < 0) {
        this.direction = 'down';
      } else {
        this.direction = 'neutral';
      }
    } else {
      this.direction = 'neutral'
    }
  }
}
