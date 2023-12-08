/*
 * @Date: 2023-11-13 17:38:39
 * @Description: description
 */
import React, { Component } from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';
import { tabNav } from '../js/navigator/NavigationDelegate';
import keys from '../js/res/data/keys.json';
import NavigationBar from 'react-native-navbar-plus';
export default class Index extends Component {
    render() {
        let navigationBar = <NavigationBar
            title={'最热门'}
        />
        const TabNavigator = keys.length ?
            tabNav({ Component: PopularTab, theme: { themeColor: '#2196f3' }, keys }) : null;
        return (
            <View style={styles.container}>
                {navigationBar}
                {TabNavigator}
            </View>
        );
    }
}
class PopularTab extends Component {
    
    render() {
        const { tabLabel } = this.props;
        console.log(tabLabel, 27);
        return (<Text>{tabLabel}</Text>)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})