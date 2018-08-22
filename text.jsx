import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class FiftyFifty extends React.Component {
  render() {
  let div;
    if(fiftyFifty){
        div = "Tonight I'm going out WOOO";
    }
    else {
      div="Tonight I'm going to bed WOOO";
    }
    return <h1>{div}</h1>;
  }
} 