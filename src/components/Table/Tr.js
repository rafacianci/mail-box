import React from 'react';

const Tr = ({ children, onClick }) => (
  <tr onClick={() => onClick()}>
    { children }
  </tr>
);

export default Tr;
