'use strict';

import Render from './formulaerender_native';
export default function(){
  return Render.call(this,this.props,this.state);
}
