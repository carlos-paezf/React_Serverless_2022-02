import axios from 'axios'
import { SessionStorageService } from './storageService/sessionStorage'


const accessToken = SessionStorageService.getItem( 'accessToken' )


export const APIBaseURL = axios.create( {
    baseURL: 'http://localhost:3000/api',
    headers: {
        Authorization: `Bearer ${ accessToken?.replace( /"/g, `` ) }`
    }
} )


APIBaseURL.interceptors.response.use(
    ( response ) => {
        return response
    },
    ( error ) => {
        if ( error.response.data.error.name === "JsonWebTokenError" || error.response.data.error === "Expired JWT" ) {
            SessionStorageService.clearSessionStorage()
            window.location.reload()
        }
    }
)