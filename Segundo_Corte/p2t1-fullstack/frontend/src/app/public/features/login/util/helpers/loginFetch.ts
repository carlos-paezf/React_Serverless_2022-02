import { authBaseURL } from '../../../../../util/helpers/axiosAuthBaseURL'
import { LoginPropsType } from '../types/authTypes'


/**
 * It takes in a loginProps object, and returns a response object. 
 * The loginProps object is passed to the fetch function, which is a function that makes a request to
 * the server.
 * The response object is returned by the fetch function, and then converted to a JSON object.
 * The JSON object is then returned by the loginFetch function.
 * 
 * @param {LoginPropsType} loginProps - LoginPropsType
 * @returns The response from the server.
 */
export const loginFetch = async ( loginProps: LoginPropsType ) => {
    try {
        const response = await authBaseURL.post(
            "login",
            loginProps,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        return response.data
    } catch ( error ) {
        console.error( { loginFetchError: error } )
        return
    }
}