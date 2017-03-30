'use strict';

import React, { Component } from 'React';

import {
  StyleSheet,
  View,
  Image,
  Text,
  ART,
  ListView,
  ScrollView,
  Dimensions,
  Platform,
  DeviceEventEmitter,
  NativeModules,
  TouchableOpacity
} from 'react-native';

import HttpClientAndroid from '../../interfaces/toast_android';
var HttpClientiOS = NativeModules.HttpClientiOS;
import ListViewStyle from '../../style/listview';
import assign from 'object-assign';
import CouponStyle from '../../style/coupon';
const { Surface,Shape,Path} =ART;
const width=Dimensions.get('window').width-32;
const dashGap=Platform.OS==='ios'?[5,3]:[20,10];

class Mall extends Component {

  props: Props;

  constructor(props: Props) {
    super(props);
    this.state= {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1,row2)=>row1!==row2,
        sectionHeaderHasChanged: (s1,s2)=>s1!==s2,
      })
    }
  }

  render(){
    const path= Path().moveTo(1,1).lineTo(width,1);
    return(
      <ScrollView style={styles.couponScroll}>
        <View style={ styles.container} >
          {/* 订单信息 */}
            <View style={styles.topContainer}>
                <View style={styles.topcontent}>
                  <Image source={require('../../image/coupon_status.png')} style={styles.couponTitleIcon}/>
                  <Text style={styles.couponTitle}>订单信息</Text>
                  <Text style={styles.couponId}>订单号:123456</Text>
                  <Text style={styles.couponStatus}>出票成功</Text>
                </View>
                <View style={styles.dash}>
                  <Surface width={width} height={1}>
                    <Shape d={path} stroke="#efefef" strokeWidth={1} strokeDash={dashGap}/>
                  </Surface>
                </View>
                <View style={styles.topcontentDetails}>
                    <Text style={styles.conponContentTitle}>玩        法:</Text>
                    <Text style={styles.conponContentTitleContent}>猜单场</Text>
                    <View style={styles.stateView}>
                        <Text style={styles.stateTextView}>加奖</Text>
                    </View>
                </View>
                <View style={styles.topcontentDetails}>
                    <Text style={styles.conponContentTitle}>投注倍数:</Text>
                    <Text style={styles.conponContentTitleContent}>20</Text>
                </View>

                <View style={styles.topcontentDetails}>
                    <Text style={styles.conponContentTitle}>过关方式:</Text>
                    <Text style={styles.conponContentTitleContent}>单关配</Text>
                </View>
                <View style={styles.topcontentDetails}>
                    <Text style={styles.conponContentTitle}>购彩时间:</Text>
                    <Text style={styles.conponContentTitleContent}>2016-09-10 19:08:23</Text>
                </View>
            </View>

            {/* 奖金状态 */}
            <View style={styles.topContainer}>
                <View style={styles.topcontent}>
                  <Image source={require('../../image/coupon_status.png')} style={styles.couponTitleIcon}/>
                  <Text style={styles.couponTitle}>奖金状态</Text>
                  <Text style={styles.couponStatusCommon}>已派奖</Text>
                </View>
                <View style={styles.dash}>
                  <Surface width={width} height={1}>
                    <Shape d={path} stroke="#efefef" strokeWidth={1} strokeDash={dashGap}/>
                  </Surface>
                </View>
                <View style={styles.topcontentDetails}>
                    <Text style={styles.conponContentTitle}>订单金额:</Text>
                    <Text style={styles.conponContentTitleContentRed}>¥500</Text>
                </View>
                <View style={styles.topcontentDetails}>
                    <Text style={styles.conponContentTitle}>实际支付金额:</Text>
                    <Text style={styles.conponContentTitleContentRed}>¥500</Text>
                </View>

                <View style={styles.topcontentDetails}>
                    <Text style={styles.conponContentTitle}>中奖金额:</Text>
                    <Text style={styles.conponContentTitleContentRed}>¥2500</Text>
                </View>
            </View>

            {/* 投注内容 */}
            <View style={styles.topContainer}>
                <View style={styles.topcontent}>
                  <Image source={require('../../image/touzhuneirong.png')} style={styles.couponTitleIcon}/>
                  <Text style={styles.couponTitle}>投注内容</Text>
                  {/* <Text style={styles.couponStatusCommon}>已派奖</Text> */}
                </View>
                <View style={styles.dash}>
                  <Surface width={width} height={1}>
                    <Shape d={path} stroke="#efefef" strokeWidth={1} strokeDash={dashGap}/>
                  </Surface>
                </View>
                <ListView
                  renderSeparator={(sectionID, rowID) =>
                      <View key={`${sectionID}-${rowID}`} style={styles.separator} />
                  }
                  style={styles.listView}
                  dataSource={this.state.dataSource}
                  renderRow={this.renderRowData.bind(this)}
                  />
            </View>
        </View>
      </ScrollView>
    );
  }


    componentDidMount(){
      if (Platform.OS==='ios') {
          HttpClientiOS.addTestEvent("Tony",(error, events) => {
            if (error) {
              console.error(error);
            } else {
              console.log("========"+events);
            }
          });
      }else {
        DeviceEventEmitter.addListener('Awesome', function(msg) {
             console.log(msg);
             console.log("=======componentDidMount===msgmsgmsgmsg====="+msg);
             console.log(msg.key);
             console.log("=======componentDidMount===msgmsgmsgmsg====key="+msg.key);
             HttpClientAndroid.show("DeviceEventEmitter收到消息:" + "\n" + msg.key);
         });
         HttpClientAndroid.show('Awesome');
      }
      this.fetchData();
    }

  fetchData(){
    var rowData= [];
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 5; j++) {
        var data={id:5566,num:1115+j,addr:"光明顶b座11室"};
        rowData.push(data);
      }
    }
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(rowData)
    })
  }

    renderRowData(rowData,sectionId,rowId){
      return(
        <TouchableOpacity style={styles.row} onPress={()=>{this._onPress(rowData.id,rowData.num)}}>
            <View style={styles.nameView} >
                <Text style={styles.nameText}>{rowData.num}</Text>
                <View style={styles.stateView}>
                    <Text style={styles.stateTextView}>座</Text>
                </View>
            </View>
            <Text style={styles.addrText}>{rowData.addr}</Text>
        </TouchableOpacity>
      );
    }
    _onPress(id,num){

    }
}


const styles= StyleSheet.create(assign(
  {},
  CouponStyle,
  ListViewStyle
));

module.exports = Mall;
