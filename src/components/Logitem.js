import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import { green, yellow, red } from '@material-ui/core/colors';

const Logitem = ({ log: { _id, priority, user, text, created } }) => {
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
        <Chip
          label={priority}
          style={{
            backgroundColor: colorForStatus(priority)[700],
            color: 'white',
            width: '100px',
          }}
        ></Chip>
      </TableCell>
      <TableCell>{text}</TableCell>
      <TableCell>{user}</TableCell>
      <TableCell>{created}</TableCell>
      <TableCell>
        <IconButton aria-label='delete' color='secondary'>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default Logitem;
