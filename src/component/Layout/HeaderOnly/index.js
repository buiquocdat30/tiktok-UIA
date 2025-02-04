import Header from '~/component/Layout/components/Header';

function HeaderOnly({ children }) {
  return (
    <div>
      {/* Header là tĩnh */}
      <Header />
      <div className="container">
        {/* chỉ có children là động do được truyền vào */}
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
