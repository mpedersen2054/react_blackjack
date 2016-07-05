
import React from 'react';

import Hand from './Hand.jsx';
import Interface from './Interface.jsx';

import {
  Grid, Row, Col
} from 'react-bootstrap';

const Table = React.createClass({
  render() {
    return(
      <Grid fluid>
        <Col xs={12} md={9} lg={9}>
          <Hand />
          <Hand />
        </Col>

        <Col xs={12} md={3} lg={3}>
          <Interface />
        </Col>
      </Grid>
    )
  }
});

export default Table;