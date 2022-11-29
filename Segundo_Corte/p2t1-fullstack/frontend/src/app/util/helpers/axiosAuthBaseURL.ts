import axios from 'axios'


export const authBaseURL = axios.create( {
    baseURL: 'http://localhost:3000/auth'
} )