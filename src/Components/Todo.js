import React from "react";

function Todo({ item, setTotal, total, temp, setTemp }) {
  const delete_task = () => {
    console.log("delete");
    console.log(item, "BURAAA");
    console.log(total);
    setTotal(
      total.filter((fl) => {
        return fl.id !== item.id;
      })
    );
    setTemp(
      temp.filter((fl) => {
        return fl.id !== item.id;
      })
    );
  };
  const complet = () => {
    const temp = [];
    for (let index = 0; index < total.length; index++) {
      if (index < total.length && total[index].id === item.id) {
        total[index].completed = !total[index].completed;
      }
      temp.push(total[index]);
    }
    setTotal(temp);
  };
  return (
    <div key={Math.random()}>
      <span className={item.completed ? "afterTick tick" : "tick"}>✓</span>
      <li onClick={complet} className={item.completed ? "opc" : ""}>
        {item.task}
      </li>
      <button onClick={delete_task} className="clear delete">
        X
      </button>
    </div>
  );
}
export default Todo;
