
import React from 'react';
import _ from 'underscore';

import Hand from './Hand.jsx';
import Interface from './Interface.jsx';

import {
  Grid, Row, Col
} from 'react-bootstrap';

const Table = React.createClass({

  getInitialState() {
    // shuffle again
    const deck = _.shuffle(this.props.deck);

    return {
      deck: deck
    }
  },

  handleDealClick() {
    console.log('dealing, called from Table!');
  },

  handleHitClick() {
    console.log('hitting, called from Table!');
  },

  handleStayClick() {
    console.log('staying, called from Table!');
  },

  handleCalculateScore() {
    console.log('calculating the score')
  },

  render() {
    const { deck } = this.props;

    console.log('props', this.props);
    console.log('state', this.state);

    return(
      <div className="table-container">
        <Grid fluid>
          <Col xs={12} sm={12} md={9} lg={9}>
            <div className="hands">
              <Hand hand={this.state.dealer} />
              <Hand hand={this.state.player} />
            </div>
          </Col>

          <Col xs={12} sm={12} md={3} lg={3}>
            <Interface
              status={this.state.status}
              deal={this.handleDealClick}
              hit={this.handleHitClick}
              stay={this.handleStayClick}
              dealerScore={this.state.dealerScore}
              playerScore={this.state.playerScore} />
          </Col>
        </Grid>
      </div>
    )
  }
});

export default Table;