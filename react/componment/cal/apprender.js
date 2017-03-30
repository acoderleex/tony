'use strict';

import Render from './apprender_native';
export default function(){
  return Render.call(this,this.props,this.state);
}
