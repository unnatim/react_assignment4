import React from 'react';

import NumberCard from './NumberCard.js';

let interval_id;

class LuckyThree extends React.Component {

  // TODO 1: Initialize state having an array with name "numberCards" which has three values. These values are being displayed inside each card. Keep the initial value as "Click" for each card.

  constructor() {
    super();
    this.state = {
      numberCards: ["Click","Click","Click"]
    }
  }

  cardClickHandler = (cardIndex) => (e) => {
      interval_id = setInterval(() => {
          this.displayRandomNumbers(e, cardIndex);
      }, 200);
  }

  displayRandomNumbers = (e, cardIndex) => {
    // TODO 4: Set the state of "numberCards" array at given "cardIndex" with the value received from generateRandomNumber() function defined below
      const number = this.generateRandomNumber();
      const currentNumberCards = this.state.numberCards;
      currentNumberCards[cardIndex] = number;
      //this.setState(state);
      this.setState({numberCards: currentNumberCards});

  }
  
  generateRandomNumber = () => {
    let maxNumber = 9;
    return Math.floor(Math.random() * (maxNumber + 1)).toString();
  }

  tryLuckClickHandler = (e) => {
      this.checkAllCards(e);
  }

  checkAllCards = (e) => {
    for (let i = 1; i <= interval_id; i++) {
        window.clearInterval(i);
    }
    for (let i = 1; i < this.state.numberCards.length; i++) {
        if (this.state.numberCards[i] !== this.state.numberCards[i - 1]) {
            alert("Ohh! You lost!");
            return;
        }
    }
    alert("Yay! You won!");
  }

  render() {
    //const {numberCards} = this.state;
    return (
      <div className="main-container">
        <div className="number-cards-container">
          {
            /* TODO 2:
              a) Pass prop "number" in all the three NumberCard components 
              b) Fetch state of "numberCards" array at the specific index (0, 1, or 2) and assign this to the prop "number"
            */
          }
          <NumberCard id={this.props.idArr[0]} color={this.props.colorsArr[0]} cardClickHandler={this.cardClickHandler(0)} number={this.state.numberCards[0]}/>
          <NumberCard id={this.props.idArr[1]} color={this.props.colorsArr[1]} cardClickHandler={this.cardClickHandler(1)} number={this.state.numberCards[1]}/>
          <NumberCard id={this.props.idArr[2]} color={this.props.colorsArr[2]} cardClickHandler={this.cardClickHandler(2)} number={this.state.numberCards[2]}/>
        </div>
        {
          /* DONE 5: Added the onClick handler to the input tag and bound it with the created function in TODO 4 called "tryLuckClickHandler" */
        }
        <input id="tryYourLuckBtn" className="custom-btn" type="button" value="Try Your Luck" onClick={this.tryLuckClickHandler} />
      </div>
    )
  }
}

export default LuckyThree;