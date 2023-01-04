import React, { useState } from 'react';

import NewToDo from '../../components/NewToDo';
import ToDoList from '../../components/ToDoList';

const Main = () => {
  const [todos, setTodos] = useState([]);

  const onNewToDo = (value) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      },
    ]);
  };

  const onToogle = (id) => {
    setTodos(
      todos.map((obj) =>
        obj.id === id ? { ...obj, checked: !obj.checked } : obj
      )
    );
  };

  const onDelete = (id) => {
    setTodos(todos.filter((obj) => obj.id !== id));
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">To-Do App</h1>
      </header>
      <section className="main">
        <NewToDo onNewToDo={onNewToDo} />
        <ToDoList todos={todos} onToogle={onToogle} onDelete={onDelete} />
      </section>
    </section>
  );
};

export default Main;
