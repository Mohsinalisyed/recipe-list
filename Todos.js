import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "center",
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className=" my-3">Recipe List</h3>
      {props.todos.length === 0
        ? "No Recipe To Display"
        : props.todos.map((Todos) => {
            return (
              <TodoItem
                todo={Todos}
                key={Todos.sno}
                onDelete={props.onDelete}
              />
            );
          })}
    </div>
  );
};

export default Todos;
