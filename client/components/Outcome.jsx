
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

    console.log('Outcome.handOutcome: ', status);

    if (status === 'new') {
      return <Alert bsStyle="info">Click 'Deal' to begin!</Alert>
    }

    else if (status === 'playing') {
      return <Alert bsStyle="info">Do you want to hit or stay?</Alert>
    }

    else if (status === 'win') {
      console.log('win');
    }

    else if (status === 'lose') {
      console.log('lose');
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