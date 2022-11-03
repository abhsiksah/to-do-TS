import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../../../models/model";
import {
  DeleteTwoTone,
  EditTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import "./style.css";
import JoditEditor from "jodit-react";

interface SingleTodoProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: SingleTodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const editor = useRef<any>(null);
  useEffect(() => {
    editor.current?.focus();
  }, [edit]);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleEdit = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <div className="single-todo-body">
      {edit ? (
        <div className="todo-jodit-body">
          <JoditEditor
            ref={editor}
            value={todo.todo}
            onChange={(newContent) => {
              setEditTodo(newContent);
            }}
          />
        </div>
      ) : (
        <div className="todo-body">
          {todo.isDone ? (
            <s
              className="todo-content"
              dangerouslySetInnerHTML={{ __html: todo.todo }}
            />
          ) : (
            <span
              className="todo-content"
              dangerouslySetInnerHTML={{ __html: todo.todo }}
            />
          )}
        </div>
      )}

      <div className="button-container">
        <span className={edit ? "display-none " : "delete"}>
          <DeleteTwoTone
            twoToneColor={"red"}
            style={{ fontSize: "30px" }}
            onClick={() => {
              handleDelete(todo.id);
            }}
          />
        </span>
        <span className="edit">
          {edit ? (
            <EditTwoTone
              twoToneColor={"green"}
              style={{ fontSize: "30px" }}
              onClick={() => {
                handleEdit(todo.id);
              }}
            />
          ) : (
            <EditTwoTone
              twoToneColor={"#9da132"}
              style={{ fontSize: "30px" }}
              onClick={() => {
                setEdit(!edit);
              }}
            />
          )}
        </span>
        <span className={edit ? "display-none " : "check"}>
          <CheckCircleTwoTone
            twoToneColor={"#279159"}
            style={{ fontSize: "30px" }}
            onClick={() => {
              handleDone(todo.id);
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default SingleTodo;
// onSubmit={(e) => handleEdit(e, todo.id)}
