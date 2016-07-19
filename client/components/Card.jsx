
import React from 'react';

import {
  Image
} from 'react-bootstrap';

const Card = React.createClass({

  // returns <Image src={} /> where src is an image in
  // client/images/{val}_of_{suite}.png
  showCard() {
    // needs to get <val>_of_<suite>.png and return the card
    var _val, _suite, _imgUrl;
    var face = this.props.face || '';

    // assign correct name if royal suite (11, 12, 13, 1)
    var val = face.slice(1);
    if (val === '11') _val = 'jack';
    else if (val === '12') _val = 'queen';
    else if (val === '13') _val = 'king';
    else if (val === '1') _val = 'ace';
    else if (val.length === 0) _val = 'back'; // hidden=true
    else _val = val

    // get the suite based on the letter
    var suite = face.charAt(0);
    if (suite === 'c') _suite = 'clubs';
    else if (suite === 'h') _suite = 'hearts';
    else if (suite === 's') _suite = 'spades';
    else if (suite === 'd') _suite = 'diamonds';
    else _suite = 'card'; // hidden = true

    // set imgUrl from /client/images/xxx_of_yyy.png
    _imgUrl = `${_val}_of_${_suite}.png`;

    return <Image src={require(`../images/${_imgUrl}`)} />

  },

  render() {
    return(
      <div className="card">
        {this.showCard()}
      </div>
    )
  }
});

export default Card;
