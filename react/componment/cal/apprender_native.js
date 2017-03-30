'use strict';
import React, { Component} from 'react';
import{
  StyleSheet,
  View
} from 'react-native';

import assign from 'object-assign';
import CalStyle from '../../style/cal';
import Screen from './screen';
import Formulae from './formulae';
import Keyboard from './Keyboard'

export default function(){
  return(
    <View style={ styles.container}>
        <View style={styles.screen}>
            <Screen />
        </View>
        <View style={styles.formulae}>
            <Formulae />
        </View>
        <View style={styles.keyboard}>
            <Keyboard />
        </View>
    </View>
  );
}

const styles =StyleSheet.create(assign(
  {},
  CalStyle
));
