'use strict';

import AppDispatcher from '../dispatchers/appdispatcher';
import CalculatorConstants from '../constants/CalculatorConstants';

var CalculatorActions = {

    typeFormula: function(formula){
        AppDispatcher.dispatch({
          type: CalculatorConstants.FORMULA_TYPED,
          formula: formula
        });
    },

    typeKey: function(keyType,keyValue){
      console.log("==typeKey===="+keyType);
       AppDispatcher.dispatch({
         type:CalculatorConstants.KEY_TYPED,
         keyType:keyType,
         keyValue:keyValue
       });
    }
};
module.exports = CalculatorActions;
