'use strict';

import React , { Component } from 'react';

import CalculatorStore from '../../stores/calculator';
import CalculatorActions from '../../actions/calculator';

function getFormulaState(){
  return {
    displayFormulae: CalculatorStore.getDisplayFormulae()
  }
}

class FormulaeBase extends Component {
  constructor(props) {
    super(props);
    this.state= {
      displayFormulae: CalculatorStore.getDisplayFormulae()
    };
    this.handleClick=this.handleClick.bind(this);
    this._onChange=this._onChange.bind(this);
  }

  componentDidMount(){
    CalculatorStore.addChangeLister(this._onChange);
  }
  componentWillUnMount(){
    CalculatorStore.removeChangeLister(this._onChange);
  }

  handleClick(formula){
    CalculatorActions.typeFormula(formula);
  }
  _onChange(){
    this.setState(getFormulaState());
  }
}
module.exports = FormulaeBase;
