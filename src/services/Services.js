import api from "./api/Api";

export const getWorldCases = async () => {
  const response = await api
    .get("world/total")
    .catch((err) => console.error(new Error(err)));
  return response?.data;
};

export const getCasesByCountry = async (country, start, end) => {
  const response = await api
    .get(`country/${country}?from=${start}&to=${end}`)
    .catch((err) => console.error(new Error(err)));
  return response?.data;
};
