import { callApi } from "../api/callApi";
import { HTTP_Method } from "../constants";
import { Word } from "../types";

export const getWord = async (word: string) => {
  const response = await callApi(HTTP_Method.GET, `${word}`);
  return response;
};
