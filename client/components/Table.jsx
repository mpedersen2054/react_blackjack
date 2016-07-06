
import React from 'react';

import Hand from './Hand.jsx';
import Interface from './Interface.jsx';

import {
  Grid, Row, Col
} from 'react-bootstrap';

const Table = React.createClass({
  render() {
    return(
      <div className="table-container">
        <Grid fluid>
          <Col xs={12} sm={12} md={9} lg={9}>
            <div className="hands">
              <Hand />
              <Hand />
            </div>
          </Col>

          <Col xs={12} sm={12} md={3} lg={3} className="fixz">
            <Interface />
          </Col>
        </Grid>
      </div>
    )
  }
});

export default Table;