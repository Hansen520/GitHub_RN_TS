import Types from '../../action/types';

//定义state默认值，注意这里的数据结构取值的时候要保持一致
const defaultState = {
  theme: '#2196f3',
};

function onAction(state = defaultState, action: { type: string, theme: string }) {
  switch (action.type) {
    case Types.THEME_CHANGE:
      return {
        theme: action.theme,
      };
    default:
      return state;
  }
}

export default onAction;
