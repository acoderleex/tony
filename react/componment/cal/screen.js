'use strict';

import Base from './screen_base';
import Render from './screenrender';

export default class Screen extends Base{
  constructor(props){
    super(props);
  }
  render(){
    return Render.call(this,this.props,this.state);
  }
}
