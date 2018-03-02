import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {TableRowColumn, TableRow} from 'material-ui/Table';
import MarketRowValue from './marketRowValue';

export default class MarketRow extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn><MarketRowValue value={this.props.id}/></TableRowColumn>
        <TableRowColumn><MarketRowValue value={this.props.marketName}/></TableRowColumn>
        <TableRowColumn><MarketRowValue value={this.props.currentPrice}/></TableRowColumn>
        <TableRowColumn><RaisedButton label="Buy" onClick={() => this.handleClick()}/></TableRowColumn>
      </TableRow>
    )
  }
}
