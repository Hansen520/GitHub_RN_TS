/*
 * @Date: 2023-11-13 17:37:48
 * @Description: description
 */
import React, { Component } from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';
export default class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MyPage</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})