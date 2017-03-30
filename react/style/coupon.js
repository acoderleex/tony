'use strict';

var Image = require('Image');
var Dimensions=require('Dimensions');

const CouponStyle = {
    container: {
      flex: 1,
    },
    topContainer:{
      marginTop: 10,
      paddingTop:17,
      paddingBottom:10,
      paddingLeft:17,
      paddingRight:17,
      backgroundColor:"#fff",
    },
    dash:{
      alignItems:'center',
      marginTop:10,
      marginBottom:5,
    },
    topcontent:{
      alignItems:'center',
      flexDirection: 'row',
    },
    topcontentDetails:{
      paddingTop: 10,
      paddingBottom:10,
      alignItems:'center',
      flexDirection: 'row',
    },
    couponTitle:{
      fontSize: 15,
      marginLeft:5,
      color: '#666666',
    },
    couponTitleIcon:{
      width:14,
      height:15,
    },
    couponId:{
      position:'absolute',
      right:60,
      fontSize: 12,
      color:'#999999',
    },
    couponStatus:{
      position:'absolute',
      right:0,
      fontSize: 12,
      color:'#00a565',
    },

    couponStatusCommon:{
      position:'absolute',
      right:0,
      fontSize: 12,
      color:'#333333',
    },
    conponContentTitle:{
      fontSize: 14,
      color:'#999999',
    },
    conponContentTitleContent:{
      fontSize: 14,
      paddingLeft: 10,
      color:'#333333',
    },
    conponContentTitleContentRed:{
      fontSize: 14,
      paddingLeft: 10,
      color:'#e82c2c',
    },
    couponScroll: {
      flex: 1,
      marginBottom:10,
      backgroundColor:"#eee",
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
};
module.exports = CouponStyle;
