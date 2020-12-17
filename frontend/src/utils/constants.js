export const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? '/api'
  : 'http://localhost:3001/api'
export const CONCURRENT_CONNECTIONS = 2
