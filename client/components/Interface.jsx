
import React from 'react';

import {
  Panel, ListGroup, ListGroupItem, Image, ButtonGroup, Button,
  MenuItem
} from 'react-bootstrap';

const Interface = React.createClass({
  render() {

    const panelDealer = (
      <div>
        <Image src="http://i2.wp.com/www.geekstogo.com/forum/public/style_images/shift/profile/default_large.png" circle responsive />
      </div>
    )
    const panelPlayer = (
      <div>
        <Image src="http://i2.wp.com/www.geekstogo.com/forum/public/style_images/shift/profile/default_large.png" circle responsive />
      </div>
    )

    return(
      <div>
        <div className="interface">
          <div className="dealer-meta interface-meta">
            <ListGroup>
              <ListGroupItem>{panelDealer}</ListGroupItem>
              <ListGroupItem className="lg-mini-title">Dealer</ListGroupItem>
              <ListGroupItem>...</ListGroupItem>
            </ListGroup>
          </div>
          <div className="player-meta interface-meta">
            <ListGroup>
              <ListGroupItem>{panelPlayer}</ListGroupItem>
              <ListGroupItem className="lg-mini-title">Your Name</ListGroupItem>
              <ListGroupItem>
                hello
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
        <div className="bottom-interface">
          <ButtonGroup justified className="thicker">
            <Button href="#" bsStyle="info">Deal</Button>
            <Button href="#" bsStyle="success">Hit</Button>
            <Button href="#" bsStyle="danger">Stay</Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }
});

export default Interface;