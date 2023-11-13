/*
 * @Date: 2023-11-09 16:07:00
 * @Description: index 页面
 */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import FetchDemoPage from './js/FetchDemoPage';
import AsyncStorageDemoPage from './js/AsyncStorageDemoPage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LoginPage);
