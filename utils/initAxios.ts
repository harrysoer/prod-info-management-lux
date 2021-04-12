import Axios from "axios";
import { configure } from "axios-hooks";

const initAxios = (token: string = "") => {
  const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Access-Control-Allow-Origin": "*",
      authorization: token,
    },
  });

  configure({ axios });
};

export default initAxios;
