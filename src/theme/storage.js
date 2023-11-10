import data from "./schema.json";
export const saveToLS = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const getFromLS = (key) => {
  const value = window.localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  } else {
    return data.Dark;
  }
};
