import "./form.css";
import { api } from "../../utils/api/api";

export function Form({ handleModal, getAll }) {

  async function handleSubmit(event) {
    event.preventDefault();
    const word = {
      word: event.target.word.value,
      translation: event.target.translation.value,
      definition: event.target.definition.value,
    };
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
