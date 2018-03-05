import React, {Component} from 'react';
import {TableRowColumn, TableRow} from 'material-ui/Table';
import MarketRowValue from './marketRowValue';
import BuySellButtons from './buySellButtons';
import Message from './message';

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
        if (this.props.
        <TableRowColumn>
          <BuySellButtons handleClick={this.props.handleClick}/>
          <Message marketRowId={this.props.id} marketToTrade={this.props.marketToTrade} errors={this.props.errors} confirmation={this.props.confirmation}/>
        </TableRowColumn>
      </TableRow>
    )
  }
}
