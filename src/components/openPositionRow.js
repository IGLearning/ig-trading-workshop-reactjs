import React, {Component} from 'react';
import {TableRowColumn, TableRow} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import OpenPositionRowValue from './openPositionRowValue';
import OpenPositionRowMessage from './openPositionRowMessage';

const style = {
  button: {
    sell: {
      backgroundColor: '#ad3118'
    }
  }
};

export default class OpenPositionRow extends Component {

    constructor(props){
        super(props);
        throw new Error(); //Testing, remove before committing.
    }
  render() {
    const position = this.props.position;
    return (
      <TableRow>
        <TableRowColumn>
          <OpenPositionRowValue
            field={'positionId'}
            value={position.id}
          />
        </TableRowColumn>
        <TableRowColumn>
          <OpenPositionRowValue
            field={'marketId'}
            value={position.marketId}
          />
        </TableRowColumn>
        <TableRowColumn>
          <OpenPositionRowValue
            field={'openingPrice'}
            value={position.buySize}
          />
        </TableRowColumn>
        <TableRowColumn>
          <OpenPositionRowValue
            field={'positionSize'}
            value={position.openingPrice}
          />
        </TableRowColumn>
        <TableRowColumn>
          <OpenPositionRowValue
            field={'profitAndLoss'}
            value={Math.round(position.profitAndLoss * 100) / 100}
          />
        </TableRowColumn>
        <TableRowColumn>
          <RaisedButton
            buttonStyle={style.button.sell}
            labelColor={'#fff'}
            label="Sell"
            onClick={() => this.props.handleSell()}
          />
          <OpenPositionRowMessage
            positionId={position.id}
            positionToClose={this.props.positionToClose}
            errors={this.props.errors}
            confirmation={this.props.confirmation}
          />
        </TableRowColumn>
      </TableRow>
    )
  }
}
