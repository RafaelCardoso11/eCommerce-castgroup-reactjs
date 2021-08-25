import axios from 'axios'
export const http = axios.create({
  baseURL: "http://localhost:3004" //Não coloquei em variável ambiente pois é uma api para testes.
})
