import React, {Component} from 'react';
import {TableRowColumn, TableRow} from 'material-ui/Table';
import MarketRowValue from './marketRowValue';
import RaisedButton from 'material-ui/RaisedButton';
import MarketRowMessage from './marketRowMessage';

const style = {
  button: {
    buy: {
      backgroundColor: '#2d9bef'
    }
  }
};

export default class MarketRow extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn>
          <MarketRowValue
            field={'marketId'}
            value={this.props.id}
          />
        </TableRowColumn>
        <TableRowColumn>
          <MarketRowValue
            field={'marketName'}
            value={this.props.marketName}
          />
        </TableRowColumn>
        <TableRowColumn>
          <MarketRowValue
            field={'currentPrice'}
            value={this.props.currentPrice}
          />
        </TableRowColumn>
        <TableRowColumn>
          <RaisedButton
            buttonStyle={style.button.buy}
            labelColor={'#fff'}
            label="Buy"
            onClick={() => this.props.handleBuy()}
          />
          <MarketRowMessage
            marketRowId={this.props.id}
            marketToTrade={this.props.marketToTrade}
            errors={this.props.errors}
            confirmation={this.props.confirmation}/>
        </TableRowColumn>
      </TableRow>
    )
  }
}
