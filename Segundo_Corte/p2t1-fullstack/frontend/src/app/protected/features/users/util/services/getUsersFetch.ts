import { APIBaseURL } from "../../../../../util/helpers"
import { ErrorResponseType } from "../../../../../util/types"
import { GetParamsPropsType } from "../../../../types"


export const getUsersFetch = async ( getParams?: GetParamsPropsType ) => {
    const params = getParams || { from: 0, limit: 10, all: false, order: 'ASC' }
    try {
        const response = await APIBaseURL.get(
            "users",
            { params }
        )

        return response.data
    } catch ( error ) {
        const errorResponse = error as ErrorResponseType
        console.error( { getUsersFetchError: errorResponse.data.error } )
        return
    }
}