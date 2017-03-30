'use strict';

import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import assign from 'object-assign';
import CalStyle from '../../style/cal';

export default function(){
  if (this.props.keyType==='number') {
    return(
        <View style={styles.keyNumber}>
            <TouchableHighlight style={styles.button} onPress={this.handleClick} underlayColor="#cdcdcd">
                <Text style={styles.textButton}>
                  {this.props.keySymbol}
                </Text>
            </TouchableHighlight>
        </View>
    );
  }else if (this.props.keyType==='operator') {
    return(
      <View style={styles.keyOperator}>
        <TouchableHighlight style={getOperatorStyle(this.props.keyValue)} underlayColor="#cdcdcd" onPress={this.handleClick}>
            <Text style={styles.textButtonOperator}>
              {this.props.keySymbol}
            </Text>
        </TouchableHighlight>
      </View>
    );
  }else if (this.props.keyType==='action') {
    return(
      <View style={styles.keyActionStyle}>
          <TouchableHighlight style={styles.keyActionButton} onPress={this.handleClick}>
              <View style={getActionStyles(this.props.keyValue)}>
                  <Text style={getActionButtonStyles(this.props.keyValue)}>
                      {this.props.keySymbol}
                  </Text>
              </View>
          </TouchableHighlight>
      </View>
    );
  }
}

var getOperatorStyle = function(classOperation){
  var buttonOperator = {
      basic:{
        height: 50,
        width:50,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center'
      },
      add:{
        backgroundColor:"#fb96cf",
        paddingBottom:3
      },
      substract:{
        backgroundColor:'#fcb064',
        paddingBottom:3,
      },
      multiply:{
        backgroundColor:"#68cef1",
        paddingBottom: 3,
      },
      divider:{
        backgroundColor:'#cb7dc9',
        paddingBottom:3
      }
  };
  return Object.assign(buttonOperator.basic,buttonOperator[classOperation]);
}

var getActionStyles = function(classOperation){
  var buttonActions= {
      basic:{
        flex: 1,
        borderRadius:10,
        alignItems:'center',
        justifyContent: 'center'
      },
      back:{
        paddingBottom:1,
        borderColor:'#d68086',
        borderWidth:1,
      },
      equal:{
        paddingBottom:1,
        borderColor:"#9ed8a6",
        borderWidth:1
      }
  };
  return Object.assign(buttonActions.basic,buttonActions[classOperation]);
}

var getActionButtonStyles = function(classOperation){
  var buttonText = {
      basic:{
        fontSize:25,
        fontWeight:'200',
      },
      back:{
        paddingBottom:3,
        color:"#d68086",
      },
      equal:{
        paddingBottom:3,
        color:"#9ed8a6"
      }
  };
  return Object.assign(buttonText.basic,buttonText[classOperation]);
}

const styles = StyleSheet.create(assign(
  {},
  CalStyle
));
