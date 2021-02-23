import React from 'react';
import { PropTypes } from 'prop-types';
import CreateButton from '../ui/buttons/CreateButton';
import UserTable from '../ui/table/UserTable';

const RecipeIndex = (props) => {
  const { recipes } = props;

  const customRecipes = recipes.map((recipe) => ({
    id: recipe.id,
    name: recipe.name,
    description: recipe.description,
    recipe: recipe.recipe,
    not_suitable_for_vegetarians: recipe.not_suitable_for_vegetarians,
    tags: recipe.tags.map((tag) => tag.name).join(', '),
  }));

  const handleCreateRow = () => {};

  const headCells = [
    { id: 'name', label: 'Наименовение' },
    { id: 'description', label: 'Описание' },
    { id: 'recipe', label: 'Рецепт' },
    { id: 'not_suitable_for_vegetarians', label: 'Не подходит для вегетарианцев' },
    { id: 'tags', label: 'Тэги' },
    { id: 'actions', label: <CreateButton handleClick={handleCreateRow} /> },
  ];

  const handleRemoveItem = (id) => { console.log(id); };

  const handleViewRow = (id) => { console.log(id); };

  const handleEditRow = (id) => { console.log(id); };

  return (
    <UserTable
      rows={customRecipes}
      handleCreateRow={handleCreateRow}
      handleRemoveItem={handleRemoveItem}
      handleViewRow={handleViewRow}
      handleEditRow={handleEditRow}
      headCells={headCells}
    />
  );
};

RecipeIndex.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  recipes: PropTypes.array.isRequired,
};

RecipeIndex.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  recipes: [],
};

export default RecipeIndex;
