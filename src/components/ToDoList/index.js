import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { MdDelete } from 'react-icons/md';

const ToDoList = ({ todos, onToogle, onDelete }) => (
  <ul className="todo-list">
    {todos.map(({ id, title, checked }) => (
      <li key={id.toString()}>
        <span
          className={['todo', checked ? 'checked' : ''].join(' ')}
          onClick={() => onToogle && onToogle(id)}
          onKeyPress={() => onToogle && onToogle(id)}
          role="button"
          tabIndex={0}
        >
          {title}
        </span>
        <button className="remove" type="button">
          {' '}
          <MdDelete size={28} onClick={() => onDelete && onDelete(id)} />{' '}
        </button>
      </li>
    ))}
  </ul>
);

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToogle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ToDoList;
