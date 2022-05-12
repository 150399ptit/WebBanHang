import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:5500/',
    headers: {
        'content-type': 'application/json',
    }
})
export default axiosClient