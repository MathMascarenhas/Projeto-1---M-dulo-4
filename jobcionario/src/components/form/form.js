import "./form.css";
import { api } from "../../utils/api/api";
import { useState } from "react";

export function Form({ handleModal, getAll }) {
  const [newWord, setNewWord] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    const word = JSON.stringify(newWord);
    await api.createWord(word);
    await getAll();
    handleModal();
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-field">
        <h2 className="title-form">Preencha os Campos</h2>
        <section className="form-section">
          <label className="form-label">Palavra</label>
          <input
            type="text"
            name="word"
            className="form-input"
            onChange={(event) => {
              setNewWord({ newWord, word: event.target.value });
            }}
          ></input>
        </section>
        <section className="form-section">
          <label className="form-label">Tradução</label>
          <input
            type="text"
            name="translation"
            className="form-input"
            onChange={(event) => {
              setNewWord({ newWord, translation: event.target.value });
            }}
          ></input>
        </section>
        <section className="form-section">
          <label className="form-label">Definição</label>
          <input
            type="text"
            name="definition"
            className="form-input"
            onChange={(event) => {
              setNewWord({ newWord, definition: event.target.value });
            }}
          ></input>
        </section>
        <button type="submit" className="btn-submit">
          Criar
        </button>
      </form>
    </div>
  );
}
