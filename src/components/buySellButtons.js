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
          onClick={() => this.handleClick()}
        />
        <RaisedButton
          buttonStyle={style.button.sell}
          labelColor={'#fff'}
          label="Sell"
          onClick={() => this.handleClick()}
        />
      </div>
    )
  }
}
