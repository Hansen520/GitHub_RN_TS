/*
 * @Date: 2023-11-13 17:41:22
 * @Description: description
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../../page/LoginPage';
import RegistrationPage from '../../page/RegisterPage';
import HomePage from '../../page/HomePage';
import WebViewPage from '../../page/WebViewPage';
import DetailPage from '../../page/DetailPage';
import SortKeyPage from '../../page/SortKeyPage';
import SearchPage from '../../page/SearchPage';
import CustomKeyPage from '../../page/CustomKeyPage';
import WelcomePage from '../../page/WelcomePage';
import AboutPage from '../../page/about/AboutPage';
import AboutMePage from '../../page/about/AboutMePage';
import CodePushPage from '../../page/CodePushPage';

const Stack = createNativeStackNavigator();
//在这里配置除Tab页以外的页面
export default function App() {
    return (<NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="WelcomePage"
                component={WelcomePage}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>)
}