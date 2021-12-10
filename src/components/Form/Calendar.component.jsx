import React from 'react';
import { Col, DatePicker, Form } from 'antd';
import az from 'antd/es/date-picker/locale/az_AZ';

export const Calendar = ({setDate}) => (
  <Col>
    <Form.Item className="CalendarLabel" label="Son tarix seçin" >
      <DatePicker onChange={(_, dateString) => setDate(dateString)} placeholder="Son tarix seçin" locale={az} />
    </Form.Item>
  </Col>
);