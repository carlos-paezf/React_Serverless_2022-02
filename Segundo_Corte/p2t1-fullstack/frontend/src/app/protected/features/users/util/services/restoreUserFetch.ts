import { APIBaseURL } from "../../../../../util/helpers"
import { ErrorResponseType } from "../../../../../util/types"



export const restoreUserFetch = async ( idUser: string ) => {
    try {
        const response = await APIBaseURL.patch(
            `users/restore/${ idUser }`
        )

        return response.data
    } catch ( error ) {
        const errorResponse = error as ErrorResponseType
        console.error( { restoreUserFetchError: errorResponse.data.error } )
        return
    }
}