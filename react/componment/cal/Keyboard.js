'use strict';

import React, { Component} from 'react';

import Render from './KeyboardRender';

class Keyboard extends Component {
  render(){
    return Render.call(this,this.props,this.state);
  }
}
module.exports = Keyboard;
