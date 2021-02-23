import React, { Suspense } from 'react';
import { CircularProgress } from '@material-ui/core';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import OnlyRoute from './components/OnlyRouter/OnlyRouter';
import Auth from './containers/AuthContainer';
import Home from './containers/HomeContainer';
import Recipes from './containers/RecipesContainer';
import PreferenceTypes from './containers/PreferenceTypesContainer';
import BotUsers from './containers/BotUsersContainer';
import Users from './containers/UsersContainer';
import { setTokenFromLocalStorage } from './actions/authActions';

const App = () => {
  const dispatch = useDispatch();

  dispatch(setTokenFromLocalStorage());

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <BrowserRouter>
        <Suspense fallback={<CircularProgress color="secondary" />}>
          <Switch>
            <OnlyRoute path="/login" exact component={Auth} />
            <OnlyRoute path="/home" exact component={Home} />
            <OnlyRoute path="/recipes" component={Recipes} />
            <OnlyRoute path="/preference-types" component={PreferenceTypes} />
            <OnlyRoute path="/bot-users" component={BotUsers} />
            <OnlyRoute path="/users" component={Users} />
            <OnlyRoute component={Auth} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
