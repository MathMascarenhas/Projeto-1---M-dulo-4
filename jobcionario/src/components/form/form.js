import "./form.css";
import { api } from "../../utils/api/api";

export function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    const newWord = {
      word: event.target.word.value,
      translation: event.target.translation.value,
      definition: event.target.definition.value,
    };
    api.createWord(newWord);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-field">
        <section>
          <label>Palavra</label>
          <input type="text" name="word"></input>
        </section>
        <section>
          <label>Tradução</label>
          <input type="text" name="translation"></input>
        </section>
        <section>
          <label>Definição</label>
          <input type="text" name="definition"></input>
        </section>
        <button type="submit" className="btn-submit">
          Criar
        </button>
      </form>
    </div>
  );
}
