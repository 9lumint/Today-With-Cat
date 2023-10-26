import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./common/Nav";
import Today from "./components/Today";
import TodoList from "./components/TodoList";
import PlayWithCat from "./components/PlayWithCat";
import Dev from "./components/Dev";
import "./App.css";

const User = () => {
  return (
    <>
      <section className="view">
        <Routes>
          <Route path="/today" element={<Today />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/playwithcat" element={<PlayWithCat />} />
          <Route path="/Dev" element={<Dev />} />
        </Routes>
      </section>
      <Nav />
    </>
  );
};

export default User;
