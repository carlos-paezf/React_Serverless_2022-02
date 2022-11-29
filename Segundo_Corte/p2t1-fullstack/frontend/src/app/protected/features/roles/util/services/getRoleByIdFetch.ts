import { APIBaseURL } from "../../../../../util/helpers"
import { ErrorResponseType } from "../../../../../util/types"
import { GetByIdParamsPropsType } from "../../../../types"


export const getRoleByIdFetch = async ( { id, includeDeleted }: GetByIdParamsPropsType ) => {
    try {
        const response = await APIBaseURL.get(
            `roles/${ id }${ includeDeleted ? `?deleted=true` : `` }`
        )

        return response.data
    } catch ( error ) {
        const errorResponse = error as ErrorResponseType
        console.error( { getRoleByIdFetch: errorResponse.data.error } )
        return
    }
}