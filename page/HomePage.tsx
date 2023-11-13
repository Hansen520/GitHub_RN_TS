/*
 * @Date: 2023-11-13 17:36:56
 * @Description: description
 */
import React, { useState } from "react"
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default (props: any) => {
    return (<SafeAreaView style={styles.root}>SafeAreaView</SafeAreaView>)
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    }
});