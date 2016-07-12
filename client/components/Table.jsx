
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
    var deck = this.state.deck;
    var dealerHand = [];
    var playerHand = [];

    // if too little cards in deck, shuffle in a new one
    if (deck.length < 5) deck = this.props.deck;

    // give the player 2 cards
    playerHand.push(deck.pop());
    playerHand.push(deck.pop());

    // give dealer 1 card, the hidden card will be of no value,
    // the dealer will be dealt another card when showDeck=false
    dealerHand.push(deck.pop());

    // set the state for the updated info
    this.setState({
      status: 'playing',
      dealerHand: dealerHand,
      playerHand: playerHand,
      deck: deck
    })
  },

  handleHitClick() {
    var newStatus  = this.state.status;
    var playerHand = this.state.playerHand;

    // check deck size to see if we need to shuffle in a new deck
    if (this.state.deck.length < 5)
      this.state.deck = _.shuffle(this.props.deck);

    // probably should shuffle the deck here so cant cheat with state :)
    var shuffled = _.shuffle(this.state.deck);
    playerHand.push(shuffled.pop());

    var newPlayerScore = this.calculateScore(playerHand);
    // if 5 cards in hand and still under 21, player wins
    if (newPlayerScore < 21 && playerHand.length === 5)
      newStatus = 'win';
    // if hand totals over 21, player loses
    if (newPlayerScore > 21)
      newStatus = 'lose';

    // update the state
    this.setState({
      status: newStatus,
      playerHand: playerHand,
      playerScore: newPlayerScore,
      deck: shuffled
    })
  },

  handleStayClick() {
    console.log('staying, called from Table!');
    var deck = this.state.deck;
    var dealerHand = this.state.dealerHand;

    // check if deck size < 5, if so shuffle in new deck
    if (this.state.deck.length < 5)
      this.state.deck = _.shuffle(this.props.deck);

    // shuffle deck to prevent from cheating with state :)
    var shuffled = _.shuffle(this.state.deck);

    // call calculateScore to update scores for player/dealer
    var dealerScore = this.calculateScore(dealerHand);
    var playerScore = this.calculateScore(this.state.playerHand);
    var dealerHasCharlie = false;

    // compute game status while dealing cards to dealer
    while (dealerScore < playerScore || dealerScore <= 17) {

      // deal a card
      dealerHand.push(shuffled.pop());
      dealerScore = this.calculateScore(dealerHand);

      if (dealerScore < 21 && dealerHand.length === 5) {
        dealerHasCharlie = true;
        break;
      }
    }

    var status;
    // handle the comparison of player/dealer hands
    if (dealerScore === playerScore)
      status = 'tie';
    else if (dealerScore <= 21 || dealerHasCharlie)
      status = 'lose';
    else
      status = 'win';

    // update the state vars accordingly
    this.setState({
      dealerHand: dealerHand,
      deck: shuffled,
      status: status
    });

  },

  calculateScore(hand) {
    var score = _.sumBy(hand, 'v');

    // need to handle case where score > 21 && aces > 0
    if (score > 21) {
      var aces = _.countBy(hand,{v: 11}).true || 0;
      while (score > 21 && aces > 0) {
        score -= 10;
        aces  -= 1;
      }
    }

    console.log('from calculateScore: score: ', score)
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