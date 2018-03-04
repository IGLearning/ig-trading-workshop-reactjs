import React, {Component} from 'react';
import {
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';

export default class MarketTableHeader extends Component {
  render() {
    return (
      <TableRow>
        <TableHeaderColumn>Market ID</TableHeaderColumn>
        <TableHeaderColumn>Market Name</TableHeaderColumn>
        <TableHeaderColumn>Price</TableHeaderColumn>
        <TableHeaderColumn>Action</TableHeaderColumn>
      </TableRow>
    );
  }
}
