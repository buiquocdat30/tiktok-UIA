import PropTypes from 'prop-types';
import Button from '~/component/Button/Button';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
  const classes = cx('menu-item');
  return (
    <Button
      className={
        (classes,
        {
          separate: data.separate,
        })
      }
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
export default MenuItem;
