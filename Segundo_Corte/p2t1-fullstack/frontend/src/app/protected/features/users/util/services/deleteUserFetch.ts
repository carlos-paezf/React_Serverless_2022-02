import { ErrorResponseType } from "../../../../../util/types"
import { APIBaseURL } from "../../../../../util/helpers/axiosAPIBaseURL"


export const deleteUserFetch = async ( idUser: string ) => {
    try {
        const response = await APIBaseURL.delete(
            `users/destroy/${ idUser }`
        )

        return response.data
    } catch ( error ) {
        const errorResponse = error as ErrorResponseType
        console.error( { deleteUserFetchError: errorResponse.data.error } )
        return
    }
}