import { APIBaseURL } from "../../../../../util/helpers"
import { ErrorResponseType } from "../../../../../util/types"


export const disabledUserFetch = async ( idUser: string ) => {
    try {
        const response = await APIBaseURL.patch(
            `users/disabled/${ idUser }`
        )

        return response.data
    } catch ( error ) {
        const errorResponse = error as ErrorResponseType
        console.error( { disabledUserFetchError: errorResponse.data.error } )
        return
    }
}