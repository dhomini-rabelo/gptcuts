import axios from 'axios'

export const BASE_URL = 'http://localhost:8000/api/'

export const client = axios.create({
  baseURL: BASE_URL,
}) // with Authentication

export const simpleClient = axios.create({
  baseURL: BASE_URL,
}) // without Authentication
