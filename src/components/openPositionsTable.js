import React, {Component} from 'react';
import {
  Table,
  TableHeader,
  TableBody
} from 'material-ui/Table';
import OpenPositionsMessage from './openPositionsMessage';
import './personalInformation.css';
import OpenPositionsTableHeader from './openPositionsTableHeader';
import OpenPositionRow from './openPositionRow';

export default class OpenPositionsTable extends Component {

  constructor() {
    super();
    this.handleSell = this.handleSell.bind(this);
  }

  render() {
    return (
      <div>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <OpenPositionsTableHeader/>
          </TableHeader>
          <TableBody>
            {this.renderPositions()}
          </TableBody>
        </Table>
        <OpenPositionsMessage error={this.props.error}/>
      </div>
    )
  }

  renderPositions() {
    if (this.props.openPositions) {
      return this.props.openPositions.map((position, i) => {
        return (
          <OpenPositionRow
            key={i}
            position={position}
            handleSell={() => this.handleSell(position)}
            confirmation={this.props.confirmation}
            positionToClose={this.props.positionToClose}
          />
        );
      });
    }
  }

  handleSell(position) {
    this.props.handleSell(position);
  }
}
