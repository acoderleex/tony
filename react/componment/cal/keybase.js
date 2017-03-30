'use strict';

import React,{ Component }from 'react';

import CalculatorActions from '../../actions/calculator';

class KeyboardBase extends Component {
  constructor(props) {
    super(props);
    this.state={
        isHighlighted:false
    };
    this.handleClick=this.handleClick.bind(this);

  }
  handleClick(){
    console.log(this.props.keyType+"======"+this.props.keyValue);
    CalculatorActions.typeKey(this.props.keyType,this.props.keyValue);
  }
}

module.exports = KeyboardBase;
