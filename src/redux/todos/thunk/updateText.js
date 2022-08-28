import { updateTitle } from "../actions";

const updatedText = (todoId, titleText) => {
  return async (dispatch) => {
    const response = await fetch(`https://bappa-server.herokuapp.com/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        text: titleText,
      }),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    });
    const todo = await response.json();
    dispatch(updateTitle(todo.id, titleText));
  };
};

export default updatedText;
