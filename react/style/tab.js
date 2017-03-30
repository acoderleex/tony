'use strict';
// var Dimensions = require('Dimensions');
// var Platform = require('Platform');

const TabStyle = {
  container: {
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    flex: 1,
    backgroundColor: '#eee'
  },
  tabs:{
      position: 'relative',
      // top: (Platform.OS === 'ios'? Dimensions.get('window').height-40 : Dimensions.get('window').height-40-24),
      flexDirection:"row",
      height: 40,
  },

  tabNav: {
    flex : 1,
    backgroundColor: '#fff',
  },
  item : {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image : {
    width: 20,
    height: 20,
    marginTop: 5,
  },
  title : {
    fontSize: 12,
  },
};

module.exports = TabStyle;
