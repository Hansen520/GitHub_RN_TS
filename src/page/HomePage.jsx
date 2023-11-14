/*
 * @Date: 2023-11-13 17:36:56
 * @Description: description
 */
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import NavigationUtil from '../js/navigator/NavigationUtil';
import DynamicTabNavigator from '../js/navigator/DynamicTabNavigator';
import SafeAreaViewPlus from 'react-native-safe-area-plus';

export default class Index extends Component {
    render() {
        //方便其他页面跳转的时候不传navigation
        NavigationUtil.navigation = this.props.navigation;
        return <SafeAreaViewPlus topColor="#21c9f3">
            <DynamicTabNavigator />
        </SafeAreaViewPlus>


    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: 100
    }
});