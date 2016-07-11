
import React from 'react';
import _ from 'lodash';

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
    var { deck } = this.state;
    var dealerHand = [];
    var playerHand = [];

    // if too little cards in deck, shuffle in a new one

    // give the player 2 cards
    playerHand.push(deck.pop());
    playerHand.push(deck.pop());

    // give dealer 1 card, the hidden card will be of no value,
    // the dealer will be dealt another card when showDeck=false
    dealerHand.push(deck.pop());

    // set the state for the updated info
    this.setState({
      dealerHand: dealerHand,
      playerHand: playerHand,
      deck: deck,
      status: 'playing'
    })
  },

  handleHitClick() {
    var { status, playerHand } = this.state;

    // check deck size to see if we need to shuffle in a new deck

    // probably should shuffle the deck here so cant cheat with state :)
    var shuffled = _.shuffle(this.state.deck);
    playerHand.push(shuffled.pop());

    var newPlayerScore = this.calculateScore(playerHand);
    // if 5 cards in hand and still under 21, player wins
    if (newPlayerScore < 21 && playerHand.length > 5) newStatus = 'win';
    // if hand totals over 21, player loses
    if (newPlayerScore > 21) newStatus = 'lose';

    // update the state
    this.setState({
      status: status,
      playerHand: playerHand,
      playerScore: newPlayerScore,
      deck: shuffled
    })
  },

  handleStayClick() {
    console.log('staying, called from Table!');
  },

  calculateScore(hand) {
    var score = _.sumBy(hand, 'v');
    var aces = _.countBy(hand,{v:11}).true;

    // need to hand case where score > 21 && aces > 0

    return score;
  },

  render() {
    const { deck } = this.props;

    // console.log('props', this.props);
    // console.log('state', this.state);

    return(
      <div className="table-container">
        <Grid fluid>
          <Col xs={12} sm={12} md={9} lg={9}>
            <div className="hands">
              <Hand hand={this.state.dealerHand} showDeck={true} name={'Dealer'} />
              <Hand hand={this.state.playerHand} name={'Your Name'} />
            </div>
          </Col>

          <Col xs={12} sm={12} md={3} lg={3}>
            <Interface
              status={this.state.status}
              deal={this.handleDealClick}
              hit={this.handleHitClick}
              stay={this.handleStayClick}
              dealerScore={this.calculateScore(this.state.dealerHand)}
              playerScore={this.calculateScore(this.state.playerHand)} />
          </Col>
        </Grid>
      </div>
    )
  }
});

export default Table;