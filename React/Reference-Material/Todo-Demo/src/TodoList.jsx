import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todos,
  setTodos,
  listItem,
  setListItem,
  setEditId,
  setEditMode,
}) => {
  return (
    <div>
      <ul>
        {
          (todos.
          map((todo) => (
            <Todo
              key={todo.id}
              setTodos={setTodos}
              todos={todos}
              text={todo.text}
              todo={todo}
              listItem={listItem}
              setListItem={setListItem}
              setEditId={setEditId}
              setEditMode={setEditMode}
            />
          )))
        }
      </ul>
    </div>
  );
};

export default TodoList;
