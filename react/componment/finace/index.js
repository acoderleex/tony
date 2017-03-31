'use strict';

import React, { Component } from 'react';
import{
    StyleSheet,
    View,
    Text
} from 'react-native';
import assign from 'object-assign';
import FinaceStyle from '../../style/finace';

class Finace extends Component {
  render(){
    return(
      <View style={styles.container}>
          <Text style={styles.text}>Test</Text>
      </View>
    );
  }
}

const styles= StyleSheet.create(assign(
  {},
  FinaceStyle
));
module.exports = Finace;
