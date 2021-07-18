import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../styles/MainStyles';

const AddLogItem = props => {
  const { classes, addItem } = props;

  const [text, setText] = useState('');
  const [user, setUser] = useState('');
  const [priority, setPriority] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    addItem({ text, user, priority });

    setText('');
    setUser('');
    setPriority('');
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <form onSubmit={onSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                value={text}
                placeholder='Log'
                fullWidth
                variant='outlined'
                onChange={e => setText(e.target.value)}
              />
            </Grid>
            <Grid item xs>
              <TextField
                value={user}
                placeholder='User'
                variant='outlined'
                fullWidth
                onChange={e => setUser(e.target.value)}
              />
            </Grid>
            <Grid item xs>
              <FormControl className={classes.formControl}>
                <Select
                  value={priority}
                  variant='outlined'
                  fullWidth
                  displayEmpty
                  onChange={e => setPriority(e.target.value)}
                >
                  <MenuItem value=''>Select Priority</MenuItem>
                  <MenuItem value='low'>Low</MenuItem>
                  <MenuItem value='moderate'>Moderate</MenuItem>
                  <MenuItem value='high'>High</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                type='submit'
                variant='contained'
                disableElevation
                fullWidth
              >
                Submit Ticket
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(AddLogItem);
