import { useState } from "react";
import { Form } from "../components/form/form";
import "./header.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "25%",
    height: "30%",
    transform: "translate(-50%, -50%)",
    backgroundColor: " rgba(224, 224, 224, 0.8)",
    borderRadius: "15px",
    borderStyle: "none",
  }
};

Modal.setAppElement("#root");
export function Header({ getAll}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <>
      <header className="header-home">
        <section className="logo-section">
            <img src="./dictionary.png" alt="logo jobcionário"></img>
          <h1 >JobCionário</h1>
        </section>
        <section>
          <button className="modal-btn" onClick={handleModal}>
           Adicionar Palavra
          </button>
        </section>
      </header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Create Form"
      >
        <Form handleModal={handleModal} getAll={getAll}/>
      </Modal>
    </>
  );
}