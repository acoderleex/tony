'use strict';

import Render from './screenrender_native';

export default function(){
  return Render.call(this,this.props,this.state);
}
