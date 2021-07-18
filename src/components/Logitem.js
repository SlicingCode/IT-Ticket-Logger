import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

const Logitem = ({ log: { _id, priority, user, text, created } }) => {
  return (
    <TableRow>
      <TableCell>{priority}</TableCell>
      <TableCell>{text}</TableCell>
      <TableCell>{user}</TableCell>
      <TableCell>{created}</TableCell>
      <TableCell>
        <DeleteForeverRoundedIcon color='secondary' />
      </TableCell>
    </TableRow>
  );
};

export default Logitem;
