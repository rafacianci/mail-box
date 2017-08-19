import React from 'react';

const Tr = ({ children, onClick, highlight }) => (
  <tr onClick={() => onClick()} className={!highlight ? 'highlight' : ''}>
    { children }
  </tr>
);

export default Tr;
