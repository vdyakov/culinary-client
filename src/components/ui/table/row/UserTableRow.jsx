import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import PropTypes from 'prop-types';
import ViewButton from '../../buttons/ViewButton';
import EditButton from '../../buttons/EditButton';
import DeleteButton from '../../buttons/DeleteButton';

const ActionsGroup = ({ handleRemoveItem, handleEditRow, handleViewRow }) => {
  const handleView = (e) => {
    const { id } = e.currentTarget.closest('tr').dataset;
    handleViewRow(id);
  };

  const handleEdit = (e) => {
    const { id } = e.currentTarget.closest('tr').dataset;
    handleEditRow(id);
  };

  const handleRemove = (e) => {
    const question = 'Вы уверены, что хотите удалить этот элемент?';

    if (window.confirm(question)) {
      const { id } = e.currentTarget.closest('tr').dataset;
      handleRemoveItem(id);
    }
  };
  return (
    <>
      <ViewButton handleClick={handleView} />
      <EditButton handleClick={handleEdit} />
      <DeleteButton handleClick={handleRemove} />
    </>
  );
};

const getColumnValue = (value) => {
  if (typeof value === 'boolean') {
    return value ? 'Да' : 'Нет';
  }

  return value || null;
};

const UserTableRow = ({
  row, handleRemoveItem, handleEditRow, handleViewRow, headCells
}) => (
  <TableRow
    hover
    data-id={row.id}
  >
    {
      headCells.map((cell) => (cell.id !== 'actions'
      // eslint-disable-next-line valid-typeof
        ? <TableCell key={`table_cell_${row.id}_${cell.id}`} align="left">{getColumnValue(row[cell.id])}</TableCell>
        : null
      ))
    }
    <TableCell align="right">
      <ActionsGroup
        handleRemoveItem={handleRemoveItem}
        handleEditRow={handleEditRow}
        handleViewRow={handleViewRow}
      />
    </TableCell>
  </TableRow>
);

ActionsGroup.propTypes = {
  handleRemoveItem: PropTypes.func,
  handleViewRow: PropTypes.func,
  handleEditRow: PropTypes.func,
};

ActionsGroup.defaultProps = {
  handleRemoveItem: () => {},
  handleViewRow: () => {},
  handleEditRow: () => {},
};

UserTableRow.propTypes = {
  // eslint-disable-next-line react/require-default-props,react/forbid-prop-types
  row: PropTypes.object.isRequired,
  // eslint-disable-next-line react/require-default-props,react/forbid-prop-types
  headCells: PropTypes.array.isRequired,
  handleRemoveItem: PropTypes.func,
  handleViewRow: PropTypes.func,
  handleEditRow: PropTypes.func,
};

UserTableRow.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  row: {},
  // eslint-disable-next-line react/default-props-match-prop-types
  headCells: [],
  handleRemoveItem: () => {},
  handleViewRow: () => {},
  handleEditRow: () => {},
};

export default UserTableRow;
