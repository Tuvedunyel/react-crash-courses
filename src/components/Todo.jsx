import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleDelete() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    console.log("Clicked!");
    setModalIsOpen(false);
  }

  return (
    <>
      <div className='card'>
        <h2>{props.title}</h2>
        <div className='actions'>
          <button className='btn' onClick={handleDelete}>
            Delete
          </button>
        </div>
        {modalIsOpen && (
          <>
            <Modal />
            <Backdrop onClick={handleCloseModal} />
          </>
        )}
      </div>
    </>
  );
}

export default Todo;
