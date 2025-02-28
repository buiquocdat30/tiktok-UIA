//Layouts
import { HeaderOnly } from '~/component/Layout/';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Update from '~/pages/Update';
import Search from '~/pages/Search';

//ko cần đăng nhập vẫn xem được
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  //bỏ @do trùng bên kia
  { path: '/:nickname', component: Profile },
  { path: '/update', component: Update, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

//phải đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
