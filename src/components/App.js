import React, { Component } from "react";
import "./App.css";
import Pad from "./Pad";
import Display from "./Display";
import AC from "./AC";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      result: "",
      isOperatorClicked: false,
      isNegativeActive: false,
      isDecimalActive: false,
      isEqualsClicked: false,
    };
  }

  handleOperatorClick = (e) => {
    let currNumber = e.target.innerHTML;

    if (this.state.isEqualsClicked) {
      this.setState({
        result: "",
        number: "",
        isEqualsClicked: false
      })
    }

    if (this.state.isDecimalActive) {
      this.setState({
        isDecimalActive: false,
      });
    }
    if (!this.state.isOperatorClicked && !this.state.isNegativeActive) {
      this.setState((state) => ({
        number: state.number.concat(currNumber),
        isOperatorClicked: true,
      }));
    } else if (this.state.isNegativeActive) {
      let lastIndex = this.state.number.length;
      this.setState((state) => ({
        number: state.number.slice(0, lastIndex - 2).concat(currNumber),
        isNegativeActive: false,
        isOperatorClicked: true,
      }));
    } else {
      let lastIndex = this.state.number.length;
      this.setState((state) => ({
        number: state.number.slice(0, lastIndex - 1).concat(currNumber),
        isOperatorClicked: true,
      }));
    }
  };

  handleMinusClick = () => {

    if (this.state.isEqualsClicked) {
      this.setState({
        result: "",
        number: "",
        isEqualsClicked: false
      })
    }

    if (this.state.isDecimalActive) {
      this.setState({
        isDecimalActive: false,
      });
    }
    if (!this.state.isOperatorClicked && !this.state.isNegativeActive) {
      this.setState((state) => ({
        number: state.number.concat("-"),
        isOperatorClicked: true,
      }));
    } else if (this.state.isOperatorClicked && !this.state.isNegativeActive) {
      // +*/ & no -
      this.setState((state) => ({
        number: state.number.concat("-"),
        isNegativeActive: true,
      }));
    } else if (this.state.isNegativeActive) {
      let lastIndex = this.state.number.length;
      this.setState((state) => ({
        number: state.number.slice(0, lastIndex - 2).concat("-"),
        isNegativeActive: false,
        isOperatorClicked: true,
      }));
    } else {
      let lastIndex = this.state.number.length;
      this.setState((state) => ({
        number: state.number.slice(0, lastIndex - 1).concat("-"),
        isOperatorClicked: true,
      }));
    }
  };

  handleDecimalClick = () => {

    if (this.state.isEqualsClicked) {
      this.setState({
        result: "",
        number: "",
        isEqualsClicked: false
      })
    }

    if (!this.state.isDecimalActive) {
      this.setState((state) => ({
        number: state.number.concat("."),
        isDecimalActive: true,
      }));
    }
  };

  handleDigitClick = (e) => {
    let currNumber = e.target.innerHTML;

    if (this.state.isEqualsClicked) {
      this.setState({
        result: "",
        number: "",
        isEqualsClicked: false
      })
    }

    this.setState((state) => ({
      number: state.number.concat(currNumber),
      isOperatorClicked: false,
      isNegativeActive: false,
    }));
  };

  handleEqualsClick = () => {
    // just use eval(). It's safe if no user input is given as text and as this is buttons I think it's ok in this case
    let cleanedResult = this.state.number.replace(/--/g, "+");
    let asteriskResult = cleanedResult.replace(/x/g, "*");
    console.log(cleanedResult);
    let result = eval(asteriskResult);
    
    this.setState((state) => ({
      result: result,
      isOperatorClicked: false,
      isNegativeActive: false,
      isDecimalActive: false,
      isEqualsClicked: true,
    }));
  };

  handleACClick = () => {
    this.setState((state) => ({
      result: "",
      number: "",
      isOperatorClicked: false,
      isNegativeActive: false,
      isDecimalActive: false,
    }));
  };

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
      <div id="calculator" className="container">
        <div className="row vertical-center">
          <div className="col-4"></div>
          <div className="col-4">
            <Display
              result={this.state.result}
              isEqualsClicked={this.state.isEqualsClicked}
              number={this.state.number}
            />
            <Pad
              handleOperatorClick={this.handleOperatorClick}
              handleACClick={this.handleACClick}
              handleDecimalClick={this.handleDecimalClick}
              handleDigitClick={this.handleDigitClick}
              handleMinusClick={this.handleMinusClick}
              handleEqualsClick={this.handleEqualsClick}
            />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}
