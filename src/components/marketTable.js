import React, {Component} from 'react';
import {
  Table,
  TableHeader,
  TableBody
} from 'material-ui/Table';
import MarketTableHeader from '../components/marketTableHeader';
import MarketRow from './marketRow';
import Paper from 'material-ui/Paper';

const style = {
  paper: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 550,
    width: 900,
    textAlign: 'center',
    display: 'block',
    padding: 0
  }
};

export default class MarketTable extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <Paper style={style.paper} zDepth={3}>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <MarketTableHeader/>
          </TableHeader>
          <TableBody>
            {this.renderMarkets()}
          </TableBody>
        </Table>
      </Paper>
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
          handleClick={(e) => this.handleClick(e, market)}
          errors={this.props.errors}
          confirmation={this.props.confirmation}
          marketToTrade={this.props.marketToTrade}
        />
      );
    });
  }

  handleClick(e, market) {
    this.props.handleClick(e.target.textContent.toLowerCase(), market);
  }

}
