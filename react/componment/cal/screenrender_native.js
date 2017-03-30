'use strict';

import React , { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import assign from 'object-assign';
import CalStyle from '../../style/cal';

export default function(props,state){
  return(
    <Text style={ styles.screenNative}>
        {state.disPlayScreen}
    </Text>
  );
}
const styles = StyleSheet.create(assign(
  {},
  CalStyle
));
