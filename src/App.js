import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/component/Layout';
function App() {
  return (
    <Router>
      <div style={{ padding: 32 }}>
        <Routes>
          {publicRoutes.map((route, index) => {
            //mặc định Layout = DefaultLayout

            let Layout = DefaultLayout;
            //nếu layout trong route là null thì trả về Fragment còn ko trả về layout trong route

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  // Do layout đã ôm Page nên phần page đã trở thành children của Layout
                  //các phần trong Layout là tĩnh chỉ có page có thể đổi
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
