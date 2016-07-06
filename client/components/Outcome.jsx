
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

    if (status === 'new') {
      return <Alert bsStyle="info">Click 'Deal' to begin!</Alert>
    }

    else if (status === 'playing') {
      console.log('playing');
    }

    else if (status === 'win') {
      console.log('win');
    }

    else if (status === 'lose') {
      console.log('lose');
    }

    else {
      console.log('unhandled status!');
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