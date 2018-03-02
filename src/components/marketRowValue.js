import React, {Component} from 'react';
import './marketRow.css';

export default class MarketRowValue extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps !== this.props.value;
  }

  componentWillReceiveProps(nextProps) {
    this.direction = nextProps.value >= this.props.value ? 'up' : 'down';
  }


  //only change color for price
  render() {
    return (
      <p className={`paragraph-${this.direction}`}>{this.props.value}</p>
    )
  }
}
