import React from 'react';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

const Logitem = ({ log: { _id, priority, user, text, created } }) => {
  return (
    <tr>
      <td>{priority}</td>
      <td>{text}</td>
      <td>{user}</td>
      <td>{created}</td>
      <td>
        <DeleteForeverRoundedIcon color='secondary' />
      </td>
    </tr>
  );
};

export default Logitem;
