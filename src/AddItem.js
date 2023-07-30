/** @format */

import React, { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Add item'
      />
      <button onClick={() => { setTitle(""); onAddItem(title)}}>Add</button>
    </>
  );
}
