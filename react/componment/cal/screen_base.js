'use strict';
import  React, { Component} from 'react';
import CalculatorStore from '../../stores/calculator';

function getCalculatorState() {
  return{
    disPlayScreen: CalculatorStore.getDisplayScreen()
  };
}


class ScreenBase extends Component {
  constructor(props) {
    super(props);
    this.state= {
        disPlayScreen: CalculatorStore.getDisplayScreen()
    };
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){
    CalculatorStore.addChangeLister(this._onChange);
  }

  componentWillUnmount(){
    CalculatorStore.removeChangeLister(this._onChange);
  }
  _onChange(){
    this.setState(getCalculatorState());
  }
}
module.exports = ScreenBase;
