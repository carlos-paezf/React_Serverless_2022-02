import { APIBaseURL } from "../../../../../util/helpers"
import { ErrorResponseType } from "../../../../../util/types"


export const disabledRoleFetch = async ( idRole: string ) => {
    try {
        const response = await APIBaseURL.patch(
            `roles/disabled/${ idRole }`
        )

        return response.data
    } catch ( error ) {
        const errorResponse = error as ErrorResponseType
        console.error( { disabledRoleFetchError: errorResponse.data.error } )
        return
    }
}