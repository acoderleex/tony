import React, { Component } from 'react';

// class User extends Component {
//
//   props:Props;
//
//   constructor(props:Props) {
//     super(props);
//     this.state = {
//       show:false,
//     };
//   }
//
//   render() {
//        return (
//            <View style={styles.container}>
//                <View style={styles.wrap}>
//                    <TextInput
//                        style={styles.input}
//                        multiline={true}
//                        placeholder="用户名"
//                        />
//                    <TextInput
//                        style={styles.input1}
//                        placeholder="密码"
//                        secureTextEntry={true}
//                        />
//
//                    <TouchableOpacity style={styles.btn} onPress={() => this.sale()}>
//                        <Text style={styles.btnText}>登录</Text>
//                    </TouchableOpacity>
//
//                    <View style={styles.options}>
//                        <Text style={styles.unlogin}>无法登录?</Text>
//                        <Text style={styles.newUser}>新用户</Text>
//                    </View>
//                </View>
//
//                <Modal
//                    animationType='slide'
//                    transparent={true}
//                    visible={this.state.show}
//                    onShow={() => {}}
//                    onRequestClose={() => {}} >
//                    <View style={styles.modalStyle}>
//                      <View style={styles.subView}>
//                        <Text style={styles.titleText}>
//                          提示
//                        </Text>
//                        <Text style={styles.contentText}>
//                          Modal显示的View 多行了超出一行了会怎么显示，就像这样显示了很多内容该怎么显示，看看效果
//                        </Text>
//                        <View style={styles.horizontalLine} />
//                        <View style={styles.buttonView}>
//                          <TouchableHighlight underlayColor='transparent'
//                            style={styles.buttonStyle}
//                            onPress={this._setModalVisible.bind(this)}>
//                            <Text style={styles.buttonText}>
//                              取消
//                            </Text>
//                          </TouchableHighlight>
//                          <View style={styles.verticalLine} />
//                          <TouchableHighlight underlayColor='transparent'
//                            style={styles.buttonStyle}
//                            onPress={this._setModalVisible.bind(this)}>
//                            <Text style={styles.buttonText}>
//                              确定
//                            </Text>
//                          </TouchableHighlight>
//                        </View>
//                      </View>
//                    </View>
//                 </Modal>
//            </View>
//        )
//    }
//    sale(){
//        Alert.alert("提示","没有API,暂无登录功能！");
//        this._setModalVisible();
//    }
//
//    _setModalVisible(){
//      let isShow = this.state.show;
//      this.setState({
//        show:!isShow
//      });
//    }
// }
//
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor: '#eee',
//     },
//
//     wrap: {
//         backgroundColor: "#eee",
//         flex: 1,
//         marginTop:30,
//     },
//     qq: {
//         width: 80,
//         height: 80,
//         alignSelf: 'center',
//         marginTop: 40,
//         borderRadius: 40,
//         marginBottom: 20
//     },
//     input: {
//         height: 40,
//         borderWidth: 0,
//         backgroundColor: '#fff',
//         marginTop: 2,
//         textAlign: 'center'
//     },
//     input1: {
//         height: 40,
//         borderWidth: 0,
//         backgroundColor: '#fff',
//         marginTop: 1,
//         textAlign: 'center'
//     },
//     btn: {
//         backgroundColor: "#df2d2d",
//         height: 40,
//         borderRadius: 4,
//         marginLeft:10,
//         marginRight:10,
//         marginTop:30,
//         justifyContent: 'center',
//     },
//     btnText: {
//         textAlign: 'center',
//         color: '#fff'
//     },
//     options: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'flex-end',
//         marginTop:30
//
//     },
//     unlogin: {
//         color: '#63B8FF',
//         marginLeft: 10
//     },
//     newUser: {
//         flex: 1,
//         alignItems: 'flex-end',
//         flexDirection: 'row',
//         textAlign: 'right',
//         marginRight: 10,
//         color: '#63B8FF'
//     },
//       // modal的样式
//     modalStyle: {
//       // backgroundColor:'#ccc',
//       alignItems: 'center',
//       justifyContent:'center',
//       flex:1,
//     },
//     // modal上子View的样式
//     subView:{
//       marginLeft:60,
//       marginRight:60,
//       backgroundColor:'#fff',
//       alignSelf: 'stretch',
//       justifyContent:'center',
//       borderRadius: 10,
//       borderWidth: 0.5,
//       borderColor:'#ccc',
//     },
//     // 标题
//     titleText:{
//       marginTop:10,
//       marginBottom:5,
//       fontSize:16,
//       fontWeight:'bold',
//       textAlign:'center',
//     },
//     // 内容
//     contentText:{
//       margin:8,
//       fontSize:14,
//       textAlign:'center',
//     },
//     // 水平的分割线
//     horizontalLine:{
//       marginTop:5,
//       height:0.5,
//       backgroundColor:'#ccc',
//     },
//     // 按钮
//     buttonView:{
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     buttonStyle:{
//       flex:1,
//       height:44,
//       alignItems: 'center',
//       justifyContent:'center',
//     },
//     // 竖直的分割线
//     verticalLine:{
//       width:0.5,
//       height:44,
//       backgroundColor:'#ccc',
//     },
//
// })

import Render from '../cal/apprender';

class User extends Component {
  render(){
    return Render.call(this,this.props,this.state);
  }
}

module.exports = User;
