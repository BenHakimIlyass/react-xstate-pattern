import * as React from "react";
import "./styles.css";
import useUser from "./login/useUser";
import useTodoListe from "./todoList/useTodoList";

const App = () => {
  const [user, userStates, getUser] = useUser();
  const [todo, todoStates, getTodos] = useTodoListe(true);
  console.log(todoStates);

  return (
    <div>
      {/* use user data */}
      <button onClick={getUser}>Fetch</button>
      {userStates.loading && <h1>Loading...</h1>}
      <h1>{userStates.success && user}</h1>
      <div>-----------------------------------------------</div>

      {/* use todo data */}
      <button onClick={getTodos}>Fetch</button>
      {todoStates.loading && <h1>Loading...</h1>}
      <ul>
        {todo.map((item, i) => (
          <li key={i}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
