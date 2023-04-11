import { callApi } from "../api/callApi";
import { HTTP_Method } from "../constants";
import { Dictionary } from "../types";

export const getWord = async (word: string): Promise<Dictionary> => {
  const response = await callApi(HTTP_Method.GET, `${word}`);
  return response;
};
