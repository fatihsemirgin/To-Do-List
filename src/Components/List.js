import React, { useEffect, useState } from "react";
import Todo from "./Todo.js";
function List({ hid,total, setTotal, temp, setTemp }) {
  return (
    <ul className={hid ? "hdn" : ""}>
      {temp.map((item) => (
        <Todo
          key={item.id}
          item={item}
          setTotal={setTotal}
          total={total}
          temp={temp}
          setTemp={setTemp}
        />
      ))}
    </ul>
  );
}

export default List;
