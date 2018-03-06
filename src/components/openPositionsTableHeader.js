import React, {Component} from 'react';
import {
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';

export default class OpenPositionsTableHeader extends Component {
  render() {
    return (
      <TableRow>
        <TableHeaderColumn>Position Id</TableHeaderColumn>
        <TableHeaderColumn>Market Id</TableHeaderColumn>
        <TableHeaderColumn>Opening Price</TableHeaderColumn>
        <TableHeaderColumn>Position Size</TableHeaderColumn>
        <TableHeaderColumn>Profit and Loss</TableHeaderColumn>
        <TableHeaderColumn>Action</TableHeaderColumn>
      </TableRow>
    );
  }
}
