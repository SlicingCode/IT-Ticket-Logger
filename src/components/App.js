import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import Logitem from './Logitem';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from '../styles/MainStyles';

function App(props) {
  const { classes } = props;
  const [logs, setLogs] = useState([
    {
      _id: 1,
      text: 'This is log one',
      priority: 'low',
      user: 'Brad',
      created: new Date().toString(),
    },
    {
      _id: 2,
      text: 'This is log two',
      priority: 'moderate',
      user: 'Kate',
      created: new Date().toString(),
    },
    {
      _id: 3,
      text: 'This is log three',
      priority: 'high',
      user: 'John',
      created: new Date().toString(),
    },
  ]);
  return (
    <Container>
      <TableContainer component={Card}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Priority</TableCell>
              <TableCell>Log Text</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Created</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.map(log => (
              <Logitem key={log._id} log={log} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default withStyles(styles)(App);
