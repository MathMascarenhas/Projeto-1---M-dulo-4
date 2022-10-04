import "./form.css";
import { api } from "../../utils/api/api";
import { useState } from "react";

export function Form({ handleModal, getAll }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const word = {
      word: event.target.word.value,
      translation: event.target.translation.value,
      definition: event.target.definition.value,
    };
    setLoading(true);
    await api.createWord(word);
    await getAll();
    setLoading(false);
    handleModal();
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-field">
        <h2 className="title-form">Preencha os Campos</h2>
        <section className="form-section">
          <label className="form-label">Palavra</label>
          <input type="text" name="word" className="form-input"></input>
        </section>
        <section className="form-section">
          <label className="form-label">Tradução</label>
          <input type="text" name="translation" className="form-input"></input>
        </section>
        <section className="form-section">
          <label className="form-label">Definição</label>
          <input type="text" name="definition" className="form-input"></input>
        </section>
        <button type="submit" className="btn-submit">
          Criar
        </button>
      </form>
    </div>
  );
}
