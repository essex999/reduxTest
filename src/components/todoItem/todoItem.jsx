import styles from "./todoItem.module.css";
import { useDispatch } from "react-redux";
import { deleteTodo, setCompleted } from "../../store/reducers/todoSlice";

function TodoItem(props) {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(props.todoId));
  };

  const handleCompleteTodo = (todoId) => {
    dispatch(setCompleted(todoId));
  };

  return (
    <div className={styles.todoItem}>
      {props.text}
      <button
        onClick={() => handleCompleteTodo(props.todoId)}
        className={styles.button}
      >
        {props.completed === true ? "Отменить выполнение" : "Выполнено"}
      </button>
      <button onClick={handleDeleteTodo} className={styles.button}>
        remove
      </button>
    </div>
  );
}

export default TodoItem;
