import React from 'react';
import {
  ListItem, ListItemIcon, ListItemText, Tooltip
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import BookIcon from '@material-ui/icons/Book';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { PropTypes } from 'prop-types';
import ListItemLink from '../ui/ListItemLink/ListItemLink';

export const ListItems = () => (
  <div>
    <ListItemLink icon={<HomeIcon />} primary="Главная" to="/home" />
    <ListItemLink icon={<BookIcon />} primary="Рецепты" to="/recipes" />
    <ListItemLink icon={<BookmarkIcon />} primary="Типы предпочтений" to="/preference-types" />
    <ListItemLink icon={<PeopleAltIcon />} primary="Пользователи ИС" to="/users" />
    <ListItemLink icon={<PeopleAltIcon />} primary="Пользователи бота" to="/bot-users" />
  </div>
);

export const AfterItems = (props) => {
  const { logoutHandler } = props;

  return (
    <div>
      <Tooltip title="Выйти">
        <ListItem button onClick={logoutHandler}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Выйти" />
        </ListItem>
      </Tooltip>
    </div>
  );
};

AfterItems.propTypes = {
  logoutHandler: PropTypes.func,
};

AfterItems.defaultProps = {
  logoutHandler: () => {},
};
