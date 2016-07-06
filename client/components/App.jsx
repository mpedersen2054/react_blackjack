
import React from 'react';

import Table from './Table.jsx';
import TopNav from './TopNav.jsx';

const App = React.createClass({
  render() {
    return(
      <div className="wrapper">
        <TopNav />
        <Table />
        <div className="pull-right"></div>
      </div>
    )
  }
});

export default App;