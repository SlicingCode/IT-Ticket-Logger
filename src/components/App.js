import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import Alert from '@material-ui/lab/Alert';
import Logitem from './Logitem';
import AddLogItem from './AddLogItem';
import { ipcRenderer } from 'electron';

import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../styles/MainStyles';

function App(props) {
  const { classes } = props;
  const [logs, setLogs] = useState([]);

  const [alert, setAlert] = useState({
    show: false,
    message: '',
    severity: 'success',
  });

  useEffect(() => {
    ipcRenderer.send('logs:load');

    ipcRenderer.on('logs:get', (e, logs) => {
      setLogs(JSON.parse(logs));
    });

    ipcRenderer.on('logs:clear', () => {
      setLogs([]);
      showAlert('Logs Cleared');
    });
  }, []);

  const addItem = item => {
    if (item.text === '' || item.user === '' || item.priority === '') {
      showAlert('All fields must be completed', 'error');
      return false;
    }

    ipcRenderer.send('logs:add', item);

    showAlert('Issue Added');
  };

  const deleteItem = _id => {
    ipcRenderer.send('logs:delete', _id);
    showAlert('Issue Deleted', 'info');
  };

  const showAlert = (message, severity = 'success', seconds = 3000) => {
    setAlert({
      show: true,
      message,
      severity,
    });

    setTimeout(() => {
      setAlert({
        show: false,
        message: '',
        severity: 'success',
      });
    }, seconds);
  };

  return (
    <Container>
      <AddLogItem addItem={addItem} />
      {alert.show && (
        <Alert severity={alert.severity} className={classes.alert}>
          {alert.message}
        </Alert>
      )}
      <TableContainer component={Card} className={classes.tableContainer}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell className={classes.font}>Priority</TableCell>
              <TableCell className={classes.font}>Issue</TableCell>
              <TableCell className={classes.font}>User</TableCell>
              <TableCell className={classes.font}>Created</TableCell>
              <TableCell className={classes.font}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.map(log => (
              <Logitem key={log._id} log={log} deleteItem={deleteItem} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default withStyles(styles)(App);
