import React from "react";
import { useState } from "react";
const InputArea = ({ addItem }) => {
  const [item, setItem] = useState("");
  return (
    <div className="form">
      <input
        type="text"
        name="item"
        value={item}
        onChange={(e) => {
          let value = e.target.value;
          setItem(value);
        }}
      />
      <button
        onClick={() => {
          addItem(item);
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};
export default InputArea;
