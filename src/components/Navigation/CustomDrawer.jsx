import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { PropTypes } from 'prop-types';
import { Divider } from '@material-ui/core';
import { ListItems, AfterItems } from './ListItems';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  fixedHeight: {
    height: 240,
  },
}));

const CustomDrawer = (props) => {
  const classes = useStyles();
  const { handleDrawer, logoutHandler, drawerOpen } = props;

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <Drawer
      variant="permanent"
      classes={{
        // eslint-disable-next-line no-tabs,no-mixed-spaces-and-tabs
			  paper: clsx(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose),
      }}
      open={drawerOpen}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <ListItems />
      <Divider />
      <AfterItems logoutHandler={logoutHandler} />
    </Drawer>
  );
};

CustomDrawer.propTypes = {
  handleDrawer: PropTypes.func,
  logoutHandler: PropTypes.func,
  drawerOpen: PropTypes.bool,
};

CustomDrawer.defaultProps = {
  drawerOpen: true,
  handleDrawer: () => {},
  logoutHandler: () => {},
};

export default CustomDrawer;
