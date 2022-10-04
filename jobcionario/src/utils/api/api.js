const defaultUrl = "";

export const api = {
  createWord: async (newWord) => {
    fetch(defaultUrl + "/create", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(newWord),
    });
  },
  getAllWords: async () => {
    const response = await fetch(defaultUrl + "/");
    const allWords = response;
    return allWords;
  },
};
