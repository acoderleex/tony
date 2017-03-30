'use strict';

const ListViewStyle = {
    listView: {
      flex: 1
    },
    row:{
      // borderColor:'#ddd',
      // borderTopWidth: 1,
      padding: 15,
    },
    nameView:{
      flexDirection:"row",
    },
    nameText:{
      fontSize:17,
      color:'#000',
    },
    stateView:{
      marginLeft:5,
      backgroundColor:"#d92d2d",
      borderRadius:2,
      width: 20,
      padding:2,
      alignSelf:'center'
    },
    stateTextView:{
      color:"#fff",
      textAlign:'center',
      fontSize: 8
    },
    addrText:{
      color:'#999',
      marginTop: 10
    },
    header:{
      height: 40,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems:'center',
      paddingLeft: 20,
    },
    headerText:{
      fontSize: 16
    },
    separator: {
       height: -1,
       backgroundColor: "#00000000",
     }
};

module.exports = ListViewStyle;
