import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../styles/MainStyles';

const AddLogItem = props => {
  const { classes } = props;
  const [text, setText] = useState('');
  const [user, setUser] = useState('');
  const [priority, setPriority] = useState('');

  return (
    <Card className={classes.card}>
      <CardContent>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(AddLogItem);
