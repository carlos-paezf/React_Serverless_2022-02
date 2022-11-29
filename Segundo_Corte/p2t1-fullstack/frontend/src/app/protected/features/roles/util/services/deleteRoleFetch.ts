import { APIBaseURL } from '../../../../../util/helpers'
import { ErrorResponseType } from '../../../../../util/types/errorResponseType'


export const deleteRoleFetch = async ( idRole: string ) => {
    try {
        const response = await APIBaseURL.delete(
            `roles/destroy/${ idRole }`
        )

        return response.data
    } catch ( error ) {
        const errorResponse = error as ErrorResponseType
        console.error( { deleteRoleFetchError: errorResponse.data.error } )
        return
    }
}