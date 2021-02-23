import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import CustomAppBar from './CustomAppBar';
import CustomDrawer from './CustomDrawer';
import { logoutAction } from '../../actions/authActions';

const Navigation = (props) => {
  const paramFromLocalStorage = JSON.parse(window.localStorage.getItem('drawerOpen') || 'true');

  const [open, setOpen] = React.useState(paramFromLocalStorage);

  const dispatch = useDispatch();

  const { title = 'Home' } = props;

  const handleDrawer = () => setOpen(!open);

  useEffect(() => {
    window.localStorage.setItem('drawerOpen', JSON.stringify(open));
  }, [open]);

  const logoutHandler = () => dispatch(logoutAction());

  return (
    <>
      <CustomAppBar
        handleDrawer={handleDrawer}
        title={title}
        drawerOpen={open}
        logoutHandler={logoutHandler}
      />
      <CustomDrawer
        handleDrawer={handleDrawer}
        drawerOpen={open}
        logoutHandler={logoutHandler}
      />
    </>
  );
};

Navigation.propTypes = {
  title: PropTypes.string,
};

Navigation.defaultProps = {
  title: '',
};

export default Navigation;
