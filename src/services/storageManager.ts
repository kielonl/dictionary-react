import { StorageManager } from "../types";

export const save: StorageManager["save"] = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const load: StorageManager["load"] = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const remove: StorageManager["remove"] = (key) => {
  localStorage.removeItem(key);
};
