'use strict';

import React, { Component } from 'React';

import {
  Navigator
} from 'react-native';

import FilmList from './film_list.js';

class Main extends Component {
  render(){
    return(
      <Navigator
          initialRoute={{name:'filmList',component:FilmList}}
          renderScene={(route,navigator)=>{
            let Component=route.component;
            return <Component {...route.params} navigator={navigator}/>
          }}
          />
    );
  }
}

module.exports = Main;
