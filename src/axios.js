import axios from 'axios';

const instance = axios.create({
    baseURL: "https://not-tinder-backend.herokuapp.com",
});

export default instance;