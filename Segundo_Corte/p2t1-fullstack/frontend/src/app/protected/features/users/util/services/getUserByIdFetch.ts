import { APIBaseURL } from "../../../../../util/helpers"
import { ErrorResponseType } from "../../../../../util/types"
import { GetByIdParamsPropsType } from "../../../../types"


export const getUserByIdFetch = async ( { id, includeDeleted }: GetByIdParamsPropsType ) => {
    try {
        const response = await APIBaseURL.get(
            `users/${ id }${ includeDeleted ? `?deleted=true` : `` }`
        )

        return response.data
    } catch ( error ) {
        const errorResponse = error as ErrorResponseType
        console.error( { getUserByIdFetchError: errorResponse.data.error } )
        return
    }
}