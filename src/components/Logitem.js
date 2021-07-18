import React from 'react';
import Moment from 'react-moment';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import { green, yellow, red } from '@material-ui/core/colors';

const Logitem = ({ log: { _id, priority, user, text, created } }) => {
  // set color of priority chips
  const colorForStatus = priority => {
    switch (priority) {
      case 'high':
        return red;
      case 'moderate':
        return yellow;
      default:
        return green;
    }
  };

  return (
    <TableRow>
      <TableCell>
        {/* Priority chip */}
        <Chip
          label={priority.charAt(0).toUpperCase() + priority.slice(1)}
          style={{
            backgroundColor: colorForStatus(priority)[700],
            color: 'white',
            width: '100px',
          }}
        ></Chip>
      </TableCell>
      <TableCell>{text}</TableCell>
      <TableCell>{user}</TableCell>
      <TableCell>
        <Moment format='MMM Do YYYY, h:mm:ss a'>{new Date(created)}</Moment>
      </TableCell>
      <TableCell>
        <IconButton aria-label='delete' color='secondary'>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default Logitem;
