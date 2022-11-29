import { APIBaseURL } from '../../../../../util/helpers'
import { ErrorResponseType } from '../../../../../util/types'
import type { RoleFormPropsType } from '../types'


export const createRoleFetch = async ( body: RoleFormPropsType ) => {
    try {
        const response = await APIBaseURL.post(
            'roles',
            body,
            { headers: { "Content-Type": "application/json" } }
        )

        return response.data
    } catch ( error ) {
        const errorResponse = error as ErrorResponseType
        console.error( { createRoleFetchError: errorResponse.data.error } )
        return
    }
}