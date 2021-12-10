import React, { useState, useContext } from 'react';
import { Button, Form, Row, Typography } from 'antd';

import { openNotification } from '../../utils/functions/openNotification';

import { Calendar } from './Calendar.component';
import { FormInput } from './FormInput.component';
import { FormTextArea } from './FormTextArea.component';

import { TodoContext } from '../../App';

const { Title } = Typography;

export const TodoForm = () => {
  // Could replace useState with useReducer but I decided to keep things simple
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [date, setDate] = useState();
  const [, dispatchTodos] = useContext(TodoContext);

  const hasDate = date ? true : false;

  const formSubmit = () => {
    if (title && date && title.length >= 5) {
      dispatchTodos({ type: 'ADD_TODO', payload: [title, date, text] });
    } else {
      openNotification('bottomLeft', 'Başlıq minimum 5 hərfdən ibarət olmalıdır');
    }
  };

  return (
    <div className="add-box">
      <Form onFinish={formSubmit}>
        <Title data-testid="todo" level={4}>
          Yeni tapşırıq əlavə et
        </Title>
        <Row type="flex" justify="center">
          <FormInput data-testid="todo" setTitle={setTitle} />
          {title && title.length >= 5 ? <Calendar setDate={setDate} /> : null}
          {title && title.length < 5 ? (
            <Title className="TitleLength" type="danger" level={4}>Başlıq minimum 5 hərfdən ibarət olmalıdır</Title>
          ) : null}
          <FormTextArea data-testid="todotext" setText={setText} />
        </Row>
        <Row>
          <Button type="primary" htmlType="submit" block disabled={!hasDate}>
            Əlavə et
          </Button>
        </Row>
      </Form>
    </div>
  );
};
