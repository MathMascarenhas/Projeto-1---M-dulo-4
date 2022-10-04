const defaultUrl = "https://jobcionario.herokuapp.com";

export const api = {
  createWord: async (word) => {
    const response = await fetch(defaultUrl + "/words/", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(word),
    });
    return response
  },
  getAllWords: async () => {
    const response = await fetch(defaultUrl + "/words", { method: "GET" });
    const allWords = await response.json();
    return allWords;
  },
};
