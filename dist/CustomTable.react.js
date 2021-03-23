import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import './custom-table.css';

const CustomTable = (props) => {
  const { columns, rows } = props;

  return (
    <TableContainer component={Paper}>
      <Table>

        <TableHead>
          <TableRow>
            {
              columns.map((col, i) =>
                <TableCell key={i}>{col}</TableCell>
              )
            }
          </TableRow>
        </TableHead>

        <TableBody>
          {
            rows.map((row, i) => (
              <TableRow key={i}>
                {
                  row.map((cell, i2) =>
                    <TableCell key={i2}>{cell}</TableCell>
                  )
                }
              </TableRow>
            ))
          }
        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default CustomTable;