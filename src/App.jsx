import styles from "./App.module.css";
import TodoItem from "./components/todoItem/todoItem";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, setFilter } from "./store/reducers/todoSlice";
import { useState } from "react";

function App() {
  const filter = useSelector((state) => state.todo.filter);
  const [inputState, setInputState] = useState("");

  const todos = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();

  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  const handleAddTodo = () => {
    if (inputState !== "")
      dispatch(addTodo({ id: Date.now(), text: inputState, completed: false }));
    setInputState("");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "incomplete") {
      return !todo.completed;
    } else {
      // "all" filter, return all todos
      return true;
    }
  });

  return (
    <div>
      <div className={styles.box}>
        <div className={styles.buttons}>
          <input
            onChange={(event) => {
              setInputState(event.target.value);
            }}
            placeholder="newItem"
            type="text"
            value={inputState}
            className={styles.input}
          />

          <button className={styles.button} onClick={handleAddTodo}>
            addItem
          </button>
          <button
            className={styles.button}
            onClick={() => handleFilterChange("incomplete")}
          >
            не выполненные
          </button>
          <button
            className={styles.button}
            onClick={() => handleFilterChange("completed")}
          >
            выполненные
          </button>
          <button
            className={styles.button}
            onClick={() => handleFilterChange("all")}
          >
            все
          </button>
        </div>
        <div className={todos[0] ? styles.itemsList : ""}>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todoId={todo.id}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
