import React, { useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../../components/Navigation/Navigation';
import Copyright from '../../components/Copyright/Copyright';
import { getList } from '../../actions/recipeActions';
import RecipeIndex from '../../components/recipe/RecipeIndex';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

// eslint-disable-next-line no-unused-vars
export default function RecipesContainer() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.token);
  const fetching = useSelector((state) => state.recipes.fetching);
  const recipes = useSelector((state) => state.recipes.recipes);

  useEffect(() => {
    if (token && !fetching) dispatch(getList(token));
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation title="Рецепты" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <h1>Рецепты</h1>
          <RecipeIndex recipes={recipes} />
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
