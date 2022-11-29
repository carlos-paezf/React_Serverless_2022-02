import { APIBaseURL } from "../../../../../util/helpers"
import { ErrorResponseType } from "../../../../../util/types"


export const restoreRoleFetch = async ( idRole: string ) => {
    try {
        const response = await APIBaseURL.patch(
            `roles/restore/${ idRole }`
        )

        return response.data
    } catch ( error ) {
        const errorResponse = error as ErrorResponseType
        console.error( { restoreRoleFetchError: errorResponse.data.error } )
        return
    }
}