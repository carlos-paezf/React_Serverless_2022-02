import { APIBaseURL } from "../../../../../util/helpers"
import { ErrorResponseType } from "../../../../../util/types"
import { RoleFormPropsType } from "../types"


export const updateRoleFetch = async ( { idRole, ...rest }: RoleFormPropsType ) => {
    try {
        const response = await APIBaseURL.put(
            `roles/${ idRole }`,
            { ...rest },
            { headers: { "Content-Type": "application/json" } }
        )

        return response.data
    } catch ( error ) {
        const errorResponse = error as ErrorResponseType
        console.error( { updateRoleFetchError: errorResponse.data.error } )
        return
    }
}