import React, { useEffect, useState } from "react";
import List from "./List";
import Task from "./Task";
import "./style.css";

let enable = false;
function Contact() {
  const [total, setTotal] = useState([]);
  const [temp, setTemp] = useState([]);
  const [hid,setHid]= useState(false)
  useEffect(() => {
    if (!enable) {
      setTemp(total);
    }
  }, [total, temp]);
  const completedTotal = () => {
    setTemp(
      total.filter((item) => {
        return item.completed;
      })
    );
    enable = true;
  };
  const activeTotal = () => {
    setTemp(
      total.filter((item) => {
        return !item.completed;
      })
    );
    enable = true;
  };
  const all = () => {
    console.table(total);
    setTemp(total);
    enable = false;
  };
  const clearAll = () => {
    setTotal(
      total.filter((item) => {
        return !item.completed;
      })
    );
    setTemp(
      temp.filter((item) => {
        return !item.completed;
      })
    );
  };
  

  return (
    <div>
      <h1>TO-DO LIST</h1>
      <hr></hr>
      <Task total={total} setTotal={setTotal} hid= {hid} setHid = {setHid} />
      <List hid={hid} total={total} setTotal={setTotal} temp={temp} setTemp={setTemp} />
      <div className="footer">
        <span>{total.length + " Total Items"}</span>
        <div className="footer-btn">
          <button className="clear" onClick={all}>
            All
          </button>
          <button className="clear" onClick={activeTotal}>
            Active
          </button>
          <button className="clear" onClick={completedTotal}>
            Completed
          </button>
        </div>
        <button onClick={clearAll} className="clear hz">
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default Contact;
