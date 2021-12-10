import React, { useContext } from 'react';
import { TodoContext } from '../../App';

import { Button } from 'antd';

export const Uncomplete = ({ record }) => {
  const [, dispatchTodos] = useContext(TodoContext);
  return (
    <a
      href="#uncomplete"
      onClick={() => {
        dispatchTodos({ type: 'UNCOMPLETE_TODO', payload: record.key });
      }}
    >
      <Button>Tamamlana bilmədi</Button>
    </a>
  );
};
