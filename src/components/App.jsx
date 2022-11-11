import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";
function App() {
  const [items, setItems] = useState([]);
  const deleteItem = (id) => {
    let newItems = items.filter((element, index) => {
      return index !== id;
    });
    setItems(newItems);
  };
  const addItem = (item) => {
    setItems((pre) => {
      return [...pre, item];
    });
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={addItem} />
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <TodoItem
                key={index}
                item={item}
                id={index}
                deleteItem={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
