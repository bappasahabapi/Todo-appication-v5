import { colorSelected } from "../actions";

const updatedColor = (todoId, color) => {
  return async (dispatch) => {
    const response = await fetch(`https://bappa-server.herokuapp.com/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        color: color,
      }),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    });
    const todo = await response.json();
    dispatch(colorSelected(todo.id, todo.color));
  };
};

export default updatedColor;
