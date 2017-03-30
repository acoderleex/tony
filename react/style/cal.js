'use strict';
var Platform = require('Platform');

const CalStyle = {
  container:{
    flex:1,
  },
  screen:{
    flex: 3,
    flexDirection: 'row',
    alignItems:Platform.OS==='android'? 'center': 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#68cef2',
    padding: 18,
  },
  screenNative:{
      color:"#190d08",
      fontSize: 70,
      fontWeight: '200',
  },
  formulae:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: '#4c4c4c',
      padding: 20
  },
  formulaeNative:{
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center'
  },
  keyboard:{
    height: Platform.OS==='ios'? 420:370
  },
  keyboardNative:{
    flex:1,
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  text:{
    fontSize: 18
  },
  keyNumber:{
    flex:1,
    borderColor:"#f8f8f8",
    borderWidth: 1
  },
  keyOperator:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  },
  keyActionStyle:{
    flex:1,
    padding:10
  },
  button:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
  },
  textButton:{
    color:'#919191',
    fontSize: 20,
    fontWeight:'400'
  },
  textButtonOperator: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  },
  keyAction:{
    flex:1,
    padding: 10
  },
  keyActionButton:{
    flex:1
  }
};

module.exports = CalStyle;
