
import React from 'react';

import Card from './Card.jsx';

import {
  Alert
} from 'react-bootstrap';

const Outcome = React.createClass({

  getDefaultProps() {
    return {
      status: 'playing'
    }
  },

  handleOutcome() {
    const { status } = this.props;

    // hand the outcome alert based on this.props.status
    if (status === 'new') {
      return <Alert bsStyle="info">Click 'Deal' to begin!</Alert>
    }

    else if (status === 'playing') {
      return <Alert bsStyle="info">Do you want to hit or stay?</Alert>
    }

    else if (status === 'win') {
      return <Alert bsStyle="success">Congrats! You Win! Hit deal to play again.</Alert>
    }

    else if (status === 'lose') {
      return <Alert bsStyle="danger">Sorry. You lose. Hit Deal to play again.</Alert>
    }

    else if (status === 'tie') {
      return <Alert bsStyle="warning">Tie! No one loses. Hit Deal to play again.</Alert>
    }

    else {
      console.log('unhandled status!: ', status);
    }

  },

  render() {
    const { status } = this.props;

    return(
      <div className="outcome">
        {this.handleOutcome()}
      </div>
    )
  }
});

export default Outcome;