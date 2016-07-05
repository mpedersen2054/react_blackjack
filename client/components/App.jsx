
import React from 'react';

import Table from './Table.jsx';
import Navbar from './Navbar.jsx';

const App = React.createClass({
  render() {
    return(
      <div>
        <Navbar />
        <Table />
      </div>
    )
  }
});

export default App;