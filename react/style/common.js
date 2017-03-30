'use strict';

const CommonStyle =  {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
    },
    containerCommon:{
      flex: 1,
      backgroundColor: '#eee'
    },
    welcome : {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    toolbar: {
        height: 40,
        backgroundColor: "#e54847",
        alignItems: 'center',
        flexDirection: 'row',
    },
    toolbarIOS: {
        height: 40,
        backgroundColor: "#e54847",
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:30
    },
    backView:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    backText:{
        color: "#fff"
    },
    title:{
        flex: 1,
        color: "#fff",
        marginRight: 50,
        textAlign: "center",
    },
    logo :{
        width:30,
        height:30,
        marginLeft:10
    },
    containerHome: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    backIcon:{
        borderLeftWidth: 1,
        borderTopWidth: 1,
        height: 12,
        width: 12,
        borderColor: "#fff",
        marginLeft: 20,
        transform: [{ rotate: "-45deg" }]
    },
    containerTabbar:{
      flexDirection: 'column'
    }

};


module.exports = CommonStyle;
