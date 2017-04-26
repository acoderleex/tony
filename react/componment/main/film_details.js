'use strict';
import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View} from 'react-native';

import ToolBar, {ToolbarFilm} from '../../views/toolbar';
import assign from 'object-assign';
import CommonStyle from '../../style/common';

var id,
    name,
    data;

var date = new Date();
var month = date.getMonth() + 1;
month = month < 10
    ? "0" + month
    : month;
var initialDate = date.getFullYear() + "-" + month + "-" + date.getDate();

class FilmDetails extends Component {
    props : Props;
    constructor(props : Props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            data: null,
            isLoading: false,
            date: initialDate
        }
        console.log(name + "==PASS DATA===" + id);
    }

    render() {
        return (
            <View style={styles.containerHome}>
                <ToolBar {...this.props} navigator={this.props.navigator}/>
                <Text style={styles.welcome}>{translate('Header.update_state')}   {this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create(assign({}, CommonStyle));

module.exports = FilmDetails;
