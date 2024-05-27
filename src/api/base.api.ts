import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/';

export const instance = axios.create({
  baseURL: BASE_URL,
});

