import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { publicRoutes } from '~/routes/routes';
import DefaultLayout from '~/layouts';
function App() {
  return (
    <Router>
      <div style={{ padding: 32 }}>
        <Routes>
          {publicRoutes.map((route, index) => {
            //mặc định Layout = DefaultLayout
            const Page = route.component;
            let Layout = DefaultLayout;
            //nếu layout trong route là null thì trả về Fragment còn ko trả về layout trong route

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

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
