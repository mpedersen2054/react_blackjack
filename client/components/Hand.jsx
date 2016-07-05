
import React from 'react';

import Card from './Card.jsx';

const Hand = React.createClass({
  render() {
    return(
      <div>
        <Card />
        <Card />
      </div>
    )
  }
});

export default Hand;