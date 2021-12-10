import React from 'react';
import { Col, Form, Input } from 'antd';
const { TextArea } = Input;

export const FormTextArea = ({setText}) => (
  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
    <Form.Item label="Mətn">
      <TextArea
        onChange={e => {
          setText(e.target.value);
        }}
      />
    </Form.Item>
  </Col>
);
