import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { PropTypes } from 'prop-types';

const UserTableHeader = ({ headCells, classes }) => (
  <TableHead className={classes.tableHeader}>
    <TableRow>
      {headCells.map((headCell) => (
        <TableCell
          key={headCell.id}
          align={headCell.id === 'actions' ? 'right' : 'left'}
          padding="default"
        >
          {headCell.label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

UserTableHeader.propTypes = {
  // eslint-disable-next-line react/require-default-props,react/forbid-prop-types
  headCells: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object,
};

UserTableHeader.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  headCells: [],
  classes: {},
};

export default UserTableHeader;
