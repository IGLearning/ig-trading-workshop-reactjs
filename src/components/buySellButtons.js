import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  button: {
    buy: {
      backgroundColor: '#2d9bef'
    },
    sell: {
      backgroundColor: '#ad3118'
    }
  }
};

export default class MarketRow extends Component {
  render() {
    return (
      <div>
        <RaisedButton
          buttonStyle={style.button.buy}
          labelColor={'#fff'}
          label="Buy"
          onClick={(e) => this.props.handleClick(e)}
        />
        <RaisedButton
          buttonStyle={style.button.sell}
          labelColor={'#fff'}
          label="Sell"
          onClick={(e) => this.props.handleClick(e)}
        />
      </div>
    )
  }
}
