
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/', // Ganti dengan URL base API Anda
    timeout: 10000, // Timeout dalam milidetik (opsional)
    headers: {
        'Content-Type': 'application/json', // Contoh header lain jika diperlukan
    }
});

export default instance