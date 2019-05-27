import React from 'react';

import NumberCard from './NumberCard.js';

let interval_id;

class LuckyThree extends React.Component {

  // DONE 1: Defined a function called "cardClickHandler" and called the given function "displayRandomNumbers" inside it
  cardClickHandler = (e) => {
    this.displayRandomNumbers(e);
  }

  displayRandomNumbers = (e) => {
    let maxNumber = 9;
    let currentTarget = e.currentTarget;
    interval_id = setInterval(() => {
      currentTarget.childNodes[0].innerText = Math.floor(Math.random() * (maxNumber + 1));
    }, 200);
    e.persist();
  }

  // DONE 4: Defined a function called "tryLuckClickHandler" and called the given function "checkAllCards" inside it
  tryLuckClickHandler = (e) => {
    this.checkAllCards(e);
  }

  checkAllCards = (e) => {
    for (let i = 1; i <= interval_id; i++) {
      window.clearInterval(i);
    }
    for (let i = 1; i < this.props.idArr.length; i++) {
      if (document.getElementById(this.props.idArr[i]).innerText !== document.getElementById(this.props.idArr[i - 1]).innerText) {
        alert("Ohh! You lost!");
        return;
      }
    }
    alert("Yay! You won!");
  }

  render() {
    return (
      <div className="main-container">
        <div className="number-cards-container">
          {
            /* DONE 2: 
              a) Added props to the NumberCard with the name "cardClickHandler" and assigned each prop a value which binds the created function in TODO 1 called "cardClickHandler"
              b) Repeated the above step (a) with all the three NumberCards
            */
          }
          <NumberCard id={this.props.idArr[0]} color={this.props.colorsArr[0]} cardClickHandler={this.cardClickHandler} />
          <NumberCard id={this.props.idArr[1]} color={this.props.colorsArr[1]} cardClickHandler={this.cardClickHandler} />
          <NumberCard id={this.props.idArr[2]} color={this.props.colorsArr[2]} cardClickHandler={this.cardClickHandler} />
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