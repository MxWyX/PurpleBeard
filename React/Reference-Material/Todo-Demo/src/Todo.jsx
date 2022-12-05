import React from "react";

const Todo = ({
  setTodos,
  todos,
  text,
  todo,
  listItem,
  setListItem,
  setEditId,
  setEditMode,
}) => {
  const editTodo = (id) => {
    let theEditTodo = todos.find((todo) => {
      return todo.id === id;
    });
    if (theEditTodo) {
      setEditMode(true);
      setListItem(theEditTodo.text);
      setEditId(id);
    }
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const completeTodo = (id) => {
    const updatedTodo = todos.map((theTodo) => {
      if (theTodo.id === id) {
        return {
          ...theTodo,
          completed: !theTodo.completed,
        };
      }
      return theTodo;
    });
    setTodos(updatedTodo);
    setEditId(id);
  };
  return (
    <div>
      <li>{text}</li>
      <button onClick={() => editTodo(todo.id)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button onClick={() => completeTodo(todo.id)}>
        {todo.completed ? "Mark not complete" : "Mark completed"}
      </button>
      <h5>Status: {todo.completed ? "Mark not complete" : "Mark completed"}</h5>
    </div>
  );
};

export default Todo;
