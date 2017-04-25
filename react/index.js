'use strict';

import React, { Component } from 'react';

import {
  View,
  Text,
  Navigator,
  StyleSheet
} from 'react-native';

import Main from './componment/main';
import Mall from './componment/mall';
import User from './componment/user';
import Finace from './componment/finace';
import TabbarItem from './views/tabbaritem';
import assign from 'object-assign';

import TabbarItemStyle from './style/tab';

var routeIndex = 0;


import i18n from 'react-native-i18n';
i18n.fallbacks = true;
import Translation from './i18n/translation.json';
global.translate=(...args)=>{
  i18n.translations = Translation
  return i18n.t(args);
};


var _getRandomRoute = function (str) {
  return{
    randNumber: str,
  };
}


var ROUTE_STACK=[
  _getRandomRoute('Main'),
  _getRandomRoute('Mall'),
  _getRandomRoute('User'),
  _getRandomRoute('Finace'),
];

class  TonyFilm extends Component {

  props: Props;
  state: State;

  constructor(props: Props,params) {
    super(props);
    this.state={
        tabIndex: 0
    }
  }

  render(){
    return(
      <View style={ styles.container}>
        <Navigator
              initialRoute={ROUTE_STACK[routeIndex]}
              // configureScene={(route) => {
              //     return Navigator.SceneConfigs.FadeAndroid;
              // } }
              renderScene={this.renderScene}
               initialRouteStack={ROUTE_STACK}
               ref={(navigator) => {
                this._navigator = navigator;
              }}
              />
            <View style={ styles.tabs }>
                  <TabbarItem
                    underlayColor="#B5B5B5"
                    image={ require("./image/film.png")}
                    title="影片"
                    onPress={()=>{
                      this.onTabIndex(0);
                      this.setState({tabIndex:0})
                    }}
                    />

                  <TabbarItem
                    underlayColor="#B5B5B5"
                    image={require("./image/cinema.png")}
                    title="影院"
                    onPress={()=>{
                      this.onTabIndex(1);
                      this.setState({tabIndex:1});
                    }}/>

                    <TabbarItem
                      underlayColor="#B5B5B5"
                      image={require("./image/me.png")}
                      title="用户"
                      onPress={()=>{
                        this.onTabIndex(2);
                        this.setState({tabIndex:2});
                      }}/>

                    <TabbarItem
                      underlayColor="#B5B5B5"
                      image={require("./image/me.png")}
                      title="理财"
                      onPress={()=>{
                          this.onTabIndex(3);
                          this.setState({tabIndex:3});
                    }}/>
              </View>
      </View>
    );
  }

  renderScene(route,navigator){

    var pages= [
        <Main {...route.params}/>,
        <Mall {...route.params}/>,
        <User {...route.params}/>,
        <Finace {...route.params}/>,
    ];

    return(
      pages[routeIndex]
    )
  }
  onTabIndex(_index){
    routeIndex=_index;
  }
}

const styles = StyleSheet.create(assign(
  {},
  TabbarItemStyle
));

module.exports = TonyFilm;
