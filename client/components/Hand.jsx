
import React from 'react';

import Card from './Card.jsx';

const Hand = React.createClass({

  getDefaultProps() {
    return {
      hand: []
    }
  },

  render() {
    const { name, hand } = this.props;

    return(
      <div className="hand">
        <h4>{this.props.name}</h4>
        <div className="cards">

          {this.props.showDeck ? <Card hidden={true} /> : ''}

          {this.props.hand.map((card, i) => {
            return <Card face={card.f} value={card.v} key={i} />
          })}

        </div>
      </div>
    )
  }
});

export default Hand;