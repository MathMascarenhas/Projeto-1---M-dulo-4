import { GrFormAdd } from "react-icons/gr";
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
    width: "40%",
    height: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: " rgba(0, 0, 0, 0.8)",
    borderRadius: "15px",
  }
};

Modal.setAppElement("#root");
export function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <>
      <header className="header-home">
        <section className="logo-section">
            <img src="../../public/dictionary.png" alt="logo jobcionário"></img>
          <h1 >JobCionário</h1>
        </section>
        <section>
          <button className="modal-button" onClick={handleModal}>
            <GrFormAdd size={26} /> Adicionar Palavra
          </button>
        </section>
      </header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Create Form"
      >
        <h2>Preencha os Campos</h2>
        <Form handleModal={handleModal} />
      </Modal>
    </>
  );
}