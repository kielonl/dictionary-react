import axios from "axios";
import { HTTP_Method } from "../constants";

const apiUrl = import.meta.env.VITE_API_URL;
export const callApi = async (
  method: HTTP_Method,
  url: string,
  data?: any
): Promise<any> => {
  try {
    const response = await axios({
      method: HTTP_Method[method],
      url: `${apiUrl}${url}`,
      data,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
