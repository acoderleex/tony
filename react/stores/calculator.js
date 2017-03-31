'use strict';

import { EventEmitter} from 'events';
import assign from 'object-assign';

import AppDispatcher from '../dispatchers/appdispatcher';
import CalculatorConstants from '../constants/CalculatorConstants'

var CHANGE_EVENT='chane';
var _displayScreen='0';
var _totalNumberOfDigits=12;
var _exponentialNumberOfDigits = 5;
var _displayFormulae = [];
var _numberKeyPressedBuffer = [];
var _numbersFromBuffer = [];
var _backKeyPressedInARowBuffer=0;
var _lastCalculation = {};
var _lastPressedWasEqual = false;
var _signKeyTyped = null;
var _symbolKeyTyped = null;

var CalculatorStore = assign({},EventEmitter.prototype ,{
    getDisplayScreen : function(){
      if (_displayScreen.toString().length>=_totalNumberOfDigits) {
        return parseFloat(_displayScreen).toExponential(_exponentialNumberOfDigits);
      }
      return _displayScreen;
    },
    emitChange: function(){
      this.emit(CHANGE_EVENT);
    },
    addChangeLister: function(callBack) {
      this.on(CHANGE_EVENT,callBack);
    },
    removeChangeLister: function(callBack){
      this.removeListener(CHANGE_EVENT,callBack);
    },
    getDisplayFormulae:function(){
      var maxNumberOfChar=32;
      var characterCount=0;
      console.log(_displayFormulae.length+"===getDisplayFormulae==="+_displayFormulae);
      _displayFormulae=_displayFormulae.reverse().filter(function(formula) {
          characterCount+=formula.literal.length;
          return characterCount<maxNumberOfChar;
      }).reverse();

      return _displayFormulae;
    }
});

function proceeFormula(formula){
  if (_displayFormulae[_displayFormulae.length-1].literal!==formula.literal) {
    var numbers= formula.literal.split(' ');
    _numbersFromBuffer[0]=parseFloat(numbers[0]);
    _numbersFromBuffer[1]=parseFloat(numbers[2]);
    _signKeyTyped=formula.operator;
    processCalculation();
  }
}

function processKey(keyType,keyValue){
    console.log(keyType+"===keyType==="+keyValue);
    if (keyType==='number') {
      if (keyValue==='+-') {
        if (_numberKeyPressedBuffer.length) {
          if (_numberKeyPressedBuffer[0]==='-') {
              _numberKeyPressedBuffer.shift();
              if (_numberKeyPressedBuffer.length===2&&_numberKeyPressedBuffer[0]==='0') {
                  _numberKeyPressedBuffer.shift();
              }
          }else {
             _numberKeyPressedBuffer.unshift('-');
          }
          _displayScreen=_numberKeyPressedBuffer.join('');
        }else {
            if (!_numberKeyPressedBuffer.length) {
              _numberKeyPressedBuffer.unshift('0');
              _numberKeyPressedBuffer.unshift('-');
              _displayScreen=_numberKeyPressedBuffer.join('');
            }else {
              _numberKeyPressedBuffer[0]=_numberKeyPressedBuffer[0]*-1;
              _displayScreen=_numberKeyPressedBuffer[0].toString();
            }
        }
        return;
      }
      if (_lastPressedWasEqual) {
        _numberKeyPressedBuffer=[];
      }
      _lastPressedWasEqual=false;
      return processNumberKeyPressed(keyType,keyValue);
    }else {
      if (keyValue==='back') {
        _lastPressedWasEqual=false;
        return processBackKeyPressed(keyType,keyValue);
      }
      _backKeyPressedInARowBuffer=0;
      if (keyType==='operator') {
        _lastPressedWasEqual=false;
        _signKeyTyped=keyValue;
        console.log("====_numberKeyPressedBuffer===="+_numberKeyPressedBuffer);
        if (_numberKeyPressedBuffer.length) {
          _numbersFromBuffer.push(parseFloat(_numberKeyPressedBuffer.join('')));
          _numberKeyPressedBuffer=[];
        }else {
          _lastCalculation={
            number:parseFloat(_displayScreen),
            sign:_signKeyTyped
          };
        }
        processCalculation();
      }

      if (keyType==='equal') {
        if (_numberKeyPressedBuffer.length) {
          _numbersFromBuffer.push(parseFloat(_numberKeyPressedBuffer.join('')));
          _numberKeyPressedBuffer=[];
        }else if (_lastCalculation.number) {
          _numbersFromBuffer.push(_lastCalculation.number);
          _signKeyTyped=_lastCalculation.sign;
        }
        processCalculation();
        _lastPressedWasEqual=false;
      }
    }
}

