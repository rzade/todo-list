import React from 'react';

import { Complete } from '../../components/Complete/Complete.component';
import { Uncomplete } from '../../components/Uncomplete/Uncomplete.component';
import { Delete } from '../../components/Delete/Delete.component';
import { Title } from '../../components/Title/Title.component';

export const FORM_COLUMNS = [
  {
    title: 'Başlıq',
    dataIndex: 'title',
    key: 'title',
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },
  
  {
    title: 'Mətn',
    dataIndex: 'text',
    key: 'text',
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },

  {
    title: 'Son tarix',
    dataIndex: 'date',
    key: 'date',
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },

  {
    title: 'Əməliyyat',
    key: 'action',
    dataIndex: 'action',
    render: (text, record) => {
      return (
        <>
          <Complete record={record} />
          {' '}
          <Uncomplete record={record} />
          {' '}
          <Delete record={record} />
        </>
      );
    },
  },
];
