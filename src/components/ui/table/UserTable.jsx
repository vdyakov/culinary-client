import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { TablePagination } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import UserTableRow from './row/UserTableRow';
import UserTableHeader from './header/UserTableHeader';
import NoDataRow from './row/NoDataRow';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  tableHeader: {
    '& th': {
      fontWeight: 'bold'
    }
  },
}));

const UserTable = (props) => {
  const classes = useStyles();

  // eslint-disable-next-line no-empty-pattern
  const {
    rows, handleRemoveItem, handleViewRow, handleEditRow, headCells
  } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper className={classes.paper}>
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          size="medium"
        >
          <UserTableHeader classes={classes} headCells={headCells} />
          <TableBody>
            {
              rows && rows.length
                ? rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow
                      key={`user_table_row_${row.id}`}
                      row={row}
                      headCells={headCells}
                      handleRemoveItem={handleRemoveItem}
                      handleViewRow={handleViewRow}
                      handleEditRow={handleEditRow}
                    />
                  ))
                : <NoDataRow />
            }
          </TableBody>
        </Table>
      </TableContainer>
      {
        rows && rows.length
          ? (
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          )
          : null
      }
    </Paper>
  );
};

UserTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  rows: PropTypes.array.isRequired,
  handleRemoveItem: PropTypes.func,
  handleViewRow: PropTypes.func,
  handleEditRow: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  headCells: PropTypes.array.isRequired,
};

UserTable.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  rows: [],
  handleRemoveItem: () => {},
  handleViewRow: () => {},
  handleEditRow: () => {},
  // eslint-disable-next-line react/default-props-match-prop-types
  headCells: [],
};

export default UserTable;
