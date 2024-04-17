// TodoList.jsx
import { useSelector } from "react-redux";

import TodoItems from "./TodoItems";

const TodoList = () => {
  const filteredTodoList = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const term = state.term;

    return todos.filter((todo) => {
      const matchFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETED" && !todo.completed) ||
        filter === "ALL";

      const matchTerm = todo.text.toLowerCase().includes(term.toLowerCase());

      return matchFilter && matchTerm;
    });
  });



  return (
    <ul>
      <li className="my-2 text-sm italic"> All your notes Here...</li>
      {filteredTodoList.map((todo, index) => {
        return <TodoItems  key={index} todo={todo} index={index}/>;
      })}
    </ul>
  );
};

export default TodoList;
