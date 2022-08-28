import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import fetchComplete from "../redux/todos/thunk/fetchComplete";
import CompleteTodo from "./CompleteTodo";

export default function CompleTedTodos() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComplete);
  }, [dispatch]);

  const filterByComplete = (todo) => {
    if (todo.completed === true) {
      return todo;
    }
  };

  return (
    <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
    <h3> ✅ Completed Task </h3>
      <div className="  text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {todos
          .filter(filterByComplete)

          .map((todo) => (
            <CompleteTodo todo={todo} key={todo.id} />
          ))}
      </div>
    </div>
  );
}
