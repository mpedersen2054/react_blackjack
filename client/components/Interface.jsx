
import React from 'react';

import Outcome from './Outcome.jsx';

import {
  Panel, ListGroup, ListGroupItem, Image, ButtonGroup, Button,
  MenuItem
} from 'react-bootstrap';

const Interface = React.createClass({

  getDefaultProps() {
    return {
      status: 'new'
    }
  },

  render() {
    const { status } = this.props;

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

        <Outcome status={this.props.status} />

        <div className="interface">
          <div className="dealer-meta interface-meta">
            {/* Dealer */}
            <ListGroup>
              <ListGroupItem>{panelDealer}</ListGroupItem>
              <ListGroupItem className="lg-mini-title">Dealer</ListGroupItem>
              <ListGroupItem>
                <p className="text-muted">score</p>
                <div className="score text-info">100</div>
              </ListGroupItem>
            </ListGroup>
          </div>
          <div className="player-meta interface-meta">
            {/* Player */}
            <ListGroup>
              <ListGroupItem>{panelPlayer}</ListGroupItem>
              <ListGroupItem className="lg-mini-title">Your Name</ListGroupItem>
              <ListGroupItem>
                <p className="text-muted">score</p>
                <div className="score text-info">100</div>
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>

        <div className="bottom-interface">
          <ButtonGroup justified className="thicker">
            <Button href="#" onClick={this.props.deal} bsStyle="default" bsSize="large" disabled={status === 'new' ? false : false}>Deal</Button>
            <Button href="#" onClick={this.props.hit} bsStyle="default" bsSize="large" disabled={status === 'new' ? true : false}>Hit</Button>
            <Button href="#" onClick={this.props.stay} bsStyle="default" bsSize="large" disabled={status === 'new' ? true : false}>Stay</Button>
          </ButtonGroup>
        </div>

      </div>
    )
  }
});

export default Interface;