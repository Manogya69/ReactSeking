import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  //need to add delete function.
  function onConfirm() {}
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button
          className="btn"
          onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal
          onCancel={closeModalHandler}
          onConfirm={onConfirm}
        />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
