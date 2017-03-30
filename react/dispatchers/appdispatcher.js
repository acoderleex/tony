'use strict';
import { Promise } from 'es6-promise';
import assign from 'object-assign';
var _callBacks = [];
var _promises = [];
var Dispatcher = function(){};
Dispatcher.prototype = assign({},Dispatcher.prototype,{

  register:function(callBack){
    _callBacks.push(callBack);
    return _callBacks.length-1;
  },

  dispatch:function(payload){
    var resolves=[];
    var rejects=[];
    _promises=_callBacks.map(function(_,i){
      return new Promise(function(resolve,reject){
        resolves[i]=resolve;
        rejects[i]=reject;
      });
    });

    _callBacks.forEach(function(callBack,i) {
        Promise.resolve(callBack(payload)).then(function(){
            resolves[i](payload);
        },function() {
            rejects[i](new Error('Dispatcher call unSuccessful'));
        });
    });

    _promises=[];
  }
});

var AppDispatcher = assign({},Dispatcher.prototype,{
  handleViewAction: function(action){
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;
