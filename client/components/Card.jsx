
import React from 'react';

import {
  Image
} from 'react-bootstrap';

const Card = React.createClass({
  render() {
    const imgz = require('../images/10_of_clubs.png')
    return(
      <div className="card">
        <Image src={imgz} />
      </div>
    )
  }
});

export default Card;