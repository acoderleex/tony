'use strict';
import KeyBase from './keybase';
import Render from './keyrender';

export default class Key extends KeyBase {
    render(){
      return Render.call(this,this.props,this.state);
    }
}
