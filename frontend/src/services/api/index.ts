import { configRequest } from "./connfig";

export const fetchAnswer = async (question: string) => {
  const endpoint = "/ai"; // Ganti dengan endpoint yang sesuai
  const body = { question };

  return configRequest(endpoint, "POST", body); // Memanggil fungsi request dari config.ts
};
