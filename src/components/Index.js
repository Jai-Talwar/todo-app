import React, { useState } from "react";
import "./todo.css";

export default function Index(props) {
  const [text, settext] = useState("");
  const [todos, settodos] = useState([]);
  const clicked = () => {
    // Adding a new todo;
    alert("Adding " + text);
    settodos((olditems) => {
      //olditems is the array [todo] as settodos is the todo array only
      return [...olditems, text];
    });
    console.log(...todos);
    settext("");
  };
  let handlechange = (e) => {
    settext(e.target.value);
  };

  function deletefunc(id) {
    settodos((f) => {
      return f.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className=" container main my-3 ">
      <div>
        <h1 style={{ color: "#454545" }}>To-Do List</h1>
      </div>
      <div className="input-group mb-3">
        <input
          className="form-control myinput"
          type="text"
          placeholder="Add a To-Do"
          value={text}
          onChange={handlechange}
        />
        <button className="btn btn-primary" onClick={clicked}>
          +
        </button>
      </div>
      <div>
        <ul>
          {todos.map((items, index) => {
            return (
              //  <Array1 items = {items}  index = {index} id={index} deletefunc = {deletefunc} />
              <div className="container" key={index}>
                <li id={index}>
                  {" "}
                  {items}
                  <button
                    className="mx-3 my-1 btn btn-danger"
                    onClick={() => {
                      let id = index;
                      deletefunc(id);
                    }}
                  >
                    X
                  </button>
                </li>
                <hr />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
