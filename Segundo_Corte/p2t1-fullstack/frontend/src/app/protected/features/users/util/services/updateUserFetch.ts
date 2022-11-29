import { APIBaseURL } from '../../../../../util/helpers'
import { ErrorResponseType } from '../../../../../util/types'
import { UpdateUserPropsType } from '../types/userType'


export const updateUserFetch = async ( { idUser, ...rest }: UpdateUserPropsType ) => {
    try {
        const response = await APIBaseURL.put(
            `users/${ idUser }`,
            { ...rest },
            { headers: { "Content-Type": "application/json" } }
        )

        return response.data
    } catch ( error ) {
        const errorResponse = error as ErrorResponseType
        console.error( { updateUserFetchError: errorResponse.data.error } )
        return
    }
}