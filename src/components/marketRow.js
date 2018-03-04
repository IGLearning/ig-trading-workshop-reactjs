import React, {Component} from 'react';
import {TableRowColumn, TableRow} from 'material-ui/Table';
import MarketRowValue from './marketRowValue';
import BuySellButtons from './buySellButtons';

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
          <BuySellButtons/>
        </TableRowColumn>
      </TableRow>
    )
  }
}
