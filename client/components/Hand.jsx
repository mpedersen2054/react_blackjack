
import React from 'react';

import Card from './Card.jsx';

const Hand = React.createClass({
  render() {
    return(
      <div className="hand">
        <h4>Player:</h4>
        <div className="cards">
          <Card />
          <Card />
        </div>
      </div>
    )
  }
});

export default Hand;