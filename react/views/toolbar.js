'use strict';

import React ,{ Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';

import assign from 'object-assign';
import CommonStyle from '../style/common';

export default class ToolBar extends Component {

  props: Props;

  constructor(props: Props) {
    super(props);
  }

  render(){
      return(
        <View style={Platform.OS==='ios'? styles.toolbarIOS : styles.toolbar}>
            <TouchableOpacity style={ styles.backView} onPress={this.back.bind(this)}>
                <View style={styles.backIcon}/>
                <Text style={styles.backText}>返回</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{this.props.name}</Text>
        </View>
      );
  }

  back(){
    this.props.navigator.pop();
  }
}


class ToolbarFilm extends Component {
  render(){
    return(
      <View style={styles.toolbar}>
          <Image source={require('../image/logo.png')}  style={ styles.logo}/>
      </View>
    );
  }
}

export {ToolbarFilm};


const styles = StyleSheet.create(assign(
  {},
  CommonStyle
));
