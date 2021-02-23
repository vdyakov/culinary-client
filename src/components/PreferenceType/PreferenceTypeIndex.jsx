import React from 'react';
import { PropTypes } from 'prop-types';
import CreateButton from '../ui/buttons/CreateButton';
import UserTable from '../ui/table/UserTable';

const PreferenceTypeIndex = (props) => {
  const { preferenceTypes } = props;

  const handleCreateRow = () => {};

  const headCells = [
    { id: 'name', label: 'Наименовение' },
    { id: 'not_suitable_for_vegetarians', label: 'Не подходит для вегетарианцев' },
    { id: 'actions', label: <CreateButton handleClick={handleCreateRow} /> },
  ];

  const handleRemoveItem = (id) => { console.log(id); };

  const handleViewRow = (id) => { console.log(id); };

  const handleEditRow = (id) => { console.log(id); };

  return (
    <UserTable
      rows={preferenceTypes}
      handleCreateRow={handleCreateRow}
      handleRemoveItem={handleRemoveItem}
      handleViewRow={handleViewRow}
      handleEditRow={handleEditRow}
      headCells={headCells}
    />
  );
};

PreferenceTypeIndex.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  preferenceTypes: PropTypes.array.isRequired,
};

PreferenceTypeIndex.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  preferenceTypes: [],
};

export default PreferenceTypeIndex;
