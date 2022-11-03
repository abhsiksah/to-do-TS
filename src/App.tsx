import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputfield/InputField';
import TodoList from './components/todo-list/TodoList';
import { Todo } from './models/model';

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };



  return (
    <div className="App">
      <span className="heading">Write Your Tasks!</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
