import React, { useReducer, createContext, useEffect } from 'react';
import { Table, Row, Col } from 'antd';
import axios from 'axios';

import 'antd/dist/antd.css';
import './App.css';

import { TodoForm } from './components/Form/Form.component';
import { todoReducer } from './utils/functions/formReducer';

import { FORM_COLUMNS } from './utils/constants/FORM_COLUMNS';

export const TodoContext = createContext();

const App = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, []);

  useEffect(() => {
    axios.get('/api/get').then(result => {
      dispatchTodos({ type: 'TODOS', todos: result.data });
    })
  }, [])

  return (
    <TodoContext.Provider value={[todos, dispatchTodos]}>
      <Row type="flex" justify="center">
        <Col xs={23} sm={23} md={23} lg={23} xl={23}>
          <TodoForm />
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col xs={23} sm={23} md={23} lg={23} xl={23}>
          <Table dataSource={todos} columns={FORM_COLUMNS} />
        </Col>
      </Row>
    </TodoContext.Provider>
  );
};
export default App;
