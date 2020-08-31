import React, { Component } from 'react'
import './App.css';
import Pad from './Pad'
import Display from './Display'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
      isOperatorClicked: false,
      isNegativeActive: false,
    }
  }

  // & --Optrue    &-  --OptrueNegtrue    - Optrue

  handleOperatorClick = (e) => {
    let currNumber = e.target.innerHTML;
    if (!this.state.isOperatorClicked && !this.state.isNegativeActive) {
      this.setState(state => ({
        number: state.number.concat(currNumber),
        isOperatorClicked: true
      }))
    } else if (this.state.isNegativeActive) {
      let lastIndex = this.state.number.length;
      this.setState(state => ({
        number: state.number.slice(0, lastIndex - 2).concat(currNumber),
        isNegativeActive: false,
        isOperatorClicked: true,
      }))
    } else {
      let lastIndex = this.state.number.length;
      this.setState(state => ({
        number: state.number.slice(0, lastIndex - 1).concat(currNumber),
        isOperatorClicked: true
      }))
    }
  }

  handleMinusClick = (e) => {
    if (!this.state.isOperatorClicked && !this.state.isNegativeActive) {
      this.setState(state => ({
        number: state.number.concat('-'),
        isOperatorClicked: true
      }))
    } else if (this.state.isOperatorClicked && !this.state.isNegativeActive) {
      this.setState(state => ({
        number: state.number.concat('-'),
        isNegativeActive: true,
        isOperatorClicked: false
      }))
  } else if (this.state.isNegativeActive) {
    let lastIndex = this.state.number.length;
      this.setState(state => ({
        number: state.number.slice(0, lastIndex - 2).concat('-'),
        isNegativeActive: false,
        isOperatorClicked: true
      }))
  }
  else {
    let lastIndex = this.state.number.length;
      this.setState(state => ({ 
        number: state.number.slice(0, lastIndex - 1).concat('-'),
        isOperatorClicked: true
      }))
  }
}

  handleDigitClick = (e) => {
    let currNumber = e.target.innerHTML;
    this.setState(state => ({
      number: state.number.concat(currNumber),
      isOperatorClicked: false
    }))
  }

  // have operator button trigger a type of state e.g. 'divide'. 
  // They all overwrite each other except the minus button
  // Treat minus as another digit rather than an operator.
  // divideIsClicked property - boolean
  // we need to push the digit to add it onto the end. Use num2str and str2num etc, use regex to split operators etc.
  // how to do 2 numbers? One before operator, one after operator? Just use regex, build a big string
  // how to stop updating multiple / / / / or x x x x etc - use divideisclicked state conditional
  // how to display it?


  render() {
    return (
      <div className="container">
        <Pad />
        <Display />
        <button onClick={this.handleOperatorClick}>/</button>
        <button onClick={this.handleOperatorClick}>X</button>
        <button onClick={this.handleOperatorClick}>+</button>
        <button onClick={this.handleMinusClick}>-</button>
        <button onClick={this.handleDigitClick}>1</button>
        <button onClick={this.handleDigitClick}>2</button>
        <button onClick={this.handleDigitClick}>3</button>
        <button onClick={this.handleDigitClick}>4</button>
        <button onClick={this.handleDigitClick}>5</button>
        <button onClick={this.handleDigitClick}>6</button>
        <button onClick={this.handleDigitClick}>7</button>
        <button onClick={this.handleDigitClick}>8</button>
        <button onClick={this.handleDigitClick}>9</button>

      </div>
    )
  }
}

export default App


