/*
 * @Date: 2023-12-08 17:58:35
 * @Description: description
 */
import { onThemeChange } from './theme';
import { onRefreshPopular, onLoadMorePopular } from './popular/index';
import { onRefreshTrending, onLoadMoreTrending } from './trending/index';
/*
* action聚合
*/
export default {
  onThemeChange,
  onRefreshPopular,
  onLoadMorePopular,
  onRefreshTrending,
  onLoadMoreTrending
};
