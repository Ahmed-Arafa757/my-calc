import "./App.css";
import React, { Component } from "react";
import CalculatorDisplay from './CalculatorDisplay'

export default class CalculatorFunctionsHandler extends Component {
  render() {
    return (
      <React.Fragment>
        < CalculatorDisplay
          onEqualPressed={this.EnterEqual}
          onNumberPressed={this.EnterNumber}
          onOperatorPressed={this.EnterOperator}
          onClearPressed={this.EnterClear}
        />
     </React.Fragment>
    );
  }

  EnterEqual = () => {
    var x = eval(document.getElementsByTagName("input")[0].value);
    console.log(x);
    document.getElementsByTagName("input")[0].value = x;
  };

  EnterNumber = (n) => {
    console.log(n);
    document.getElementsByTagName("input")[0].value += n;
  };

  EnterOperator = (o) => {
    console.log(o);
    document.getElementsByTagName("input")[0].value += o;
  };

  EnterClear = () => {
    document.getElementsByTagName("input")[0].value = "";
  };
}
