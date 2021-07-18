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
import AddLogItem from './AddLogItem';

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

  const addItem = item => {
    item._id = Math.floor(Math.random() * 90000) + 10000;
    item.created = new Date().toString();
    // take everything from existings logs and add new items
    setLogs([...logs, item]);
  };

  return (
    <Container>
      <AddLogItem addItem={addItem} />
      <TableContainer component={Card}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell className={classes.font}>Priority</TableCell>
              <TableCell className={classes.font}>Log Text</TableCell>
              <TableCell className={classes.font}>User</TableCell>
              <TableCell className={classes.font}>Created</TableCell>
              <TableCell className={classes.font}></TableCell>
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
