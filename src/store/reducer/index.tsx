/*
 * @Date: 2023-12-08 11:15:49
 * @Description: description
 */
import React from 'react';
import { combineReducers } from 'redux';
import theme from './theme';
import popular from './popular'

const index = combineReducers({
  theme: theme,
  popular: popular
})
export default index;
