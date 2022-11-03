import React from "react";
import { Todo } from "../../models/model";
import SingleTodo from "./single-todo/SingleTodo";
import "./style.css";
interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <div className="todo-list-container">
      {todos
        .sort((a, b) => b.id - a.id)
        .map((todo: any) => {
          return (
            <>
              <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
            </>
          );
        })}
    </div>
  );
};

export default TodoList;
