import { Card } from "../../components/card/card";
import { api } from "../../utils/api/api";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import "./home.css";

const customStyles = {
  content: {
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
  const [wordList, setWordList] = useState([{
    word: "swdjoid",
    translation: "dnkendc",
    definition: "jfej"
  }]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [uniqueWord, setUniqueWord] = useState({});

  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  async function getAllWords() {
    const words = await api.getAllWords();
    setWordList(words);
  }
  useEffect(() => {
    getAllWords();
  }, []);

  return (
    <>
      <div className="card-list">
        {wordList.map((item, index) => {
          return (
            <button
              className="btn-card"
              onClick={() => {
                setUniqueWord(item);
                handleModal();
              }}
            >
              <Card key={index} word={item.word} />
            </button>
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
          <h2>{uniqueWord.word}</h2>
          <article>
            <h3>{uniqueWord.translation}</h3>
            <h4>{uniqueWord.definition}</h4>
          </article>
        </section>
      </Modal>
    </>
  );
}
