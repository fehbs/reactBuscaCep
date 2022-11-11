import axios from 'axios';

//  http://viacep.com.br/ws/    /*base url*/
//  01310930/json/    /*rota*/
// http://viacep.com.br/ws/01310930/json/
// https://viacep.com.br/ws/${cep}/json

const api = axios.create({
  baseURL: `https://viacep.com.br/ws/${cep}/json`
});

export default api;
