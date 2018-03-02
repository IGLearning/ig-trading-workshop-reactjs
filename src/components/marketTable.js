import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';
import MarketRow from './marketRow';

export default class MarketTable extends Component {
  render() {
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Market ID</TableHeaderColumn>
            <TableHeaderColumn>Market Name</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Action</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.renderMarkets()}
        </TableBody>
      </Table>
    );
  }


  renderMarkets() {
    return this.props.markets.map((market, i) => {
      return (
        <MarketRow key={i} id={market.id} marketName={market.marketName} currentPrice={market.currentPrice}/>
      );
    });
  }

}
