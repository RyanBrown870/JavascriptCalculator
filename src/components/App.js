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
      result: "0",
      isOperatorClicked: false,
      isNegativeActive: false,
      isDecimalActive: false,
      isEqualsClicked: false,
      displayResult: ""
    };
  }

  handleOperatorClick = (e) => {
    let currNumber = e.target.innerHTML;
    

    // Cann add new operations to previous result
    if (this.state.isEqualsClicked) {
      this.setState((state) => ({
        number: state.result.toString(),
        isOperatorClicked: true,
        isEqualsClicked: false,
        displayResult: "",
        result: currNumber
      }));

      
    }

    // Turn off decimal toggle as this number is finished
    if (this.state.isDecimalActive) {
      this.setState({
        isDecimalActive: false,
      });
    }

    // If no operator in use, append the current operator to number
    if (!this.state.isOperatorClicked && !this.state.isNegativeActive) {
      this.setState((state) => ({
        number: state.number.concat(currNumber),
        isOperatorClicked: true,
        result: currNumber
      }));
    } else if (this.state.isNegativeActive) { // If double negative then overwrite
      let lastIndex = this.state.number.length;
      this.setState((state) => ({
        number: state.number.slice(0, lastIndex - 2).concat(currNumber),
        isNegativeActive: false,
        isOperatorClicked: true,
        result: currNumber
      }));
    } else {
      let lastIndex = this.state.number.length;
      this.setState((state) => ({
        number: state.number.slice(0, lastIndex - 1).concat(currNumber), // If there is an operator, overwrite it
        isOperatorClicked: true,
        result: currNumber
      }));
    }
  };

  handleMinusClick = (e) => {
    let currNumber = e.target.innerHTML
    

    if (this.state.isEqualsClicked) {
      this.setState((state) => ({
        number: state.result.toString(),
        isOperatorClicked: true,
        isEqualsClicked: false,
        result: ""
      }));

      
    }

    

    if (this.state.isDecimalActive) {
      this.setState({
        isDecimalActive: false,
      });
    }

    // If no operator add -
    if (!this.state.isOperatorClicked && !this.state.isNegativeActive) {
      this.setState((state) => ({
        number: state.number.concat("-"),
        isOperatorClicked: true,
        result: currNumber
      }));
    } else if (this.state.isOperatorClicked && !this.state.isNegativeActive) {
      // +*/ & no -
      this.setState((state) => ({
        number: state.number.concat("-"),
        isNegativeActive: true,
        result: currNumber
      }));
    } else if (this.state.isNegativeActive) {
      let lastIndex = this.state.number.length;
      this.setState((state) => ({
        number: state.number.slice(0, lastIndex - 2).concat("-"),
        isNegativeActive: false,
        isOperatorClicked: true,
        result: currNumber
      }));
    } else {
      let lastIndex = this.state.number.length;
      this.setState((state) => ({
        number: state.number.slice(0, lastIndex - 1).concat("-"),
        isOperatorClicked: true,
        result: currNumber
      }));
    }
  };

  handleDecimalClick = () => {

    

    if (this.state.isEqualsClicked) {
      this.setState({
        result: "0",
        number: "",
        isEqualsClicked: false
      })
    }

    if (!this.state.isDecimalActive) {
      this.setState((state) => ({
        number: state.number.concat("."),
        isDecimalActive: true,
        isOperatorClicked: false
      }));
    }
  };

  handleDigitClick = (e) => {
    let currNumber = e.target.innerHTML;

   

    if (this.state.isEqualsClicked) {
      this.setState({
        result: "0",
        number: "",
        isEqualsClicked: false
      })
    }

    if (currNumber !== '0') {

    // Append number and reset operator toggles
    this.setState((state) => ({
      number: state.number.concat(currNumber),
      isOperatorClicked: false,
      isNegativeActive: false,
      result: currNumber
    }));
  } else if (currNumber === '0' && !this.state.isOperatorClicked && this.state.number) {
    console.log('i')
    this.setState((state) => ({
      number: state.number.concat(currNumber),
      isOperatorClicked: false,
      isNegativeActive: false,
      result: currNumber
    }));
  }
  };

  handleEqualsClick = () => {
    // just use eval(). It's safe if no user input is given as text and as this is buttons I think it's ok in this case
    let cleanedResult = this.state.number.replace(/--/g, "+"); // Replace double negative with +
    let asteriskResult = cleanedResult.replace(/x/g, "*"); // Replace x with * for eval
    let result = eval(asteriskResult);
    
    this.setState((state) => ({
      displayResult: `` + state.number + `=` + result,
      result: result,
      number: result,
      isOperatorClicked: false,
      isNegativeActive: false,
      isDecimalActive: false,
      isEqualsClicked: true,
    }));
  };

  handleACClick = () => {
    this.setState((state) => ({
      result: "0",
      number: "",
      isOperatorClicked: false,
      isNegativeActive: false,
      isDecimalActive: false,
      isEqualsClicked: false,
      displayResult: ""
    }));
  };


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
              displayResult={this.state.displayResult}
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
