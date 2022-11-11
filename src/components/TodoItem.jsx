import React from "react";

const TodoItem = ({ item, deleteItem, id }) => {
  return (
    <li
      onClick={() => {
        deleteItem(id);
      }}
    >
      {item}
    </li>
  );
};
export default TodoItem;
