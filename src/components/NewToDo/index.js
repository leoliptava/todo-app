import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const NewToDo = ({ onNewToDo }) => {
  const ENTER_KEY = 13;
  const ESC_KEY = 27;
  const [value, setValue] = useState('');

  const erase = () => {
    setValue('');
  };

  const submit = () => {
    if (!onNewToDo) {
      return;
    }

    if (!value.trim()) {
      erase();
    } else {
      onNewToDo(value);
    }
    erase();
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit(event);
    } else if (event.which === ESC_KEY) {
      erase();
    }
  };
  return (
    <input
      className="new-todo"
      placeholder="O que vamos fazer hoje?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

NewToDo.propTypes = {
  onNewToDo: PropTypes.func.isRequired,
};

export default NewToDo;
