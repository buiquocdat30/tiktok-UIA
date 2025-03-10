import axios from 'axios';

console.log(process.env.REACT_APP_BASE_URL);

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

//custom method get, trả về 1 promise
export const get = async (path, option = {}) => {
  const response = await httpRequest.get(path, option);
  return response.data;
};

export default httpRequest;

//enviroment
//local/ development
//Test / staging
//UAT
//Production
