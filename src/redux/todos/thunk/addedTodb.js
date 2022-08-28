import { added } from "../actions";

const addedToDb = (addedText) => {
  return async (dispatch) => {
    const response = await fetch("https://bappa-server.herokuapp.com/todos", {
      method: "POST",
      body: JSON.stringify({
        text: addedText,
        completed: false,
      }),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    });
    const todo = await response.json();
    dispatch(added(todo.text));
  };
};

export default addedToDb;
