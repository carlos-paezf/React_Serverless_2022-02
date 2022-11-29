import { APIBaseURL } from "../../../../../util/helpers"
import { ErrorResponseType } from "../../../../../util/types"
import type { UserFormPropsType } from "../types"


export const createUserFetch = async ( body: UserFormPropsType ) => {
    try {
        const response = await APIBaseURL.post(
            'users',
            body,
            { headers: { "Content-Type": "application/json" } }
        )

        return response.data
    } catch ( error ) {
        const errorResponse = error as ErrorResponseType
        console.error( { createUserFetchError: errorResponse.data.error } )
        return
    }
}