'use strict';

import Render from './keyrender_native';
export default function(){
  return Render.call(this,this.props,this.state);
}
