/*
 * @Date: 2023-11-13 17:38:39
 * @Description: description
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {tabNav} from '../navigator/NavigationDelegate';
import keys from '../data/keys.json';
import NavigationBar from 'react-native-navbar-plus';
import {connect} from 'react-redux';
import actions from '../store/action';
import {onThemeChange} from '../store/action/theme';
export default class Index extends Component {
  render() {
    let navigationBar = <NavigationBar title={'最热门'} />;
    const TabNavigator = keys.length
      ? tabNav({
          Component: PopularTabContainer,
          theme: {themeColor: '#2196f3'},
          keys,
        })
      : null;
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
    const {tabLabel} = this.props;
    return (
      <Button
        title="改变主题颜色1"
        onPress={() => {
          this.props.onThemeChange('#ff' + Math.floor(Math.random() * 10000));
        }}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(actions.onThemeChange(theme)),
});

const PopularTabContainer = connect(null, mapDispatchToProps)(PopularTab);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
