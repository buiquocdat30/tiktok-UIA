import Header from '~/component/Layout/components/Header';
import Sidebar from '~/component/Layout/components/Sidebar';

function DefaultLayout({ children }) {
  return (
    <div>
      {/* Header là tĩnh */}
      <Header />
      <div className="container">
        {/* Sidebar cũng tĩnh */}
        <Sidebar />
        {/* chỉ có children là động do được truyền vào */}
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
