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
    marginLeft: 250,
    height: 550,
    width: 900,
    textAlign: 'center',
    display: 'inline-block',
    padding: 0
  }
};

export default class MarketTable extends Component {
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
          handleClick={this.props.handleClick}
        />
      );
    });
  }

}
