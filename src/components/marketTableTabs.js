import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import OpenPositionsTable from './openPositionsTable';
import MarketTable from './marketTable';
import Paper from 'material-ui/Paper';

const style = {
  paper: {
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 900,
    textAlign: 'center',
    display: 'block'
  }
};

export default class MarketTableTabs extends Component {
  render() {
    return (
      <Paper style={style.paper} zDepth={3}>
        <Tabs>
          <Tab label={"Market View"}>
            <MarketTable
              errors={this.props.errors}
              confirmation={this.props.confirmation}
              marketToTrade={this.props.marketToTrade}
              handleBuy={this.props.handleBuy}
              handleSell={this.props.handleSell}
              markets={this.props.markets}
            />
          </Tab>
          <Tab label={'Open Positions'} onActive={this.props.getOpenPositions}>
            <OpenPositionsTable
              clientId={this.props.client.id}
              error={this.props.openPositionsError}
              openPositions={this.props.openPositions}
              confirmation={this.props.confirmation}
              handleSell={this.props.handleSell}
              positionToClose={this.props.positionToClose}
            />
          </Tab>
        </Tabs>
      </Paper>
    );
  }
}
