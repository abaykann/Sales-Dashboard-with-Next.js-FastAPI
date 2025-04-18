const API_URL = "http://localhost:8000/api";

export const configRequest = async (
  endpoint: string,
  method: string,
  body?: any
): Promise<any> => {
  const headers = {
    "Content-Type": "application/json",
  };

  const config: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || "Failed to fetch");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
