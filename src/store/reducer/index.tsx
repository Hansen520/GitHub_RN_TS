/*
 * @Date: 2023-12-08 11:15:49
 * @Description: description
 */
import React from 'react';
import { combineReducers } from 'redux';
import theme from './theme';

const index = combineReducers({
  theme: theme
})
export default index;
