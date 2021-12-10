import { v4 as uuidv4 } from 'uuid';
import { openNotification } from './openNotification';
import axios from 'axios';

export function todoReducer(state, action) {  
  switch (action.type) {
    case 'TODOS':
      if(action.todos.length > 0){
        return action.todos;
      } else {
        return state;
      }
    case 'ADD_TODO':
      openNotification('bottomLeft', 'Tapşırıq əlavə olundu');
      const pm = state.concat({
        title: action.payload[0],
        date: action.payload[1],
        text: action.payload[2],
        key: uuidv4(),
        completed: 'false',
      });
      Promise.all(pm).then(function(r) {
          axios.post('/api/save', r).then(() => {});
      });
      return pm;
    case 'COMPLETE_TODO':
      openNotification('bottomLeft', 'Tapşırıq tamamlandı');
      const pm2 = state.map((todo) => {
        if (todo.key === action.payload) {
          return {
            ...todo,
            completed: 'true',
          };
        } else {
          return todo;
        }
      });
      Promise.all(pm2).then(function(r) {
          axios.post('/api/save', r).then(() => {});
      });
      return pm2;
    case 'UNCOMPLETE_TODO':
      openNotification('bottomLeft', 'Tapşırıq tamamlana bilmədi');
      const pm3 = state.map((todo) => {
        if (todo.key === action.payload) {
          return {
            ...todo,
            completed: 'false',
          };
        } else {
          return todo;
        }
      });
      Promise.all(pm3).then(function(r) {
          axios.post('/api/save', r).then(() => {});
      });
      return pm3;
    case 'DELETE_TODO':
      openNotification('bottomLeft', 'Tapşırıq silindi');
      const pm4 = state.filter((item) => item.key !== action.payload);
      Promise.all(pm4).then(function(r) {
          axios.post('/api/save', r).then(() => {});
      });
      return pm4;
    default:
      openNotification('bottomLeft', 'Səhv baş verdi!');
      throw new Error();
  }
}
