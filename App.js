import "./App.css";
import Header from "./Mycomponents/Header";
import { Todos } from "./Mycomponents/Todos";
import { Footer } from "./Mycomponents/Footer";
import { AddTodo } from "./Mycomponents/AddTodo";
import React, { useState } from "react";
function App() {
  const onDelete = (todo) => {
    console.log("i am on delete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    console.log("i am adding", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState([]);
  return (
    <>
      <Header title="CookBook" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
