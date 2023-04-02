import Backdrop from "./components/Backdrop";
import Todo from "./components/Todo";
import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learning React" />
      <Todo text="Creating a React Project" />
      <Todo text="Learning Python" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
