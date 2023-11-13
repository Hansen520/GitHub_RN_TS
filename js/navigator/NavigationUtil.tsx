import {StackActions} from '@react-navigation/native';

/**
 * 全局导航跳转工具类 by CrazyCodeBoy
 */
export default class NavigationUtil {
  /**
   * 跳转到指定页面
   * @param {*} parmas 要传递的参数
   * @param {*} page 要跳转的页面名
   */
  static goPage(params: any, page: any) {
    const navigation = (NavigationUtil as any).navigation || (params || {}).navigation;
    if (!navigation) {
      console.log('NavigationUtil.navigation can not be null');
      return;
    }
    navigation.navigation(page, {
        ...params,
        navigation: undefined
    })
  }
}
