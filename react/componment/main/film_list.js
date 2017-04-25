'use strict';

import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  ListView,
  View,
  TouchableOpacity
} from 'react-native';

import FilmDetails from './film_details';

import assign from 'object-assign';
import CommonStyle from '../../style/common';
import ListViewStyle from '../../style/listview';

import ToolBar , { ToolbarFilm } from '../../views/toolbar';

class FilmList extends Component {
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

  componentDidMount(){
    this.fetchData();
  }

  render(){
      return(
        <View style={ styles.containerHome}>
              <ToolbarFilm />
              <Text style={ styles.welcome }> 首页 </Text>
              <ListView
                style={styles.listView}
                dataSource={this.state.dataSource}
                renderRow={this.renderRowData.bind(this)}
                renderSectionHeader={this.renderHeader}
                />
        </View>
      );
  }

  renderRowData(rowData,sectionId,rowId){
    // console.log(rowId+"====renderRowDatarenderRowDatarenderRowDatarenderRowData===="+sectionId);
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

  renderHeader(sectionData,sectionId){
    return(
      <View style={styles.header}>
          <Text style={styles.headerText}>{sectionId+"   Test"}</Text>
      </View>
    );
  }

  _onPress(id,num){
    this.props.navigator.push({
        name: 'film_details',
        component:FilmDetails,
        params: {
          id: id,
          name: num
        }
    });
  }
  fetchData(){
    var sectionData=[];
    for (var i = 0; i < 3; i++) {
      var rowData= [];
      for (var j = 0; j < 5; j++) {
        var data={id:5566,num:1115+j,addr:"光明顶b座11室"};
        rowData.push(data);
      }
      sectionData.push(rowData);
    }
    this.setState({
      dataSource: this.state.dataSource.cloneWithRowsAndSections(sectionData)
    })
  }
}

const styles = StyleSheet.create(assign(
  {},
  CommonStyle,
  ListViewStyle
));

module.exports = FilmList;
