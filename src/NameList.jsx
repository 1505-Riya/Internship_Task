// NameList.js

import React from 'react';

function NameList(props) {
  const names = props.names;

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

export default NameList;
