import axios from 'axios';

const api = axios.create({
    baseURL: 'https://breakingbadapi.com/api'
});

export default api;