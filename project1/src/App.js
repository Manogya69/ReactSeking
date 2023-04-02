import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learning React" />
      <Todo text="Creating a React Project" />
      <Todo text="Learning Python" />
    </div>
  );
}

export default App;
