'use strict';

import FormulaeBase from './FormulaeBase';
import Render from './formulaerender';

export default class  Formulae extends  FormulaeBase{
  render(){
    return Render.call(this,this.props,this.state);
  }
}
