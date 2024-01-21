import axios from "axios";
const baseUrl = "http://localhost:3001/messages";

const getAll = async () => {
  return await axios.get(baseUrl);
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

export default { getAll, create };
