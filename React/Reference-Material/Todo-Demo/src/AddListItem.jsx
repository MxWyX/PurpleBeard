import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";

const AddListItem = () => {
  const [listItem, setListItem] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const addOrEdit = () => {
    if (editMode) {
        const updatedList = todos.map((theTodo) => {
            if(theTodo.id === editId) {
                return {
                    ...theTodo,
                    text: listItem
                };
            }
            return theTodo;
        });
        setTodos(updatedList);
        setListItem('');
        setEditMode(false);
    } else {
      setTodos([
        ...todos,
        {
          text: listItem,
          id: Math.floor(Math.random() * 10000 + 1),
          completed: false,
        },
      ]);
      setListItem('')
    }
  };
  return (
    <div>
      <input
        type="text"
        value={listItem}
        onChange={(e) => setListItem(e.target.value)}
      />
      <button onClick={addOrEdit}>{editMode ? "Edit" : "Add"}</button>

      <TodoList
        todos={todos}
        setTodos={setTodos}
        listItem={listItem}
        setListItem={setListItem}
        setEditId={setEditId}
        setEditMode={setEditMode}
      />
    </div>
  );
};

export default AddListItem;
