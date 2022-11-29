import { ErrorResponseType } from '../../../../../util/types'
import { APIBaseURL } from '../../../../../util/helpers/axiosAPIBaseURL'
import { GetParamsPropsType } from '../../../../types'


export const getRolesFetch = async ( getParams?: GetParamsPropsType ) => {
    const params = getParams || { from: 0, limit: 10, all: true, order: 'ASC' }
    try {
        const response = await APIBaseURL.get(
            "roles",
            { params }
        )

        return response.data
    } catch ( error ) {
        const errorResponse = error as ErrorResponseType
        console.error( { getRolesFetchError: errorResponse.data.error } )
        return
    }
}