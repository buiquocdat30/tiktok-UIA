import routesConfig from '~/config/routes';

//Layouts
import { HeaderOnly } from '~/component/Layout/';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Update from '~/pages/Update';
import Search from '~/pages/Search';

//ko cần đăng nhập vẫn xem được
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  //bỏ @do trùng bên kia
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.update, component: Update, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
];

//phải đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
