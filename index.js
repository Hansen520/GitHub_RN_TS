/*
 * @Date: 2023-11-09 16:07:00
 * @Description: index 页面
 */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import FetchDemoPage from './src/FetchDemoPage';
import AsyncStorageDemoPage from './src/AsyncStorageDemoPage';
import LoginPage from './src/page/LoginPage';
import RegisterPage from './src/page/RegisterPage';
import {name as appName} from './app.json';
import AppNavigators from './src/navigator/AppNavigators';
import NavigationDemoPage from './src/page/NavigationDemoPage';
import HomePage from './src/page/HomePage';


AppRegistry.registerComponent(appName, () => AppNavigators);
