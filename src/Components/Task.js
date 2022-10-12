import React, { useEffect, useState } from "react";
function Task({ total, setTotal, hid, setHid }) {
  const [form, setForm] = useState("");

  const onchange = (e) => {
    setForm(e.target.value);
  };
  const onsubmit = (e) => {
    e.preventDefault();
    if (form !== "") {
      let idd = Math.random();
      setTotal([...total, { task: form, completed: false, id: idd }]);
      setForm("");
    }
  };
  const hdn = () => {
    console.log(hid);
    setHid(!hid);
  };

  return (
    <form onSubmit={onsubmit} className="equal">
      <button type="button" onClick={hdn} className={hid ? "open open-rotate" : "open"}>
        <span>&#62;</span>
      </button>
      <input
        name="task"
        onChange={onchange}
        value={form}
        placeholder="Enter Your Task..."
      />
      <button className="btn clear">ADD</button>
    </form>
  );
}

export default Task;
