import { Provider } from "react-redux";
 

import Header from "./components/Header";
 
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import store from "./redux/store";
import TodoBar from "./components/TodoBar";
import CompleTedTodos from "./components/CompleteTodos";
 

function App() {
  return (
    <Provider store={store}>
      <div className="grid mt-10 place-items-center bg-blue-100  px-6 font-sans">
        <Navbar />
        <TodoBar />
        <div className=" mt-5 mb-5 w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />

          <hr className="mt-4 mb-4" />

          <TodoList />

          <hr className="mt-4" />
        </div>
        <CompleTedTodos />
      </div>
    </Provider>
  );
}

export default App;
