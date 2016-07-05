
import React from 'react';
import { Link } from 'react-router';

const Navbar = React.createClass({
  render() {
    return(
      <div>
        <h1>
          <Link to="/">Solitare!</Link>
        </h1>
      </div>
    )
  }
});

export default Navbar;