function processCalculation(){
  console.log('=====processCalculation=========='+_numbersFromBuffer.length);
  if (_numbersFromBuffer.length===2) {
    var calculation=0;
    _numbersFromBuffer[0]=parseFloat(_numbersFromBuffer[0]);
    _numbersFromBuffer[1]=parseFloat(_numbersFromBuffer[1]);
    switch (_signKeyTyped) {
      case 'add':
        calculation=_numbersFromBuffer[0]+_numbersFromBuffer[1];
        _symbolKeyTyped='+';
        break;
      case 'substract':
        calculation=_numbersFromBuffer[0]-_numbersFromBuffer[1];
        _symbolKeyTyped='-';
        break;
      case 'multiply':
        calculation=_numbersFromBuffer[0]*_numbersFromBuffer[1];
        _symbolKeyTyped='x';
        break;
      case 'divider':
        if (_numbersFromBuffer[0]===0) {
          calculation='Error';
        }else {
          calculation=_numbersFromBuffer[0]/_numbersFromBuffer[1];
        }
        _symbolKeyTyped = '÷';
        break;
      default:
    }
    _lastCalculation={
      number:_numbersFromBuffer[1],
      sign: _signKeyTyped
    };

    var splitCalculation=calculation.toString().split('.');
    if (splitCalculation.length===2) {
      var fixTo=_totalNumberOfDigits-2-calculation.toString().split('.')[0].length;
      if (fixTo<0) {
        fixTo=0;
      }
      calculation=parseFloat(calculation.toFixed(fixTo));
    }else if (calculation.toString().length>=_totalNumberOfDigits) {
      calculation=calculation.toExponential(_exponentialNumberOfDigits);
    }
    _displayScreen=calculation.toString();
    if (calculation==='Error') {
      _numbersFromBuffer=[];
    }else {
      if (_numbersFromBuffer[0].toString().length>=_totalNumberOfDigits) {
        _numbersFromBuffer[0]=_numbersFromBuffer[0].toExponential(_exponentialNumberOfDigits);
      }
      if (_numbersFromBuffer[1].toString().length>=_totalNumberOfDigits) {
        _numbersFromBuffer[1]=_numbersFromBuffer[1].toExponential(_exponentialNumberOfDigits);
      }

      _displayFormulae.push({
          id:uniqid(),
          literal:''+_numbersFromBuffer[0].toString()+'  '+_symbolKeyTyped+ ' '+_numbersFromBuffer[1].toString(),
          operator: _signKeyTyped
      });
      _numbersFromBuffer=[calculation];
    }
  }
}

function uniqid(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
   var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
   return v.toString(16);
  });
}

function processBackKeyPressed(keyType,keyValue){
  console.log(keyType+'===processBackKeyPressed======='+keyValue);
  if (_numberKeyPressedBuffer.length) {
    _numberKeyPressedBuffer.pop();
    if ((_numberKeyPressedBuffer.length==1&&_numberKeyPressedBuffer[0]==='0')||(_numberKeyPressedBuffer.length===2&&_numberKeyPressedBuffer[0]==='-')&&_numberKeyPressedBuffer[1]==='0') {
      _numberKeyPressedBuffer.pop();
    }

    if (_numberKeyPressedBuffer.length===1&&_numberKeyPressedBuffer[0]==='-') {
      _displayScreen="-0";
    }else {
      _displayScreen=_numberKeyPressedBuffer.join('');
    }
    if (!_numberKeyPressedBuffer.length) {
      _numberKeyPressedBuffer=[];
      _numbersFromBuffer=[];
      _displayScreen='0';
      _backKeyPressedInARowBuffer++;
      _lastCalculation={};
    }
  }else {
    _numberKeyPressedBuffer=[];
    _numbersFromBuffer=[];
    _displayScreen='0';
    _backKeyPressedInARowBuffer++;
    _lastCalculation={};
  }

  if (_backKeyPressedInARowBuffer>=2) {
    _displayFormulae.pop();
  }
  return;
}

function processNumberKeyPressed(keyType,keyValue){
  if (_numberKeyPressedBuffer.length===2&&_numberKeyPressedBuffer[0]==='-'&&_numberKeyPressedBuffer[1]==='0') {
    _numberKeyPressedBuffer.pop();
  }
  if (keyValue==='.') {
    if (~_numberKeyPressedBuffer.indexOf('.')) {
      return;
    }else {
      if (!_numberKeyPressedBuffer.length||(_numberKeyPressedBuffer.length===1&&_numberKeyPressedBuffer[0]==='-')) {
        _numberKeyPressedBuffer.push['0'];
      }
    }
  }

  if (keyValue==='0') {
    if (_numberKeyPressedBuffer.length===1&&_numberKeyPressedBuffer[0]==='0') {
      return;
    }
  }
  _numberKeyPressedBuffer.push(keyValue);
  _displayScreen=_numberKeyPressedBuffer.join('');
  console.log("====processNumberKeyPressed======"+_displayScreen);
}

CalculatorStore.dispatchToken=AppDispatcher.register(function(action){
    console.log("====dispatchToken====="+action.type);
    switch (action.type) {
      case CalculatorConstants.KEY_TYPED:
        var keyType=action.keyType;
        var keyValue=action.keyValue;
        if (keyType!==undefined&&keyValue!==undefined) {
            processKey(keyType,keyValue);
            CalculatorStore.emitChange();
        }
        break;
      case CalculatorConstants.FORMULA_TYPED:
        var formula=action.formula;
        if (formula!==undefined) {
          proceeFormula(formula);
          CalculatorStore.emitChange();
        }
        break;
      default:

    }
});

module.exports = CalculatorStore;
