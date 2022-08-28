import { useDispatch, useSelector } from "react-redux";
import { colorChanged } from "../redux/filters/actions";

const numberOfTodos = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return "0 task";
    case 1:
      return "1 task";
    default:
      return `${no_of_todos} tasks`;
  }
};

export default function TodoBar() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const dispatch = useDispatch();
  const todosRemaining = todos.filter((todo) => !todo.completed).length;
  const completeTask = todos.filter((todo) => todo.completed).length;
  const { colors } = filters;

  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, "removed"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };

  return (
    <div className=" mt-8 w-full max-w-3xl shadow-lg rounded-lg p-2 bg-white">
      <div className="mt-2 mb-2  flex justify-center text-xs text-gray-500">
          <p className="  py-1 px-3 m-2  text-white rounded bg-yellow-500">
           {" "}
           🟨 Total Task {todos.length}
          </p>
          <p className="  py-1 px-3  m-2  text-white rounded bg-orange-400">
            {" "}
            🟧 Incomplete {numberOfTodos(todosRemaining)}{" "}
          </p>
          <p className="  py-1 px-3  m-2   text-white rounded bg-green-500">
            {" "}
           🟩 Complete {numberOfTodos(completeTask)}{" "}
          </p>

      </div>
      <div className="mt-2 mb-2  flex justify-center text-sm">
      <h4 className="mt-2 mb-2 mr-4" > Filter by colors  </h4> 

      <ul className="flex space-x-1 items-center text-xs">
          <li
            className={`h-4 w-4 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
              colors.includes("green") && "bg-green-500"
            }`}
            onClick={() => handleColorChange("green")}
          ></li>
          <li
            className={`h-4 w-4 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
              colors.includes("red") && "bg-red-500"
            }`}
            onClick={() => handleColorChange("red")}
          ></li>
          <li
            className={`h-4 w-4 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
              colors.includes("yellow") && "bg-yellow-500"
            }`}
            onClick={() => handleColorChange("yellow")}
          ></li>
        </ul>
      </div>
      
    </div>
  );
}
