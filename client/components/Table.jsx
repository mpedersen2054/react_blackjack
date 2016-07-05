
import React from 'react';

import Hand from './Hand.jsx';
import Interface from './Interface.jsx';

const Table = React.createClass({
  render() {
    return(
      <div>
        <Hand />
        <Hand />
        <Interface />
      </div>
    )
  }
});

export default Table;