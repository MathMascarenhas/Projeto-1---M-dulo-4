import { Header } from "../../header/header";
import { Card } from "../../components/card/card";
import { api } from "../../utils/api/api";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import "./home.css";

const customStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

export function Home() {
  const [wordList, setWordList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [uniqueWord, setUniqueWord] = useState({});

  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  async function getAll() {
    const words = await api.getAllWords();
    setWordList(words);
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <Header getAll={getAll} />
      <div className="card-list">
        {wordList.map((item, index) => {
          return (
            <div className="div-card">
              <button
                className="btn-card"
                onClick={() => {
                  setUniqueWord(item);
                  handleModal();
                }}
              >
                <Card key={index} word={item.word} />
              </button>
            </div>
          );
        })}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Card information"
      >
        <section>
          <section className="article">
            <h2 className="head-modal">{uniqueWord.word}</h2>

            <h3 className="subhead-modal"> - {uniqueWord.translation}</h3>
          </section>
          <h4 className="info-modal">{uniqueWord.definition}</h4>
        </section>
      </Modal>
    </>
  );
}
