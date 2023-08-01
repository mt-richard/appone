import axios from "axios";

const instance = axios.create({
    baseURL: 'https://micro-service-architecture.onrender.com/',
    timeout: 50000,
    // headers: {'X-Custom-Header': 'foobar'}
  });