import React, {Component} from 'react';
import {
  Table,
  TableHeader,
  TableBody
} from 'material-ui/Table';
import MarketTableHeader from '../components/marketTableHeader';
import MarketRow from './marketRow';

export default class MarketTable extends Component {

  constructor() {
    super();
    this.handleBuy = this.handleBuy.bind(this);
    this.handleSell = this.handleSell.bind(this);
  }

  render() {
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <MarketTableHeader/>
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
        <MarketRow
          key={i}
          id={market.id}
          className={market.id}
          marketName={market.marketName}
          currentPrice={market.currentPrice}
          handleBuy={() => this.handleBuy(market)}
          errors={this.props.errors}
          confirmation={this.props.confirmation}
          marketToTrade={this.props.marketToTrade}
        />
      );
    });
  }

  handleBuy(market) {
    this.props.handleBuy(market);
  }

  handleSell() {
    this.props.handleSell();
  }

}
